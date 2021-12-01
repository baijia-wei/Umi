import { request } from '../Interceptor';
/** 登录接口 POST /api/login/account */ //完成
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
    return request<API.LoginResult>('/security/login', {
      method: 'POST',
      params: body,
      ...options,
    });
}

/** 请求验证码*/
export async function getgetVerifyCode(options?: { [key: string]: any }) {
    return request<Record<string, any>>('/security/getVerifyCode', {
      method: 'get',
    });
  }
  