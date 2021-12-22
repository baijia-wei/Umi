import { PageLoading } from '@ant-design/pro-layout';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import { RunTimeLayoutConfig } from 'umi';
import RightContent from './components/RightContent';
// 全局数据初始化

import { history, Link } from 'umi';
import { getToken } from './utils/cookie/auth';
import { getUserInfo } from './services/homeApi/api';

export async function getInitialState(): Promise<any> {
  // 判断是否登录
  if (!getToken()) {
    history.push('/Login/index');
  }
  const fetchUserInfo = async () => {
    try {
      // 获取用户权限
      const msg = await getUserInfo();

      const hasRoutes = msg.data.resources.map((item: { name: any }) => {
        return item.name;
      });

      return {
        settings: hasRoutes,
        hasRoutes: hasRoutes, //权限列表
      };
    } catch (error) {
      history.push('/Login/index');
    }
    return undefined;
  };

  // 如果不是登录页面  每次刷新调用用户权限
  if (history.location.pathname !== '/Login/index') {
    const currentUser = await fetchUserInfo();

    return {
      settings: currentUser,
    };
  }

  return {
    fetchUserInfo,
    settings: [],
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
