import { loadTemplate, renderPage } from "./rendering";

const FAKE_TEMPLATE = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>{{title}} - Design System React</title>
      <link rel="stylesheet" href="https://cdn.ons.gov.uk/sdc/design-system/61.0.4/css/main.css">
      <link rel="stylesheet" href="/main.css">
    </head>
    <body class="{{bodyClass}}">
      {{body}}
    </body>
  </html>
`;

describe("dev-server/rendering", () => {
  describe("loadTemplate(templatePath: string): string", () => {
    it("loads the template", () => {
      const template = loadTemplate("./lib/helpers/example-template.html");

      expect(template).toMatchSnapshot();
    });
  })

  describe("renderPage(template: string, params: any): string", () => {
    it("substitutes placeholder values", () => {
      const html = renderPage(FAKE_TEMPLATE, {
        designSystemVersion: "1.2.3",
        title: "An example page",
        bodyClass: "an-example-body-class",
        body: `
          <p>Example body content.</p>
        `,
      });

      expect(html).toMatchSnapshot();
    });
  });
});
