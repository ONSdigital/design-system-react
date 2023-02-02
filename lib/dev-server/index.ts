import cors from "cors";
import express from "express";
import fs from "fs-extra";

import { renderComponentExample, renderComponentPage, renderGeneralExample, renderIndexPage } from "./pages";

const SAFE_PARAM_REGEX = /^[A-Za-z0-9_-]+$/;

const app = express();

// The following is needed to avoid Content-Security-Policy issues when accessing fonts
// from the design system CDN.
app.use(cors());

app.get("/", (req, res) => {
  res.send(renderIndexPage());
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

  res.send(renderComponentPage(componentName));
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

  res.send(renderComponentExample(componentName, exampleName));
});

app.get("/examples/:exampleName", (req, res) => {
  const {exampleName} = req.params;

  const examplePath = `./src/examples/${exampleName}.tsx`;
  if (!fs.existsSync(examplePath)) {
    res.sendStatus(404);
    return;
  }

  res.send(renderGeneralExample(exampleName));
});

app.use(express.static("./dist"));

const port = process.env.TEST_PORT ?? 3010;

app.listen(port);

console.log("----------------------------------------------------------------------------");
console.log(`Dev server started: http://localhost:${port}`);
console.log("----------------------------------------------------------------------------");
