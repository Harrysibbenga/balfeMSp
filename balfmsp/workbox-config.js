module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{css,ico,png,jpg,html,js,txt}"],
  swDest: "dist/sw.js",
  maximumFileSizeToCacheInBytes: 5000000,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|json)$/,
      handler: "StaleWhileRevalidate"
    }
  ]
};
