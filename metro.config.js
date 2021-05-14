module.exports = {
  resolver: {
    sourceExts: ["js", "json", "ts", "tsx", "jsx"],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
