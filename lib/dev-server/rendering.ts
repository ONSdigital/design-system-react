import fs from "fs-extra";

const DEFAULT_PARAMS = {
  designSystemVersion: "1.2.3",
  bodyClass: "",
};

export function renderPage(params: any): string {
  const templatePath = "./lib/dev-server/template.html";
  const template = fs.readFileSync(templatePath, { encoding: "utf8" });

  params = Object.assign({}, DEFAULT_PARAMS, params);

  let result = template;
  for (let paramName of Object.keys(params)) {
    result = result.replace(new RegExp(`[{][{]${paramName}[}][}]`, "g"), params[paramName]);
  }

  return result;
}
