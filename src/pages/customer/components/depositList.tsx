import React, { useEffect, useState } from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { depositList } from '@/services/api';

export type DepositListProps = {
  userId: string;
};

const DepositList: React.FunctionComponent<DepositListProps> = (props) => {
  const columns: ProColumns[] = [
    {
      title: '交易号',
      dataIndex: 'tradeNo',
    },
    {
      title: '用户Id',
      dataIndex: 'userId',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
    },
    {
      title: '金额',
      dataIndex: 'amount',
    },
    {
      title: '到账金额',
      dataIndex: 'receivedAmount',
    },
    {
      title: '奖金',
      dataIndex: 'bonus',
    },
    {
      title: '支付通道',
      dataIndex: 'payChannel',
    },
    {
      title: '状态',
      dataIndex: 'statusName',
    },
    {
      title: '交易时间',
      dataIndex: 'tradeTime',
      valueType: 'dateTime',
    },
  ];

  return (
    <ProTable
      columns={columns}
      request={async (params, sort, filter) => {
        const result = await depositList({
          userId: props.userId,
          page: params.current,
          size: params.pageSize,
        });
        return {
          data: result.data.record,
          success: result.status == 1,
          total: result.data.count,
        };
      }}
      rowKey="tradeNo"
      search={false}
      pagination={{
        pageSize: 15,
      }}
      dateFormatter="string"
    />
  );
};

export default DepositList;
