import autoprefixer from "autoprefixer";
import fs from "fs-extra";
import path from "path";
import sass from "sass";
import postcss from "postcss";

function buildStylesheetAsync(entrypoint) {
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
    .then(result => processSass(options, result))
    .then(result => processPostCss(options, result))
    .then(result => save(options, result));
}

async function processSass(options) {
  return sass.renderSync(options);
}

async function processPostCss(options, { css, map }) {
  const processor = postcss([ autoprefixer() ]);
  return await processor.process(css, {
    from: path.resolve(options.file),
    to: path.resolve(options.outFile),
    map: { prev: map?.toString() },
  });
}

async function save(options, { css, map }) {
  await fs.ensureDir(path.dirname(options.outFile));
  await fs.writeFile(options.outFile, css);
  if (options.sourceMap) {
    await fs.writeFile(`${options.outFile}.map`, map.toString());
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
