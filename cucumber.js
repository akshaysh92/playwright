/* eslint-disable no-console */
// module.exports = {
//   default: {
//     format: ['progress-bar', 'json:reports/cucumber-report.json', 'node_modules/cucumber-pretty'],
//     requireModule: ['ts-node/register'],
//     require: ['world/world.ts', 'step-definitions/**/*.ts', 'hooks/**/*.ts'],
//     worldParameters: {
//       appUrl: 'https://maax.vercel.app',
//     },
//   },
// };

// --require \"world/world.ts\" --require \"step-definitions/**/*.ts\" --require \"hooks/**/*.ts\"  --require-module \"ts-node/register\" --format-options \"{\\\"snippetInterface\\\": \\\"async-await\\\"}\" --format json:reports/cucumber-report.json --format summary --format progress-bar --format node_modules/cucumber-pretty
// const URL = process.env.URL ? process.env.URL : null;
// const browser = process.env.browser ? process.env.browser : 'chrome';
// const worldParameters = { URL: URL, browser: browser };
// const step_definitions = process.env.spec
//   ? process.env.spec
//   : 'step-definitions/components/**/*.ts';

// var component = [
//   '--require "world/component.ts"',
//   `--require "${step_definitions}"`,
//   '--require "hooks/**/*.ts"',
//   '--require-module "ts-node/register"',
//   `--format-options ${JSON.stringify({ snippetInterface: 'async-await' })}`,
//   '--format json:reports/cucumber-report.json',
//   '--format progress-bar',
//   '--format node_modules/cucumber-pretty',
//   '--parallel 1',
//   `--world-parameters ${JSON.stringify(worldParameters)}`,
// ].join(' ');

// module.exports = {
//   component: component,
// };
