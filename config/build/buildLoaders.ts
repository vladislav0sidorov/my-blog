import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  //* Порядок loader`ов имеет значение
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  return [typescriptLoader, sassLoader];
}
