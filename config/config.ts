import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';

import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  antd: {},
  dva: {
    hmr: true,
  },

  // 颜色
  theme: {
    '@primary-color': '#0094FF',
  },

  // title: false,

  // 布局配置
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    // 菜单宽度
    siderWidth: 200,
    ...defaultSettings,
  },
  // 路由
  routes: routes,
  // 开启Umi 快速编译打包
  mfsu: {},
  // 快速刷新，开发环境下，可以保持组件状态
  fastRefresh: {},
  // 加载js loading
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  webpack5: {},
  // 国际化
  locale: {
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  exportStatic: {},
});
