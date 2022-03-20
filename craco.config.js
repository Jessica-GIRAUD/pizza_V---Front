const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#ff6233",
              "@secondary-color": "#ff6233",
              "@heading-color": "#ffffffe1", // heading text color

              "@link-color": "#ffffffe1",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
