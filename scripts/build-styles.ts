import autoprefixer from "autoprefixer";
import fs from "fs-extra";
import path from "path";
import sass from "sass";
import postcss from "postcss";

function buildStylesheetAsync(entrypoint: string): Promise<any> {
  console.log(`Processing stylesheet '${entrypoint}'...`);

  const options = {
    file: path.resolve(entrypoint),
    sourceMap: true,
    sourceMapContents: true,
    outFile: path.resolve(`./dist/${path.parse(entrypoint).name}.css`),
    outputStyle: "compressed",
    includePaths: [
      "./node_modules",
    ],
  };

  return processSass(options)
    .then(result => processSass(options))
    .then(result => processPostCss(options, result))
    .then(result => save(options, result));
}

async function processSass(options: any) {
  return sass.renderSync(options);
}

async function processPostCss(options: any, result: any) {
  const processor = postcss([ autoprefixer() ]);
  return await processor.process(result.css, {
    from: path.resolve(options.file),
    to: path.resolve(options.outFile),
    map: { prev: result.map?.toString() },
  });
}

async function save(options: any, result: any) {
  await fs.ensureDir(path.dirname(options.outFile));
  await fs.writeFile(options.outFile, result.css);
  if (options.sourceMap) {
    await fs.writeFile(`${options.outFile}.map`, result.map.toString());
  }
}

(async () => {
  try {
    await buildStylesheetAsync("./src/styles/main.scss");;
  }
  catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
