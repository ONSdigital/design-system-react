import { loadTemplate, renderPage } from "../helpers/rendering";
import { discoverComponents, discoverComponentExamples, discoverGeneralExamples } from "../helpers/discovery";
import designSystemVersion from "../helpers/designSystemVersion";

export function renderIndexPage(): string {
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

  return renderPage(loadTemplate("./lib/dev-server/templates/default.html"), {
    designSystemVersion,
    title: "Design System React - Development Server",
    body,
  });
}

export function renderComponentPage(componentName: string): string {
  const examples = discoverComponentExamples(componentName);

  return renderPage(loadTemplate("./lib/dev-server/templates/default.html"), {
    designSystemVersion,
    title: `Examples for component: ${componentName} - Components"`,
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
  });
}

export function renderComponentExample(componentName: string, exampleName: string): string {
  return renderPage(loadTemplate("./lib/dev-server/templates/example.html"), {
    designSystemVersion,
    title: `Example '${exampleName}' for component: ${componentName} - Components"`,
    body: `
      <div data-example-class="${componentName}__${exampleName.replace(/\-/g, "_")}"></div>
      <script src="/design-system-react-examples.js"></script>
    `,
  });
}

export function renderGeneralExample(exampleName: string): string {
  return renderPage(loadTemplate("./lib/dev-server/templates/example.html"), {
    designSystemVersion,
    title: `${exampleName} - General Examples"`,
    body: `
      <div data-example-class="GeneralExample__${exampleName.replace(/\-/g, "_")}"></div>
      <script src="/design-system-react-examples.js"></script>
    `,
  });
}
