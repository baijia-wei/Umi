import { PageLoading } from '@ant-design/pro-layout';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import { RunTimeLayoutConfig } from 'umi';
import RightContent from './components/RightContent';
// 全局数据初始化

import { history, Link } from 'umi';
import { getCookie } from './utils/cookie/getcookl';
const list = getCookie('toke');

export async function getInitialState(): Promise<any> {
  // 判断是否登录
  if (!list) {
    history.push('/Login/index');
  }
  const fetchUserInfo = async (res: any) => {
    return res;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/Login/index') {
    return {
      isAdmin: '',
      hasRoutes: [],
    };
  }

  return {
    fetchUserInfo,
  };
}

// js 加载loging
export const initialStateConfig = {
  loading: <PageLoading />,
};

// layout导航栏配置
export const layout: RunTimeLayoutConfig = () => {
  return {
    // 点击不会回收菜单栏
    openKeys: false,
    // 顶部头栏配置
    rightContentRender: () => <RightContent />,
    // 水印配置
    waterMarkProps: {
      content: '家玮',
    },
  };
};
