import glob from "glob";
import path from "path";

export function discoverComponents(): string[] {
  return glob.sync("./src/components/*/index.tsx")
    .map((componentPath: string) => path.basename(path.dirname(componentPath)))
    .sort();
}

export interface ExampleDetails {
  name: string,
  title: string,
}

export function discoverComponentExamples(componentName: string): ExampleDetails[] {
  return discoverExamplesHelper(`./src/components/${componentName}`);
}

export function discoverGeneralExamples(): ExampleDetails[] {
  return discoverExamplesHelper("./src");
}

function discoverExamplesHelper(basePath: string): ExampleDetails[] {
  return glob.sync(`${basePath}/examples/*.tsx`)
    .map((examplePath: string) => path.basename(examplePath).replace(".tsx", ""))
    .sort()
    .map((exampleName: string) => ({
      name: exampleName,
      title: exampleName[0].toUpperCase() + exampleName.substring(1).replace(/\-/g, " "),
    }));
}
