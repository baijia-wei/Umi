/**
//  * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

export default function access(initialState: any) {
  const { isAdmin, hasRoutes = [] } = initialState;
  return {
    adminRouteFilter: () => true, // 只有管理员可访问
    normalRouteFilter: (route: any) => {
      return hasRoutes.includes(route.name);
    },
  };
}
