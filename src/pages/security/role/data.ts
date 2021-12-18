const treeData = [
  {
    label: '用户管理',
    value: '用户管理',
    key: '0',
    children: [
      {
        label: '角色权限',
        value: '角色权限',
        key: '0-0',
        children: [
          {
            label: '家玮',
            value: '家玮',
            key: '0-0-0',
          },
          {
            label: '催收员1',
            value: 'Shanghai',
            key: '0-0-1',
          },
          {
            label: '催收经理',
            value: 'Chengdu',
            key: '0-0-2',
          },
        ],
      },
      {
        label: '用户管理',
        value: '用户管理',
        key: '0-1',
        children: [
          {
            label: '家玮2',
            value: '家玮2',
            key: '0-1-0',
          },
        ],
      },
    ],
  },
  {
    label: '运营报表',
    value: 'North America',
    key: '1',
    children: [
      {
        label: '每日数据',
        value: 'United States',
        key: '1-0',
      },
      {
        label: '逾期报表',
        value: 'Canada',
        key: '1-1',
      },
    ],
  },
];
export default treeData;
