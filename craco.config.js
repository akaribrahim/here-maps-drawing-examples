const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');

module.exports = {
   reactScriptsVersion: 'react-scripts' /* (default value) */,
   style: {
      modules: {
         localIdentName: '',
      },
      css: {},
      sass: {},
      postcss: {
         mode: 'extends' /* (default value) */ || 'file',
         loaderOptions: (postcssLoaderOptions, { env, paths }) => {
            return postcssLoaderOptions;
         },
      },
   },
   eslint: {
      enable: true /* (default value) */,
      mode: 'extends' /* (default value) */ || 'file',
   },
   babel: {
      presets: [],
      plugins: [],
   },
   typescript: {
      enableTypeChecking: true /* (default value)  */,
   },
   webpack: {
      configure: (webpackConfig, { env, paths }) => {
         return webpackConfig;
      },
   },
   plugins: [
      {
         plugin: {
            overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
               return cracoConfig;
            },
            overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
               return webpackConfig;
            },
            overrideDevServerConfig: ({
               devServerConfig,
               cracoConfig,
               pluginOptions,
               context: { env, paths, proxy, allowedHost },
            }) => {
               return devServerConfig;
            },
            overrideJestConfig: ({
               jestConfig,
               cracoConfig,
               pluginOptions,
               context: { env, paths, resolve, rootDir },
            }) => {
               return jestConfig;
            },
         },
         options: {},
      },
   ],
};
