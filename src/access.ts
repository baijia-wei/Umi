export default function access(initialState: any) {
  const { hasRoutes = [] } = initialState;

  return {
    normalRouteFilter: (route: any) => {
      // route路由 遍历传来的数组权限 来匹配路由
      return hasRoutes.includes(route.name);
    },
  };
}
