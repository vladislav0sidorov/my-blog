import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  //* Порядок loader`ов имеет значение
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
