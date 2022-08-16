const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

import corsProxy from 'cors-anywhere';

corsProxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
})
.listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});
