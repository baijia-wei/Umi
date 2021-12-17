import { Request, Response } from '@umijs/types';
import mockjs from 'mockjs';
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  'GET /api/usersw': (req: Request, res: Response) => {
    const data = mockjs.mock({
      'list|100': [{ name: '@city', 'value|1-100': 20, 'type|0-2': 1 }],
    });
    res.json({
      data: data,
      code: 0,
      msg: 'useccess',
    });
  },
  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
