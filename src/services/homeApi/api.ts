import { request } from '../Interceptor';
/** 登录接口 POST /api/login/account */ //完成
export async function login(
  body: API.LoginParams,
  options?: { [key: string]: any },
) {
  return request<API.LoginResult>('/security/login', {
    method: 'POST',
    params: body,
    ...options,
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{ data: API.CurrentUser }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

// 演示
export async function updateUser(
  params: {
    // path
    /** name that need to be updated */
    username: string;
  },
  body: API.LoginParams,
  options?: { [key: string]: any },
) {
  const { username: param0 } = params;
  return request<any>(`/user/${param0}`, {
    method: 'PUT',
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
// 演示
export async function deleteUser(
  params: {
    username: string;
  },
  options?: { [key: string]: any },
) {
  const { username: param0 } = params;
  return request<any>(`/user/${param0}`, {
    method: 'DELETE',
    params: { ...params },
    ...(options || {}),
  });
}
