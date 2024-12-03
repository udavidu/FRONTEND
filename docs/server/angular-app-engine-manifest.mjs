
export default {
  basePath: '/ng-deploy',
  entryPoints: new Map([['', () => import('./main.server.mjs')]]),
};
  