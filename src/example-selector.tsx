import ReactDOM from "react-dom/client";

import * as exampleComponents from "./example-components";

if (!document.body.getAttribute("data-ds-react-installed-examples")) {
  document.body.setAttribute("data-ds-react-installed-examples", "true");

  document.addEventListener("DOMContentLoaded", () => {
    for (let exampleElement of document.querySelectorAll("[data-react-example-name]")) {
      const exampleComponentName = exampleElement.getAttribute("data-react-example-name");
      const ExampleComponent = (exampleComponents as any)[exampleComponentName as string] as React.JSXElementConstructor<any>;
      ReactDOM.createRoot(exampleElement).render(<ExampleComponent/>);
    }
  });
}
