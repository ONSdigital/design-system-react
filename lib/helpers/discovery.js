import glob from "glob";
import path from "path";

export function discoverComponents() {
  return glob.sync("./src/components/*/index.tsx")
    .map(componentPath => path.basename(path.dirname(componentPath)))
    .sort();
}

export function discoverComponentExamples(componentName) {
  return discoverExamplesHelper(`./src/components/${componentName}`);
}

export function discoverGeneralExamples() {
  return discoverExamplesHelper("./src");
}

function discoverExamplesHelper(basePath) {
  return glob.sync(`${basePath}/examples/*.tsx`)
    .map(examplePath => path.basename(examplePath).replace(".tsx", ""))
    .sort()
    .map(exampleName => ({
      name: exampleName,
      title: exampleName[0].toUpperCase() + exampleName.substring(1).replace(/\-/g, " "),
    }));
}
