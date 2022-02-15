/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new webpack.DefinePlugin({
        __IS_SERVER__: JSON.stringify(isServer),
      })
    );

    // Important: return the modified config
    const loaderConfigs = config.module.rules
      .flatMap((rule) => {
        if (Array.isArray(rule.oneOf)) {
          return rule.oneOf;
        }
        return rule;
      })
      .flatMap((rule) => rule.use);

    for (const loaderConfig of loaderConfigs) {
      const loader = loaderConfig?.loader ?? null;
      if (
        loader !== null &&
        loader.includes("css-loader") &&
        !loader.includes("postcss-loader")
      ) {
        if (!!loaderConfig.options?.modules) {
          loaderConfig.options.modules = {
            ...loaderConfig.options.modules,
            exportLocalsConvention: "camelCaseOnly",
          };
        }
      }
    }

    return config;
  },
};
