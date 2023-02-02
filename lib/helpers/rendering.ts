import fs from "fs-extra";

const DEFAULT_PARAMS = {
  designSystemVersion: "1.2.3",
};

export function loadTemplate(templatePath: string): string {
  return fs.readFileSync(templatePath, { encoding: "utf8" });
}

export function renderPage(template: string, params: any): string {
  params = Object.assign({}, DEFAULT_PARAMS, params);

  let result = template;
  for (let paramName of Object.keys(params)) {
    result = result.replace(new RegExp(`[{][{]${paramName}[}][}]`, "g"), params[paramName]);
  }

  return result;
}
