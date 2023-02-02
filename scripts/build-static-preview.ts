import fs from "fs-extra";

import { discoverComponents, discoverComponentExamples, discoverGeneralExamples } from "../lib/helpers/discovery";
import { renderComponentExample, renderComponentPage, renderGeneralExample, renderIndexPage } from "../lib/dev-server/pages";

const OUTPUT_PATH = "./dist";

function writePage(uri: string, body: string): void {
  let outputPath = `${OUTPUT_PATH}/${uri}`;
  if (uri !== "") {
    outputPath += "/";
  }
  fs.ensureDirSync(outputPath);
  fs.writeFileSync(`${outputPath}index.html`, body);
}

// Generate index page for viewing the examples.
writePage("", renderIndexPage());

// Generate page for each component.
for (let componentName of discoverComponents()) {
  writePage(`components/${componentName}`, renderComponentPage(componentName));

  // Generate page for each example of the component.
  for (let example of discoverComponentExamples(componentName)) {
    writePage(`components/${componentName}/examples/${example.name}`, renderComponentExample(componentName, example.name));
  }
}

// Generate page for each general example.
for (let example of discoverGeneralExamples()) {
  writePage(`examples/${example.name}`, renderGeneralExample(example.name));
}
