import { request, requestLoging } from '../Interceptor'; //完成

/** 登录接口 POST /api/login/account */ export async function login(data: {
  [key: string]: any;
}) {
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
    method: 'GET',
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

/** 添加角色 POST/prm/role/add*/
export async function PostPrmRoleAdd(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/role/add', {
    method: 'POST',
    data,
  });
}

/** 删除角色 POST/prm/role/delete*/
export async function PostprmRoleDelete(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/role/delete', {
    method: 'POST',
    data,
  });
}
/** 修改角色 POST/prm/role/delete*/
export async function PostPrmRoleEdit(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/role/edit', {
    method: 'POST',
    data,
  });
}

/** 获取角色 POST/prm/role/delete*/
export async function PostPrmRoleGet(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/role/get', {
    method: 'get',
    params: data,
  });
}

/** 获取用户 POST/prm/role/delete*/
export async function PostPrmUserGet(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/user/get', {
    method: 'get',
    params: data,
  });
}

/** 新增用户 POST/prm/role/delete*/
export async function PostUserAdd(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/user/add', {
    method: 'POST',
    data,
  });
}

/** 编辑用户 POST/prm/role/delete*/
export async function PostUserEdit(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/user/edit', {
    method: 'POST',
    data,
  });
}

/** 查询角色列表 POST/prm/role/list*/
export async function PostPrmRoleList(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/role/list', {
    method: 'POST',
    data,
  });
}

/** 禁用用户 POST/prm/role/list*/
export async function PostUserDisable(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/user/disable', {
    method: 'POST',
    data,
  });
}

/** 授予用户角色 POST/prm/role/list*/
export async function PostUserGrantRole(data: { [key: string]: any }) {
  return request<API.LoginResult>('/prm/user/grantRole', {
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
