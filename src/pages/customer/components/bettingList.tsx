import React, { useEffect, useState } from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { transactionList } from '@/services/api';

export type BettingItem = {
  bettingNo: string;
  userId: string;
  mobile: string;
  asset: string;
  assetType: number;
  odds: number;
  amount: number;
  earning: number;
  openRate: number;
  openEpoch: string;
  closeRate: number;
  closeEpoch: string;
  timeLength: number;
  category: number;
  type: number;
  status: number;
  createTime: Date;
};

export type BettingListProps = {
  userId: string;
};

const BettingList: React.FunctionComponent<BettingListProps> = (props) => {
  const columns: ProColumns<BettingItem>[] = [
    {
      title: '交易号',
      dataIndex: 'bettingNo',
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
      title: '交易分类',
      dataIndex: 'category',
    },
    {
      title: '下注金额',
      dataIndex: 'amount',
    },
    {
      title: '盈利',
      dataIndex: 'earning',
    },
    {
      title: '下注类型',
      dataIndex: 'type',
    },
    {
      title: '资产',
      dataIndex: 'asset',
    },
    {
      title: '赔率',
      dataIndex: 'odds',
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
    <ProTable<BettingItem>
      columns={columns}
      request={async (params, sort, filter) => {
        console.log(1111);
        const result = await transactionList({
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
      rowKey="bettingNo"
      search={false}
      pagination={{
        pageSize: 15,
      }}
      dateFormatter="string"
    />
  );
};

export default BettingList;
