import { PageLoading } from '@ant-design/pro-layout';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import { RunTimeLayoutConfig } from 'umi';
export async function getInitialState(): Promise<any> {
  const fetchUserInfo = async () => {};
  return {
    isAdmin: 'admin',
    hasRoutes: ['用户管理', '图表页面', '列表页面'], //权限列表
  };
}
export const initialStateConfig = {
  loading: <PageLoading />,
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = () => {
  return {
    waterMarkProps: {
      content: '家玮',
    },
  };
};
