export default [
  {
    path: '/Login/index',
    layout: false, //隐藏侧边栏
    component: '@/pages/Login/index',
    key: '1',
  },
  {
    path: '/',
    component: '@/pages/khulist',
    key: '0',
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
        path: '/dashboard/analysis',
        code: 'bd388aav09f9',
        apiRoutes: [],
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
    name: '系统管理',
    icon: 'smile',
    routes: [
      {
        key: '4-0',
        path: '/security/role',
        access: 'normalRouteFilter',
        name: '角色管理',
        component: '@/pages/security/role/index',
        code: 'bd318zzxzf9',
        apiRoutes: [
          '41806e7ab670',
          'c4df9e8c7ec3',
          'b0a0248444be',
          'd50f5a560f82',
          '4c157bd3d42b',
          '7e85be27cbd6',
          '4f521ba5ca4b',
          '5316cc3d4fed',
          '155132b59e57',
          '72528a23d337',
          '785682d0e621',
          'a1b4671d56dd',
          '1d75ef127734',
          'f8faf58fb748',
          'f47de2c2a6b7',
        ],
      },
      {
        key: '4-1',
        path: '/security/user',
        name: '用户管理',
        access: 'normalRouteFilter',
        component: '@/pages/security/user/index',
        code: 'bd318zzxzd9',
        apiRoutes: [
          '41806e7ab670',
          'c4df9e8c7ec3',
          'b0a0248444be',
          'd50f5a560f82',
          '4c157bd3d42b',
          '7e85be27cbd6',
          '4f521ba5ca4b',
          '5316cc3d4fed',
          '155132b59e57',
          '72528a23d337',
          '785682d0e621',
          'a1b4671d56dd',
          '1d75ef127734',
          'f8faf58fb748',
          'f47de2c2a6b7',
        ],
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
        name: '查询表格',
        access: 'normalRouteFilter',
        component: '@/pages/list/table-list/index',
        code: 'bd388aad01y9',
        apiRoutes: [],
      },
    ],
  },
  {
    key: '6',
    path: '/customer',
    access: 'normalRouteFilter',
    name: '客户管理',
    code: '99d4313377d9',
    icon: 'TeamOutlined',
    component: '@/pages/customer',
    apiRoutes: ['1fa6dcb1c095', '5cf7902ea562', 'a1e622a0edac', '6c3d550dca60'],
  },

  // {
  //   key: '7',
  //   path: '/khulist',
  //   name: '客户列表',
  //   icon: 'smile',
  //   code: 'b0a0241444be',
  //   apiRoutes: [],
  //   access: 'normalRouteFilter',
  //   component: '@/pages/khulist/index',
  // },
];
