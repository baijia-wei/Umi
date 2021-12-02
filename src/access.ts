/**
//  * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

export default function access(initialState: any) {
  const { isAdmin, hasRoutes = [] } = initialState;
  return {
    normalRouteFilter: (route: any) => {
      // route路由 遍历传来的数组权限 来匹配路由
      return hasRoutes.includes(route.name);
    },
  };
}
