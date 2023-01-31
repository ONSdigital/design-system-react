import cors from "cors";
import express from "express";
import fs from "fs-extra";

import { renderPage } from "./rendering";
import { discoverComponents, discoverComponentExamples, discoverGeneralExamples } from "../helpers/discovery";

const designSystemPath = `${ process.cwd() }/node_modules/@ons/design-system`;

let designSystemVersion = fs.readJsonSync(`${designSystemPath}/package.json`).version;
if (designSystemVersion === "3.0.1") {
  const projectPackageJson = fs.readJsonSync(`${process.cwd()}/package.json`, { encoding: "utf8" });
  const designSystemDependency = projectPackageJson.devDependencies["@ons/design-system"];
  designSystemVersion = designSystemDependency.match(/#(\d+\.\d+\.\d+)$/)[1];
}

const SAFE_PARAM_REGEX = /^[A-Za-z0-9_-]+$/;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  let body = "<h1>Design System React - Development Server</h1>";

  const componentNames = discoverComponents();
  if (componentNames.length > 0) {
    body += `
      <h2>Components</h2>
      <ul class="ons-list ons-list--dashed">
        ${
          componentNames
            .map(name => `<li class="ons-list__item"><a href="/components/${name}">${name}</a></li>`)
            .join("\n")
        }
      </ul>
    `;
  }

  const examples = discoverGeneralExamples();
  if (examples.length > 0) {
    body += `
      <h2>General examples</h2>
      <ul class="ons-list ons-list--dashed">
        ${
          examples
            .map(example => `<li class="ons-list__item"><a href="/examples/${example.name}">${example.title}</a></li>`)
            .join("\n")
        }
      </ul>
    `;
  }

  res.send(renderPage({
    designSystemVersion,
    title: "Design System React - Development Server",
    bodyClass: "ons-u-m-m",
    body,
  }));
});

app.get("/components/:componentName", (req, res) => {
  const {componentName} = req.params;

  if (!SAFE_PARAM_REGEX.test(componentName)) {
    res.sendStatus(404);
    return;
  }

  if (!fs.existsSync(`./src/components/${componentName}/index.tsx`)) {
    res.sendStatus(404);
    return;
  }

  const examples = discoverComponentExamples(componentName);

  res.send(renderPage({
    designSystemVersion,
    title: `Examples for component: ${componentName} - Components"`,
    bodyClass: "ons-u-m-m",
    body: `
      <h1>Examples for component: ${componentName}</h1>

      ${!examples.length ? "<p>No examples were found for this component.</p>" : ""}

      <ul class="ons-list ons-list--dashed">
        ${
          examples
            .map(example => `<li class="ons-list__item"><a href="/components/${componentName}/examples/${example.name}">${example.title}</a></li>`)
            .join("\n")
        }
      </ul>
    `,
  }));
});

app.get("/components/:componentName/examples/:exampleName", (req, res) => {
  const {componentName, exampleName} = req.params;

  if (!SAFE_PARAM_REGEX.test(componentName) || !SAFE_PARAM_REGEX.test(exampleName)) {
    res.sendStatus(404);
    return;
  }

  const examplePath = `./src/components/${componentName}/examples/${exampleName}.tsx`;
  if (!fs.existsSync(examplePath)) {
    res.sendStatus(404);
    return;
  }

  res.send(renderPage({
    designSystemVersion,
    title: `Example '${exampleName}' for component: ${componentName} - Components"`,
    body: `
      <div data-example-class="${componentName}__${exampleName.replace(/\-/g, "_")}"></div>
      <script src="/design-system-react-examples.js"></script>
    `,
  }));
});

app.get("/examples/:exampleName", (req, res) => {
  const {exampleName} = req.params;

  const examplePath = `./src/examples/${exampleName}.tsx`;
  if (!fs.existsSync(examplePath)) {
    res.sendStatus(404);
    return;
  }

  res.send(renderPage({
    designSystemVersion,
    title: `${exampleName} - General Examples"`,
    body: `
      <div data-example-class="GeneralExample__${exampleName.replace(/\-/g, "_")}"></div>
      <script src="/design-system-react-examples.js"></script>
    `,
  }));
});

app.use(express.static("./dist"));

const port = process.env.TEST_PORT ?? 3010;

app.listen(port);

console.log("----------------------------------------------------------------------------");
console.log(`Dev server started: http://localhost:${port}`);
console.log("----------------------------------------------------------------------------");
