import React, { useRef, useState } from 'react';
import { Drawer, Button, Tag, Space, Menu, Dropdown, Switch } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import CustomerDetails from './components/detail';
import {
  customerList,
  customerLockWithdraw,
  customerLockTrade,
  customerLockDeposit,
} from '@/services/api';

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

  const [selectUserId, setSelectUserId] = useState<string>();

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
          onClick={() => {
            setSelectUserId(record.userId);
          }}
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
    await customerLockWithdraw({ userId, locked: checked });
    actionRef.current?.reload();
  }

  async function switchLockDeposit(checked: boolean, userId: string) {
    await customerLockDeposit({ userId, locked: checked });
    actionRef.current?.reload();
  }

  async function switchLockTrade(checked: boolean, userId: string) {
    await customerLockTrade({ userId, locked: checked });
    actionRef.current?.reload();
  }

  const detail = () => {
    if (selectUserId != '' && selectUserId != undefined)
      return (
        <CustomerDetails
          userId={selectUserId || ''}
          onClose={() => setSelectUserId('')}
        />
      );
  };

  return (
    <PageContainer>
      <ProTable<CustomerItem>
        actionRef={actionRef}
        columns={columns}
        request={async (params, sort, filter) => {
          const result = await customerList({
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
      {detail()}
    </PageContainer>
  );
};

export default CustomerList;
