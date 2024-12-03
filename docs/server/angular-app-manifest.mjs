
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/ng-deploy/get-monitors",
    "route": "/ng-deploy"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/get-monitors"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/get-projectors"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/get-televisions"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/device-management"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/add-devices"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/edit-devices"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/sales-logs"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/sales-revenue"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/number-of-devices"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/product-comparision"
  },
  {
    "renderMode": 2,
    "route": "/ng-deploy/number-od-devices-tech-inf"
  }
],
  assets: new Map([
['index.csr.html', {size: 16917, hash: '5e4f98dee38e3820898a12ff5f9ce7c2ecc7adfe08cddc69bf7bc2ea15dc6378', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7961, hash: '4e46394681056252f493c3533b2dd9bfa429fced8b25bf8fb7618767ffb44227', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['y/device-management/index.html', {size: 31687, hash: '512308d11a62a6f4da07cecc97eb6ddf63faf200e0aea25a9ea362ba184af12a', text: () => import('./assets-chunks/y_device-management_index_html.mjs').then(m => m.default)}], 
['y/add-devices/index.html', {size: 37525, hash: '896440ed31d6cdd3627bbebcb0a795c6560e9ceb6a95480f57425d798df9ab07', text: () => import('./assets-chunks/y_add-devices_index_html.mjs').then(m => m.default)}], 
['y/edit-devices/index.html', {size: 37098, hash: '80040180c478ab06f74225c2206449d80a3fef4da6b6195f4fb57745feb841e3', text: () => import('./assets-chunks/y_edit-devices_index_html.mjs').then(m => m.default)}], 
['y/sales-logs/index.html', {size: 38274, hash: '286692ba47aeb00829de6b11c3e69e0326d90e9af8a05126f1c729828b56e7ec', text: () => import('./assets-chunks/y_sales-logs_index_html.mjs').then(m => m.default)}], 
['y/get-projectors/index.html', {size: 40046, hash: '20e5a381ff6f4aa2326323f1e035597a697492b7fde1249e51abed8a0bbcb7b7', text: () => import('./assets-chunks/y_get-projectors_index_html.mjs').then(m => m.default)}], 
['y/get-televisions/index.html', {size: 45063, hash: '90328d042aad206e48980bd7d43be4db566fa6106ec6677fdeb59753438ccdf9', text: () => import('./assets-chunks/y_get-televisions_index_html.mjs').then(m => m.default)}], 
['y/get-monitors/index.html', {size: 59947, hash: 'a22e690d633ecd37f60dd9a4cb0604a54642bb0115e2eac8380c54482fc0baad', text: () => import('./assets-chunks/y_get-monitors_index_html.mjs').then(m => m.default)}], 
['y/product-comparision/index.html', {size: 29017, hash: 'c6b1859eb65b713584ad89f27f7cfd6ea900467d1f0e311677fab251aaa29d60', text: () => import('./assets-chunks/y_product-comparision_index_html.mjs').then(m => m.default)}], 
['y/number-od-devices-tech-inf/index.html', {size: 32094, hash: '47433cbfb7cb1909cbf93d670aeec54b61690677ede8e2d9b8057579a315e8f1', text: () => import('./assets-chunks/y_number-od-devices-tech-inf_index_html.mjs').then(m => m.default)}], 
['y/sales-revenue/index.html', {size: 32491, hash: '4ad6c15d03fbe0e858fb7569a99bb1ccd16c23096a8341c06297cb952c658549', text: () => import('./assets-chunks/y_sales-revenue_index_html.mjs').then(m => m.default)}], 
['y/number-of-devices/index.html', {size: 36241, hash: '37ba3bc813aef1c6b0367ebc6a892670c697f3b648cecc1c2bce6a9dcbf01fc3', text: () => import('./assets-chunks/y_number-of-devices_index_html.mjs').then(m => m.default)}], 
['styles-QZQZD5UG.css', {size: 209135, hash: 'vMeooU3gqpk', text: () => import('./assets-chunks/styles-QZQZD5UG_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
