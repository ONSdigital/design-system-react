# React version of the ONS Design System

[![GitHub release](https://img.shields.io/github/release/ONSdigital/design-system-react.svg)](https://github.com/ONSdigital/design-system-react/releases)
[![Tests](https://github.com/ONSdigital/design-system-react/actions/workflows/tests.yml/badge.svg)](https://github.com/ONSdigital/design-system-react/actions/workflows/tests.yml)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/ONSdigital/design-system-react.svg)](https://github.com/ONSdigital/design-system-react/pulls)
[![Github last commit](https://img.shields.io/github/last-commit/ONSdigital/design-system-react.svg)](https://github.com/ONSdigital/design-system-react/commits)
[![Github contributors](https://img.shields.io/github/contributors/ONSdigital/design-system-react.svg)](https://github.com/ONSdigital/design-system-react/graphs/contributors)

## Installing as a dependency

```bash
yarn add @ons/design-system-react@git+https://github.com/ONSdigital/design-system-react#0.0.1
```

## Using nvm (optional)

If you work across multiple Node.js projects there's a good chance they require different Node.js and npm versions.

To enable this we use [nvm (Node Version Manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. [install nvm](https://github.com/creationix/nvm#installation)
2. Run nvm install in the project directory (this will use .nvmrc)

## Install dependencies

```bash
yarn
```

## Preview component examples locally

```bash
yarn start
```

Once the server has started, navigate to <http://localhost:3010>

The port can be overridden if desired:

```bash
export TEST_PORT=5000; yarn start
```

## Testing

This project uses [jest](https://jestjs.io/docs/cli) and supports its command line options.

```bash
yarn test [jest-args]
```

### Run specific tests

Tests can be filtered using the [`testNamePattern`](https://jestjs.io/docs/cli#--testnamepatternregex) jest argument.

To run tests associated with a specific component:

```bash
yarn test --testNamePattern="<Highlight/>"
```

## Build

The build command builds the stylesheets and components needed to preview the examples
contained in this repository. In addition a .json file is generated to facilitate the
generation of API reference documentation.

The output of this command goes into the `./dist` directory.

```bash
yarn build
```

It is also possible to build a static preview of the examples which can be deployed
alongside PRs to preview component examples more easily.

```bash
yarn build-static-preview
```

Again the output goes into the `./dist` directory except this time it includes static
`.html` files.

## Recommended Visual Studio Code plugins for this project

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
