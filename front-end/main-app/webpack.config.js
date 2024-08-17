// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;

const { ModuleFederationPlugin } = require("webpack").container;
const { shareAll } = require('@angular-architects/module-federation/webpack');

require('dotenv').config();


const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mainApp",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        remotes: {
          mfeLogin: `mfelogin@${process.env.MFE_LOGIN}/remoteEntry.js`,
          mfeHomePage: `mfehomepage@${process.env.MFE_HOMEPAGE}/remoteEntry.js`,
        },
        shared: shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        }),
        // library: { type: "module" },

        // // For remotes (please adjust)
        // // name: "mainApp",
        // // filename: "remoteEntry.js",
        // // exposes: {
        // //     './Component': './/src/app/app.component.ts',
        // // },

        // // For hosts (please adjust)
        // // remotes: {
        // //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // // },

        // shared: share({
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        //   ...sharedMappings.getDescriptors()
        // })
    }),
    sharedMappings.getPlugin()
  ],
};
