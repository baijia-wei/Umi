import { request, requestLoging } from '../Interceptor';

/** 登录接口 POST /api/login/account */ //完成
export async function login(data: { [key: string]: any }) {
  return requestLoging<API.LoginResult>('/token/login', {
    method: 'POST',
    data,
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{ data: API.CurrentUser }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取验证码 POST /token/verifyCode*/
export async function verifyCodes() {
  return requestLoging<Record<string, any>>('/token/verifyCode', {
    method: 'get',
  });
}

/** 获取用户权限 get /prm/getUserInfo*/
export async function getUserInfo() {
  return request<Record<string, any>>('/prm/getUserInfo', {
    method: 'get',
  });
}

/** 查询用户列表 POST /prm/user/list */
export async function PrmUserList(data?: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/user/list', {
    method: 'POST',
    data,
  });
}

/** 查询角色列表 POST /prm/role/list */
export async function PrmRoleList(data?: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/role/list', {
    method: 'POST',
    data,
  });
}

/** 获取角色资源 get /prm/role/list */
export async function PrmRoleResource(data: { roleId: number; type: number }) {
  return request<API.LoginResult>('/prm/role/resource', {
    method: 'get',
    params: data,
  });
}

/** 赋予角色资源 POST/prm/role/grantResource*/
export async function PostGrantResource(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/role/grantResource', {
    method: 'POST',
    data,
  });
}

/** 提交资源 POST/prm/submitResource*/
export async function PostSubmitResource(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/submitResource', {
    method: 'POST',
    data,
  });
}

// 演示
// export async function updateUser(
//   params: {
//     // path
//     /** name that need to be updated */
//     username: string;
//   },
//   body: API.LoginParams,
//   options?: { [key: string]: any },
// ) {
//   const { username: param0 } = params;
//   return request<any>(`/user/${param0}`, {
//     method: 'PUT',
//     params: { ...params },
//     data: body,
//     ...(options || {}),
//   });
// }
// // 演示
// export async function deleteUser(
//   params: {
//     username: string;
//   },
//   options?: { [key: string]: any },
// ) {
//   const { username: param0 } = params;
//   return request<any>(`/user/${param0}`, {
//     method: 'DELETE',
//     params: { ...params },
//     ...(options || {}),
//   });
// }
