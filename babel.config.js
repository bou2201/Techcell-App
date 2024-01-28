module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv", {
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true
        }
      ],
      [
        "module-resolver", {
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@models": "./src/models",
            "@store": "./src/store",
            "@constants": "./src/constants",
            "@configs": "./src/configs",
            "@utils": "./src/utils",
            "@type": "./src/type",
            "@apis": "./src/apis",
            "@hooks": "./src/hooks",
          }
        }
      ]
    ]
  };
};
