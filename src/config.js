// require('dotenv').config();
//
// const config = {
//   // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
//   // like '/berry-material-react/react/default'
//
//    basename: '/',
//    defaultPath: '/dashboard/default',
//    fontFamily: `'Roboto', sans-serif`,
//    host: 'localhost',
//    port: '8080',
//    http: 'http',
//    borderRadius: 12
// };
//
// export default config;

const config = {
  basename: process.env.BASENAME || '/',
  defaultPath: process.env.DEFAULT_PATH || '/dashboard/default',
  fontFamily: process.env.FONT_FAMILY || `'Roboto', sans-serif`,
  host: process.env.API_HOST || 'localhost',
  port: process.env.API_PORT || '8080',
  http: process.env.HTTP || 'http',
  borderRadius: process.env.BORDER_RADIUS || 12
};

module.exports = config;
