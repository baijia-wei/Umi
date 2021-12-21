import React, { useRef } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown, Switch } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import {
  list,
  lockWithdraw,
  lockTrade,
  lockDeposit,
} from '@/services/customerApi';

const CustomerList: React.FunctionComponent = () => {
  type CustomerItem = {
    userId: string;
    mobile: string;
    level: string;
    balance: number;
    bonus: number;
    totalRechargeAmount: number;
    rechargeTimes: number;
    totalWithdrawAmount: number;
    lockWithdraw: boolean;
    lockTrade: boolean;
    lockDeposit: boolean;
    lastLoginTime: Date;
    registerTime: Date;
  };

  const actionRef = useRef<ActionType>();

  const columns: ProColumns<CustomerItem>[] = [
    {
      title: '用户Id',
      dataIndex: 'userId',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
    },
    {
      title: '等级',
      dataIndex: 'level',
      search: false,
    },
    {
      title: '账户余额',
      dataIndex: 'balance',
      search: false,
      // search: false,
      // renderFormItem: (_, { defaultRender }) => {
      //   return defaultRender(_);
      // },
      // render: (_, record) => (
      //   <Space>
      //     {record.labels.map(({ name, color }) => (
      //       <Tag color={color} key={name}>
      //         {name}
      //       </Tag>
      //     ))}
      //   </Space>
      // ),
    },
    {
      title: '奖金',
      dataIndex: 'bonus',
      search: false,
    },
    {
      title: '充值金额',
      dataIndex: 'totalRechargeAmount',
      search: false,
    },
    {
      title: '充值次数',
      dataIndex: 'rechargeTimes',
      search: false,
    },
    {
      title: '提现金额',
      dataIndex: 'totalWithdrawAmount',
      search: false,
    },
    {
      title: '最后登录时间',
      dataIndex: 'loginTimie',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '注册时间',
      dataIndex: 'registerTime',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '锁定提现',
      dataIndex: 'lockWithdraw',
      search: false,
      render: (_, record) => {
        return (
          <Switch
            checked={record.lockWithdraw}
            onChange={(value) => switchLockWithdraw(value, record.userId)}
          />
        );
      },
    },
    {
      title: '锁定充值',
      dataIndex: 'lockDeposit',
      search: false,
      render: (_, record) => {
        return (
          <Switch
            checked={record.lockDeposit}
            onChange={(value) => switchLockDeposit(value, record.userId)}
          />
        );
      },
    },
    {
      title: '锁定交易',
      dataIndex: 'lockTrade',
      search: false,
      render: (_, record) => {
        return (
          <Switch
            checked={record.lockTrade}
            onChange={(value) => switchLockTrade(value, record.userId)}
          />
        );
      },
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          href={record.userId}
          target="_blank"
          rel="noopener noreferrer"
          key="view"
        >
          详情
        </a>,
        // <TableDropdown
        //   key="actionGroup"
        //   onSelect={() => action?.reload()}
        //   menus={[
        //     { key: 'copy', name: '复制' },
        //     { key: 'delete', name: '删除' },
        //   ]}
        // />,
      ],
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  async function switchLockWithdraw(checked: boolean, userId: string) {
    await lockWithdraw({ userId, locked: checked });
    actionRef.current?.reload();
  }

  async function switchLockDeposit(checked: boolean, userId: string) {
    await lockDeposit({ userId, locked: checked });
    actionRef.current?.reload();
  }

  async function switchLockTrade(checked: boolean, userId: string) {
    await lockTrade({ userId, locked: checked });
    actionRef.current?.reload();
  }

  return (
    <ProTable<CustomerItem>
      actionRef={actionRef}
      columns={columns}
      request={async (params, sort, filter) => {
        const result = await list({
          ...params,
          page: params.current,
          size: params.pageSize,
        });
        return {
          data: result.data.record,
          success: result.status == 1,
          total: result.data.count,
        };
      }}
      rowKey="userId"
      search={{
        labelWidth: 'auto',
      }}
      pagination={{
        pageSize: 15,
      }}
      rowSelection={{
        selections: [],
      }}
      dateFormatter="string"
      headerTitle="客户管理"
      // toolBarRender={() => [
      //   <Button key="button" icon={<PlusOutlined />} type="primary">
      //     新建
      //   </Button>,
      //   <Dropdown key="menu" overlay={menu}>
      //     <Button>
      //       <EllipsisOutlined />
      //     </Button>
      //   </Dropdown>,
      // ]}
    />
  );
};

export default CustomerList;
