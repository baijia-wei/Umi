import React, { memo, useEffect, useMemo, useState } from 'react';
import { Drawer, Tabs, PageHeader, Button, Descriptions } from 'antd';
import BettingList from './bettingList';
import WithdrawList from './withdrawList';
import DepositList from './depositList';
import ProDescriptions from '@ant-design/pro-descriptions';
import { customerProfile } from '@/services/api';
const { TabPane } = Tabs;

export type CustomerDetailProps = {
  onClose: () => void;
  userId: string;
};

const CustomerDetail: React.FunctionComponent<CustomerDetailProps> = (
  props,
) => {
  return (
    <Drawer
      title="客户详情"
      placement="top"
      size="large"
      onClose={props.onClose}
      visible={props.userId != ''}
    >
      <ProDescriptions
        title="客户详情"
        request={async () => {
          const result = await customerProfile({
            userId: props.userId,
          });
          return {
            data: result.data,
            success: result.status == 1,
          };
        }}
      >
        <ProDescriptions.Item label="手机号" dataIndex="mobile" />
        <ProDescriptions.Item
          label="充提差额"
          dataIndex="depositWithdrawDifference"
          valueType="money"
        />
        <ProDescriptions.Item
          label="充提比"
          dataIndex="depositWithdrawRatio"
          valueType="percent"
        />
        <ProDescriptions.Item
          label="用户胜率"
          dataIndex="winRate"
          valueType="percent"
        />
        <ProDescriptions.Item
          label="平台盈利"
          dataIndex="platformProfit"
          valueType="money"
        />
        <ProDescriptions.Item
          label="用户亏损比"
          dataIndex="lossRatio"
          valueType="percent"
        />
      </ProDescriptions>

      <Tabs defaultActiveKey="1">
        <TabPane tab="历史充值订单" key="1">
          <DepositList userId={props.userId} />
        </TabPane>
        <TabPane tab="历史提现订单" key="2">
          <WithdrawList userId={props.userId} />
        </TabPane>
        <TabPane tab="历史交易记录" key="3">
          <BettingList userId={props.userId} />
        </TabPane>
      </Tabs>
    </Drawer>
  );
};

export default CustomerDetail;
