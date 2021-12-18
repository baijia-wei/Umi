import { PrmUserList } from '@/services/homeApi/api';
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
  const [parameter, setparameter] = useState<any>({
    page: 1,
    size: 15,
  });
  const [visible, setvisible] = useState(false);
  const [dataSource, setData] = useState<any>();
  const columns = [
    {
      title: '登录账户',
      dataIndex: 'fullName',
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
      dataIndex: 'userName',
      render: (text: any, record: any) => {
        return <div>{text}</div>;
      },
    },

    {
      title: '禁用',
      dataIndex: 'isDisabled',
      render: (text: any) => {
        return (
          <div>
            <Switch defaultChecked={text}></Switch>
          </div>
        );
      },
    },
    {
      title: '角色',
      dataIndex: 'roleList',
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
    PrmUserList(parameter).then((res) => {
      console.log(res);
      setData(res.data.record);
    });
  };

  useEffect(() => {
    const data = getData();
  }, []);

  const scroll = useMemo(() => ({ y: 400 }), []);

  // 搜索表单
  const handleSubmit = (value: any) => {};
  // 权限分配弹窗
  const showDialog = () => {};

  // 权限分配弹窗ok确认
  const handleOk = () => {
    setvisible(false);
  };
  // 权限分配弹窗取消
  const handleCancel = () => {
    setvisible(false);
  };

  return (
    <PageContainer content="角色权限">
      <GridContent>
        <Suspense fallback={null}>
          <Card>
            <Form layout="horizontal" onSubmit={handleSubmit}>
              <Form.Input
                placeholder="登录账号"
                noLabel={true}
                field="title"
              ></Form.Input>
              <Form.Input
                placeholder="姓名"
                noLabel={true}
                field="szei"
              ></Form.Input>
              <Form.Input
                placeholder="是否禁用"
                noLabel={true}
                field="all"
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

      <Modal
        title="基本对话框"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        This is the content of a basic modal.
        <br />
        More content...
      </Modal>
    </PageContainer>
  );
};

export default Role;
