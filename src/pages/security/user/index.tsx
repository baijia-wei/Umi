import {
  PostPrmRoleList,
  PostPrmUserGet,
  PostUserAdd,
  PostUserDisable,
  PostUserEdit,
  PostUserGrantRole,
  PrmUserList,
} from '@/services/homeApi/api';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Card, Button, Form, Switch, Input, Checkbox } from 'antd';
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Table from '@douyinfe/semi-ui/lib/es/table/Table';
import { Modal } from '@douyinfe/semi-ui';
const Role = () => {
  const [parameter, setparameter] = useState<any>({
    page: 1,
    size: 99,
  });
  const [roleList, setroleList] = useState([]);
  const [checkbox, setcheckbox] = useState([]);
  const [id, setiD] = useState(0);
  // 表单
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();

  // 弹窗
  const [visible2, setvisible2] = useState(false);
  const [visible, setvisible] = useState(false);
  const [visible1, setvisible1] = useState(false);
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

      render: (record: any) => {
        return (
          <div>
            <Switch
              onClick={() => {
                PostUserDisable({
                  userId: record.userId,
                  isDisabled: !record.isDisabled,
                });
              }}
              defaultChecked={record.isDisabled}
            ></Switch>
          </div>
        );
      },
    },
    {
      title: '角色',
      dataIndex: 'roleList',
      render: (record: any) => {
        return record.map((item: any, index: any) => (
          <div key={index}>{item.roleName}</div>
        ));
      },
    },
    {
      title: '操作',
      render: (record: any) => {
        return (
          <div>
            <Button
              style={{ marginRight: 8, color: 'rgb(104, 0, 240)' }}
              onClick={() => {
                modify(record.userId, '1', record.roleList);
              }}
            >
              分配角色
            </Button>
            <Button
              style={{ marginRight: 8 }}
              onClick={() => {
                modify(record.userId, '2');
              }}
            >
              修改
            </Button>
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    await PrmUserList(parameter).then((res) => {
      setData(res.data.record);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const scroll = useMemo(() => ({ y: 400 }), []);

  const handleOk = () => {
    form2.validateFields().then((values) => {
      form2.resetFields();
      PostUserAdd(values).then((res) => {
        setvisible(false);
      });
    });
  };
  // 权限分配弹窗取消
  const onCancel = () => {
    setvisible(false);
  };
  // 权限分配弹窗取消
  const onCancel1 = () => {
    setvisible1(false);
  };

  // 搜索框提交
  const onFinish = (values: any) => {
    PrmUserList(values).then((res) => {
      setData(res.data.record);
    });
  };

  // 确认修改
  const handleOk1 = () => {
    form3.validateFields().then((values) => {
      form3.resetFields();
      PostUserEdit({ ...values, userId: id });
    });

    setvisible1(false);
  };

  //修改----------------------------------------------------
  const modify = (id: number, type: string, roleList?: any) => {
    const sada = roleList.map((item: any) => {
      return item.id;
    });
    setcheckbox(sada);

    if (type === '1') {
      console.log(roleList);
      PostPrmRoleList({
        page: 1,
        size: 999,
      }).then((res: any) => {
        setroleList(res.data.record);
      });
      setvisible2(true);
    } else {
      setvisible1(true);
    }
    setiD(id);
    PostPrmUserGet({
      userId: id,
    }).then((res) => {
      form3.setFieldsValue(res.data);
    });
  };

  // 分配角色确认
  const handleOk2 = () => {
    console.log(checkbox);

    PostUserGrantRole({
      roleIds: { ...checkbox },
      userId: id,
    });
    console.log('xxxxxxxxxxxxx');

    setvisible2(false);
  };

  const onCancel2 = () => {
    setvisible2(false);
  };

  const onChange = (Value: any) => {
    setcheckbox(Value);
  };
  return (
    <PageContainer content="角色权限">
      <GridContent>
        <Suspense fallback={null}>
          <Card>
            <Form layout={'inline'} form={form1} onFinish={onFinish}>
              <Form.Item name="fullName" label="登录账户">
                <Input placeholder="清输入" />
              </Form.Item>

              <Form.Item name="userName" label="姓名">
                <Input placeholder="清输入" />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>

              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  form1.resetFields();
                }}
              >
                清空
              </Button>

              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  setvisible(true);
                }}
              >
                添加
              </Button>
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
        visible={visible}
        title="添加用户"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={handleOk}
      >
        <Form form={form2} layout="vertical" name="form_in_modal">
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
            name="fullName"
            label="登录账户"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="登录密码"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
            label="用户名"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        visible={visible1}
        title="修改"
        okText="确认"
        cancelText="取消"
        onCancel={onCancel1}
        onOk={handleOk1}
      >
        <Form
          form={form3}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: 'public' }}
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
            name="fullName"
            label="登录账户"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="登录密码"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
            label="用户名"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={visible2}
        title="分配角色"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel2}
        onOk={handleOk2}
      >
        <Checkbox.Group
          value={checkbox}
          style={{ width: '100%' }}
          onChange={onChange}
        >
          {roleList.map((iten: any, index) => {
            return (
              <Checkbox key={index} value={iten.id}>
                {iten.roleName}
              </Checkbox>
            );
          })}
        </Checkbox.Group>
        ,
      </Modal>
    </PageContainer>
  );
};

export default Role;
