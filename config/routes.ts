export default [
  {
    path: '/',
    component: '@/pages/index',
  },
  // 图标
  {
    path: '/dashboard',
    name: '图表页面',
    icon: 'smile',
    routes: [
      {
        name: '分析页面',
        path: '/dashboard/analysis',
        component: '@/pages/dashboard/analysis/index',
      },
    ],
  },

  // 用户
  {
    path: '/security',
    name: '用户管理',
    icon: 'smile',
    routes: [
      {
        path: '/security/role',
        name: '角色管理',
        component: '@/pages/security/role/index',
      },
      {
        path: '/security/user',
        name: '用户管理',
        component: '@/pages/security/user/index',
      },
    ],
  },
  {
    path: '/list',
    name: '列表页面',
    icon: 'smile',
    routes: [
      {
        path: '/list/table-list',
        name: '查询表格',
        component: '@/pages/list/table-list/index',
      },
    ],
  },
];
