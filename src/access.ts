/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};

  return {
    // 菜单权限会调用这个方法
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
