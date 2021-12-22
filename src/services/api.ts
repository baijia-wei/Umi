import { request } from './Interceptor';

export const customerList = (data: { [key: string]: any }) => {
  return request('/customer/list', {
    method: 'POST',
    data,
  });
};

export const customerLockWithdraw = (data: { [key: string]: any }) => {
  return request('/customer/lockWithdraw', {
    method: 'POST',
    data,
  });
};

export const customerLockTrade = (data: { [key: string]: any }) => {
  return request('/customer/lockTrade', {
    method: 'POST',
    data,
  });
};

export const customerLockDeposit = (data: { [key: string]: any }) => {
  return request('/customer/lockDeposit', {
    method: 'POST',
    data,
  });
};

export const transactionList = (data: { [key: string]: any }) => {
  return request('/transaction/list', {
    method: 'POST',
    data,
  });
};
