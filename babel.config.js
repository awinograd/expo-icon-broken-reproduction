module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-transform-runtime', // https://github.com/facebook/react-native/issues/21052#issuecomment-421667360
    ],
  };
};
