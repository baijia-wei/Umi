import { request, requestverifyCode } from './Interceptor';

export async function list(data: { [key: string]: any }) {
  return request('/customer/list', {
    method: 'POST',
    data,
  });
}

export async function lockWithdraw(data: { [key: string]: any }) {
  return request('/customer/lockWithdraw', {
    method: 'POST',
    data,
  });
}

export async function lockTrade(data: { [key: string]: any }) {
  return request('/customer/lockTrade', {
    method: 'POST',
    data,
  });
}

export async function lockDeposit(data: { [key: string]: any }) {
  return request('/customer/lockDeposit', {
    method: 'POST',
    data,
  });
}
