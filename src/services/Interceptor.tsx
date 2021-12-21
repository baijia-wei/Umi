import { RequestConfig } from 'umi';
import { extend } from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';
import { notification } from 'antd';
import { getToken } from '@/utils/cookie/auth';
interface error {
  name: string;
  data: any;
  type: string;
  response: {
    status: number;
    statusText: string;
    url: string;
  };
}

const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 请求前拦截：requestInterceptors
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
};

// 请求后截：requestInterceptors
const demoResponseInterceptors = (
  response: Response,
  options: RequestOptionsInit,
) => {
  response.headers.append('interceptors', 'yes');
  return response;
};
//错误处理
const errorHandler = (error: error) => {
  console.log(error, '错误');

  if (error.name === 'BizError') {
    notification.error({
      message: `请求错误 ${error.data.code}`,
      description: error.data.msg,
    });
    return error.data.code;
  }
  // notification.error({
  //   message: `请求错误 服务器错误`,

  // });
};

export const request = extend({
  prefix: 'http://localhost:8080',
  timeout: 100000,
  headers: {
    Authorization: 'Bearer ' + (getToken() === undefined ? '' : getToken()),
  },
  errorHandler, //错误处理
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [demoResponseInterceptors],
});
export const requestLoging = extend({
  prefix: 'http://localhost:8080',
  timeout: 100000,

  errorHandler, //错误处理
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [demoResponseInterceptors],
});
