import React, { useEffect, useState } from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { withdrawList } from '@/services/api';

export type WithdrawItem = {
  tradeNo: string;
  userId: string;
  mobile: string;
  amount: number;
  status: string;
  createTime: Date;
};

export type WithdrawListProps = {
  userId: string;
};

const WithdrawList: React.FunctionComponent<WithdrawListProps> = (props) => {
  const columns: ProColumns<WithdrawItem>[] = [
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
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '交易时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
    },
  ];

  return (
    <ProTable<WithdrawItem>
      columns={columns}
      request={async (params, sort, filter) => {
        const result = await withdrawList({
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

export default WithdrawList;
