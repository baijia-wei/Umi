export default [
  {
    path: '/Login/index',
    layout: false, //隐藏侧边栏
    component: '@/pages/Login/index',
    key: '1',
  },

  {
    path: '/index',
    // layout: false, //隐藏侧边栏
    component: '@/pages/index',
    key: '2',
  },
  // 图标
  {
    path: '/dashboard',
    name: '图表页面',
    access: 'normalRouteFilter',
    icon: 'smile',
    code: 'bd388aad09f9',
    apiRoutes: ['41806e7ab670'],
    key: '3',
    routes: [
      {
        key: '3-0',
        name: '分析页面',
        path: '/dashboard/analysis',
        component: '@/pages/dashboard/analysis/index',
      },
      {
        key: '3-1',
        name: '详情结构',
        path: '/dashboard/descriptons',
        component: '@/pages/dashboard/descriptions/index',
      },
    ],
  },

  {
    key: '4',
    path: '/security',
    name: '用户管理',
    access: 'normalRouteFilter',
    icon: 'smile',
    code: 'bd388zzzzf9',
    apiRoutes: [
      '41806e7ab670',
      'c4df9e8c7ec3',
      'b0a0248444be',
      'd50f5a560f82',
      '4c157bd3d42b',
      '7e85be27cbd6',
      '4f521ba5ca4b',
      '41806e7ab670',
      '5316cc3d4fed',
      '155132b59e57',
      '72528a23d337',
      '785682d0e621',
      'a1b4671d56dd',
      '1d75ef127734',
      'f8faf58fb748',
      ' f47de2c2a6b7',
    ],
    routes: [
      {
        key: '4-0',
        path: '/security/role',

        name: '角色管理',
        component: '@/pages/security/role/index',
      },
      {
        key: '4-1',
        path: '/security/user',
        name: '用户管理',
        component: '@/pages/security/user/index',
      },
    ],
  },
  {
    key: '5',
    path: '/list',
    access: 'normalRouteFilter',
    name: '列表页面',
    code: 'bd388aad09y9',
    apiRoutes: ['41806e7ab670'],
    icon: 'smile',

    routes: [
      {
        key: '5-0',
        path: '/list/table-list',
        name: '查询表格',
        component: '@/pages/list/table-list/index',
      },
    ],
  },
];
