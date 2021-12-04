import { PageLoading } from '@ant-design/pro-layout';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import { RunTimeLayoutConfig } from 'umi';
import RightContent from './components/RightContent';
// 全局数据初始化
export async function getInitialState(): Promise<any> {
  const fetchUserInfo = async () => {};
  return {
    isAdmin: 'admin',
    hasRoutes: ['用户管理', '图表页面', '列表页面'], //权限列表
  };
}
// js 加载loging
export const initialStateConfig = {
  loading: <PageLoading />,
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
// layout导航栏配置
export const layout: RunTimeLayoutConfig = () => {
  return {
    // 顶部头栏配置
    rightContentRender: () => <RightContent />,
    // 水印配置
    waterMarkProps: {
      content: '家玮',
    },
  };
};
