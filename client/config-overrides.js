// const { injectBabelPlugin } = require("react-app-rewired");
// const rewireLess = require("react-app-rewire-less");

// module.exports = function override(config, env) {
//   config = injectBabelPlugin(
//     ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
//     config
//   );
//   config = rewireLess.withLoaderOptions({
//     modifyVars: { "@primary-color": "rgb(230, 83, 107)" },
//     javascriptEnabled: true
//   })(config, env);
//   return config;
// };

const path = require('path');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const { addReactRefresh } = require('customize-cra-react-refresh');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra');

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src/client/styles'),
  varFile: path.join(__dirname, './src/client/styles/vars.less'),
  mainLessFile: path.join(__dirname, './src/client/styles/main.less'),
  themeVariables: [
    '@primary-color',
    '@font-family',
    '@btn-primary-color',
    '@btn-default-bg',
    '@text-color',
    '@component-background',
    '@input-bg',
    '@disabled-bg',
    '@disabled-color',
    '@select-selection-item-bg',
    '@select-item-active-bg',
  ],
  indexFileName: 'index.html',
  generateOnce: false,
  lessUrl: 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js',
  publicPath: '',
  customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
};

module.exports = override(
  addReactRefresh(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addBabelPlugin(['styled-components', { displayName: true }]),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': 'rgb(230, 83, 107)',
      '@font-family': 'SourceSansPro',
      '@btn-primary-color': '#fff',
      '@btn-default-bg': '@component-background',
      '@text-color': 'fade(@black, 65%)',
      '@component-background': '#fff',
      '@input-bg': '#fff',
    },
  }),
  addWebpackPlugin(new AntDesignThemePlugin(options))
);
