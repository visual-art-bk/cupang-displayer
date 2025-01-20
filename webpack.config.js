const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const DEVELOPMENT_MODE = "development";
const PRODUCTION_MODE = "production";

const buildModeSetter = BuildModeSetter({ prodMode: true });

module.exports = {
  mode: buildModeSetter.getMode(),
  entry: {
    "react-vendors": ["react", "react-dom", "recoil"],
    ...getEntries(buildModeSetter.getMode()),
  },
  output: {
    path: path.resolve(__dirname, "dist", "js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module.css$/i,
        use: ["style-loader"],
      },
      {
        test: /\.module.css$/i,

        loader: "css-loader",
        options: {
          modules: false,
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js"],
  },
};

function BuildModeSetter({ devMode, prodMode }) {
  let currentMode;

  if (devMode === true && (prodMode === false || prodMode === undefined)) {
    currentMode = DEVELOPMENT_MODE;
  } else if (
    prodMode === true &&
    (devMode === false || devMode === undefined)
  ) {
    currentMode = PRODUCTION_MODE;
  } else {
    currentMode = DEVELOPMENT_MODE;
    console.warn("mode is not valid, current mode will be development mode");
  }

  return {
    getMode: () => currentMode,
  };
}

function getEntries(mode = "development") {
  if (mode === DEVELOPMENT_MODE) {
    return {
      index_dev_cupang_display: {
        import: "pages/index/index.cupang-display.tsx",
        filename: "index.cupang-display.dev.bundle.js",
        dependOn: ["react-vendors"],
      },
      index_dev_slider: {
        import: "pages/index/index.slider.tsx",
        filename: "index.slider.dev.bundle.js",
        dependOn: ["react-vendors"],
      },
      edit_dev_cupang_display: {
        import: "pages/edit/edit.cupang-display.tsx",
        filename: "edit.cupang-display.dev.bundle.js",
        dependOn: ["react-vendors"],
      },
      edit_dev_slider: {
        import: "pages/edit/edit.slider.tsx",
        filename: "edit.slider.dev.bundle.js",
        dependOn: ["react-vendors"],
      },
    };
  } else {
    return {
      index_prod_cupang_display: {
        import: "pages/index/index.cupang-display.tsx",
        filename: "index.cupang-display.prod.bundle.js",
        dependOn: ["react-vendors"],
      },
      index_prod_slider: {
        import: "pages/index/index.slider.tsx",
        filename: "index.slider.prod.bundle.js",
        dependOn: ["react-vendors"],
      },
      edit_prod_cupang_display: {
        import: "pages/edit/edit.cupang-display.tsx",
        filename: "edit.cupang-display.prod.bundle.js",
        dependOn: ["react-vendors"],
      },
      edit_prod_slider: {
        import: "pages/edit/edit.slider.tsx",
        filename: "edit.slider.prod.bundle.js",
        dependOn: ["react-vendors"],
      },
    };
  }
}
