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
    icon: 'smile',

    key: '3',
    routes: [
      {
        key: '3-0',
        access: 'normalRouteFilter',
        name: '分析页面',
        code: 'bd388aad19f9',
        apiRoutes: [],
        path: '/dashboard/analysis',
        component: '@/pages/dashboard/analysis/index',
      },
      {
        key: '3-1',
        name: '详情结构',
        code: 'bd388aad39f9',
        apiRoutes: [],
        access: 'normalRouteFilter',
        path: '/dashboard/descriptons',
        component: '@/pages/dashboard/descriptions/index',
      },
    ],
  },

  {
    key: '4',
    path: '/security',
    name: '用户管理',
    icon: 'smile',
    routes: [
      {
        key: '4-0',
        path: '/security/role',
        access: 'normalRouteFilter',
        code: 'bd388zzzza9',
        apiRoutes: [
          'b0a0248444be',
          'd50f5a560f82',
          '4c157bd3d42b',
          '7e85be27cbd6',
          'c4df9e8c7ec3',
          '4f521ba5ca4b',
          '41806e7ab670',
          '155132b59e57',
          '5316cc3d4fed',
          'a1b4671d56dd',
          '785682d0e621',
          '72528a23d337',
          '1d75ef127734',
          'f8faf58fb748',
          'f47de2c2a6b7',
        ],
        name: '角色权限',
        component: '@/pages/security/role/index',
      },
      {
        key: '4-1',
        code: 'bd388zzzzb9',
        apiRoutes: [
          'b0a0248444be',
          'd50f5a560f82',
          '4c157bd3d42b',
          '7e85be27cbd6',
          'c4df9e8c7ec3',
          '4f521ba5ca4b',
          '41806e7ab670',
          '155132b59e57',
          '5316cc3d4fed',
          'a1b4671d56dd',
          '785682d0e621',
          '72528a23d337',
          '1d75ef127734',
          'f8faf58fb748',
          'f47de2c2a6b7',
        ],
        path: '/security/user',
        name: '角色管理',
        access: 'normalRouteFilter',
        component: '@/pages/security/user/index',
      },
    ],
  },
  {
    key: '5',
    path: '/list',
    name: '列表页面',
    icon: 'smile',
    routes: [
      {
        key: '5-0',
        path: '/list/table-list',
        code: 'ba388zzazb9',
        apiRoutes: [],
        name: '查询表格',
        access: 'normalRouteFilter',
        component: '@/pages/list/table-list/index',
      },
    ],
  },
];
