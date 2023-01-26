import fs from "fs";

const DEFAULT_PARAMS = {
  bodyClass: "",
};

export function renderPage(params) {
  const templatePath = "./lib/dev-server/template.html";
  const template = fs.readFileSync(templatePath, { encoding: "utf8" });

  params = Object.assign({}, DEFAULT_PARAMS, params);

  let result = template;
  for (let paramName of Object.keys(params)) {
    result = result.replace(new RegExp(`[{][{]${paramName}[}][}]`, "g"), params[paramName]);
  }

  return result;
}
