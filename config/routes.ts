export default [
  {
    path: '/Login/index',
    layout: false, //隐藏侧边栏
    component: '@/pages/Login/index',
  },

  {
    path: '/index',
    // layout: false, //隐藏侧边栏
    component: '@/pages/index',
  },
  // 图标
  {
    path: '/dashboard',
    name: '图表页面',
    access: 'normalRouteFilter',
    icon: 'smile',
    routes: [
      {
        name: '分析页面',
        path: '/dashboard/analysis',
        component: '@/pages/dashboard/analysis/index',
      },
    ],
  },

  {
    path: '/security',
    name: '用户管理',
    access: 'normalRouteFilter',
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
    access: 'normalRouteFilter',
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
