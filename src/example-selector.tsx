import ReactDOM from "react-dom/client";

import * as exampleComponents from "./example-components";

for (let exampleElement of document.querySelectorAll("[data-example-class]")) {
  const exampleComponentName = exampleElement.getAttribute("data-example-class");
  const ExampleComponent = (exampleComponents as any)[exampleComponentName as string] as React.JSXElementConstructor<any>;
  ReactDOM.createRoot(exampleElement).render(<ExampleComponent/>);
}
