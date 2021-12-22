import React, { memo, useEffect, useMemo, useState } from 'react';
import { Drawer, Tabs, PageHeader, Button, Descriptions } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProList from '@ant-design/pro-list';
import BettingList from './bettingList';
import ProDescriptions from '@ant-design/pro-descriptions';

const { TabPane } = Tabs;

export type CustomerDetailProps = {
  onClose: () => void;
  userId: string;
};

const CustomerDetail: React.FunctionComponent<CustomerDetailProps> = (
  props,
) => {
  const bettingList = () => {
    if (props.userId != '') return <BettingList userId={props.userId} />;
  };

  return (
    <Drawer
      title="客户详情"
      placement="top"
      size="large"
      onClose={props.onClose}
      visible={props.userId != ''}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="手机号">{props.userId}</Descriptions.Item>
        <Descriptions.Item label="注册时间">x</Descriptions.Item>
        <Descriptions.Item label="注册时间">x</Descriptions.Item>
        <Descriptions.Item label="充提差额">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="用户胜率">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="平台盈利">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="用户盈亏比列">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China{' '}
        </Descriptions.Item>
      </Descriptions>

      <Tabs defaultActiveKey="1">
        <TabPane tab="历史充值订单" key="1">
          <ProList />
        </TabPane>
        <TabPane tab="历史提现订单" key="2">
          <ProList />
        </TabPane>
        <TabPane tab="历史交易记录" key="3">
          {bettingList()}
        </TabPane>
      </Tabs>
    </Drawer>
  );
};

export default CustomerDetail;
