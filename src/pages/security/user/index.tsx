import { getgetVerifyCode, getNotices } from '@/services/homeApi/api';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Form, Switch } from '@douyinfe/semi-ui';
import { Card } from 'antd';
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRequest } from 'umi';

import { IconPlus } from '@douyinfe/semi-icons';
import Table from '@douyinfe/semi-ui/lib/es/table/Table';
import { Modal } from '@douyinfe/semi-ui';
const Role = () => {
  const [dataSource, setData] = useState<any>();
  const columns = [
    {
      title: '登录账户',
      dataIndex: 'account',
      render: (
        text:
          | boolean
          | ReactChild
          | ReactFragment
          | ReactPortal
          | null
          | undefined,
      ) => {
        return <div>{text}</div>;
      },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      render: (text: any, record: any) => {
        return <div>{text}</div>;
      },
    },

    {
      title: '禁用',

      render: (text: any, record: any) => {
        return (
          <div>
            <Switch defaultChecked={true}></Switch>
          </div>
        );
      },
    },
    {
      title: '角色',
      dataIndex: 'owner',
      render: (text: any, record: any) => {
        return <div>{text}</div>;
      },
    },

    {
      title: '操作',
      dataIndex: 'size',
      sorter: (a: { size: number }, b: { size: number }) =>
        a.size - b.size > 0 ? 1 : -1,
      render: (text: any) => {
        return (
          <div>
            <Button style={{ marginRight: 8, color: 'rgb(104, 0, 240)' }}>
              分配角色
            </Button>
            <Button type="warning" style={{ marginRight: 8 }}>
              修改
            </Button>
          </div>
        );
      },
    },
  ];

  const getData = () => {
    const data = [];
    for (let i = 0; i < 46; i++) {
      const isSemiDesign = i % 2 === 0;

      data.push({
        key: '' + i,
        account: isSemiDesign ? `家玮${i}.fig` : `催收主管${i}.fig`,
        name: 'noodles',
        owner: isSemiDesign ? '个人专属' : '运营人员',
      });
    }
    return data;
  };

  useEffect(() => {
    const data = getData();
    setData(data);
  }, []);

  const scroll = useMemo(() => ({ y: 400 }), []);

  // 搜索表单
  const handleSubmit = (value: any) => {};

  return (
    <PageContainer content="角色权限">
      <GridContent>
        <Suspense fallback={null}>
          <Card>
            <Form layout="horizontal" onSubmit={handleSubmit}>
              <Form.Input
                placeholder="标题"
                noLabel={true}
                field="title"
              ></Form.Input>
              <Form.Input
                placeholder="大小"
                noLabel={true}
                field="szei"
              ></Form.Input>
              <Form.Input
                placeholder="所有者"
                noLabel={true}
                field="all"
              ></Form.Input>
              <Form.Input
                placeholder="更新日期"
                noLabel={true}
                field="date"
              ></Form.Input>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: '10px', color: 'rgb(104, 0, 240)' }}
                  className="btn-margin-right"
                >
                  搜索
                </Button>
                <Button
                  htmlType="reset"
                  style={{ marginRight: '10px', color: 'rgb(252,136,0)' }}
                >
                  清空
                </Button>
                <Button
                  icon={<IconPlus />}
                  type="primary"
                  style={{ marginRight: 8 }}
                >
                  创建
                </Button>
              </div>
            </Form>
          </Card>
        </Suspense>
        <Suspense fallback={null}>
          <Card>
            <Table
              columns={columns as any}
              bordered={true}
              dataSource={dataSource}
              scroll={scroll}
            />
          </Card>
        </Suspense>
      </GridContent>
    </PageContainer>
  );
};

export default Role;
