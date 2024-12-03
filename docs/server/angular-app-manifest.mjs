
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/FRONTEND/get-monitors",
    "route": "/FRONTEND"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/get-monitors"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/get-projectors"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/get-televisions"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/device-management"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/add-devices"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/edit-devices"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/sales-logs"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/sales-revenue"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/number-of-devices"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/product-comparision"
  },
  {
    "renderMode": 2,
    "route": "/FRONTEND/number-od-devices-tech-inf"
  }
],
  assets: new Map([
['index.csr.html', {size: 16917, hash: '6c9bc41ada757713bbc5620c714eec7aeef2a0affd82002d0fd394c69940fd56', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7961, hash: '589a26b524559d53f9c534580d64ede4ff7d1a727ad5e01e6f6cf0116a724297', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['get-projectors/index.html', {size: 26271, hash: '074e1c17acac037d2c0f88d22c619f1690391738f639c2641d14e3cdc522cf69', text: () => import('./assets-chunks/get-projectors_index_html.mjs').then(m => m.default)}], 
['get-televisions/index.html', {size: 26261, hash: '96ab351d9efaa21322c98e04fd86f68a6f6d5ac54f311657404325b144e3d025', text: () => import('./assets-chunks/get-televisions_index_html.mjs').then(m => m.default)}], 
['edit-devices/index.html', {size: 37087, hash: 'bd160acb44f82b979194b879980a3704dd34a77380817a790ef86be1d1d9bbe8', text: () => import('./assets-chunks/edit-devices_index_html.mjs').then(m => m.default)}], 
['device-management/index.html', {size: 31676, hash: '7b74d753255b3a6971fc36d034451383d574e1bc50b0172d7f578e0132824823', text: () => import('./assets-chunks/device-management_index_html.mjs').then(m => m.default)}], 
['add-devices/index.html', {size: 37514, hash: 'ea37a8cd910c3ab8fff73aa9705fb7d7bda660aac65274e7aab6f2a00b8811a3', text: () => import('./assets-chunks/add-devices_index_html.mjs').then(m => m.default)}], 
['sales-logs/index.html', {size: 30127, hash: '7ed7166247987310c990c28a655ef801261e11376a8501a5790965dc3df64161', text: () => import('./assets-chunks/sales-logs_index_html.mjs').then(m => m.default)}], 
['number-of-devices/index.html', {size: 34735, hash: 'f0a0add526dd165e6a56c087bdc1e574ae0c82d5a68a4983c203182e1cc24100', text: () => import('./assets-chunks/number-of-devices_index_html.mjs').then(m => m.default)}], 
['sales-revenue/index.html', {size: 31491, hash: '5cfdcb9416f65151402e2e384aa5f43182538502190cb82505f8ac663ad4586b', text: () => import('./assets-chunks/sales-revenue_index_html.mjs').then(m => m.default)}], 
['product-comparision/index.html', {size: 29006, hash: '4bf4e86d0dac0363e3272556ae1f62c0a171a91d5d999054b165057cf5927236', text: () => import('./assets-chunks/product-comparision_index_html.mjs').then(m => m.default)}], 
['get-monitors/index.html', {size: 26263, hash: '2d494a7c16fe4d34020e643bba1f4b32c7d2831d7fbe3c00fe98a415e08f16ac', text: () => import('./assets-chunks/get-monitors_index_html.mjs').then(m => m.default)}], 
['number-od-devices-tech-inf/index.html', {size: 32083, hash: 'f42db40f9d1072c7bfb3e966ab8b4a26a7da73981df8760a8c63a7ca899d5cc0', text: () => import('./assets-chunks/number-od-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['styles-QZQZD5UG.css', {size: 209135, hash: 'vMeooU3gqpk', text: () => import('./assets-chunks/styles-QZQZD5UG_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
