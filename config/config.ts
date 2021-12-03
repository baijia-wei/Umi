import { defineConfig } from 'umi';

import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: routes,
  mfsu: {},
  fastRefresh: {},

  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },

  locale: {
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
});
