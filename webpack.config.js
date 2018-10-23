const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              localIdentName: "[path]__[name]__[local]___[hash:base64:5]",
            },
          },
          {
            loader: require.resolve('less-loader'), // compiles Less to CSS
          },
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
      },
    ],
  },
  externals: {
    'react': 'react',
    'React': 'React',
    'ReactDOM': 'ReactDOM',
    'react-dom': 'ReactDOM',
    'antd': 'antd',
    'PropTypes': 'prop-types',
  },
};
