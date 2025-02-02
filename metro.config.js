const { getDefaultConfig } = require("expo/metro-config"); // Если используете Expo

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // Убираем `svg` из assetExts и добавляем в sourceExts
  config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
  config.resolver.sourceExts.push("svg");

  return config;
})();