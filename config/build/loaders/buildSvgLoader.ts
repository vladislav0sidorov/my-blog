export function buildSvgLoader() {
  return {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: ['@svgr/webpack'],
  };
}
