import fs from "fs-extra";

const designSystemPath = `${ process.cwd() }/node_modules/@ons/design-system`;

let designSystemVersion = fs.readJsonSync(`${designSystemPath}/package.json`).version;
if (designSystemVersion === "3.0.1") {
  const projectPackageJson = fs.readJsonSync(`${process.cwd()}/package.json`, { encoding: "utf8" });
  const designSystemDependency = projectPackageJson.devDependencies["@ons/design-system"];
  designSystemVersion = designSystemDependency.match(/#(\d+\.\d+\.\d+)$/)[1];
}

export default designSystemVersion;
