import { renderPage } from "./rendering";

describe("dev-server/rendering", () => {
  describe("renderPage(params)", () => {
    it("assumes the default body class of ''", () => {
      const html = renderPage({});

      expect(html).toMatchSnapshot();
    });

    it("substitutes placeholder values", () => {
      const html = renderPage({
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
