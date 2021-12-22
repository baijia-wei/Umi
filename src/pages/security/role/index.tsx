// import { getgetVerifyCode, getNotices } from '@/services/homeApi/api';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Tree } from '@douyinfe/semi-ui';
import { Modal, Form, Input, Radio } from 'antd';
import { Card } from 'antd';
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { IconPlus } from '@douyinfe/semi-icons';
import Table from '@douyinfe/semi-ui/lib/es/table/Table';
import routes from '../../../../config/routes';
import {
  PostGrantResource,
  PostPrmRoleAdd,
  PostprmRoleDelete,
  PostPrmRoleEdit,
  PostPrmRoleGet,
  PostSubmitResource,
  PrmRoleList,
  PrmRoleResource,
} from '@/services/homeApi/api';
import TextArea from 'antd/lib/input/TextArea';
import Popconfirm from 'antd/es/popconfirm';
import { useModel } from 'umi';

interface FieldData {
  roleName: string | number | (string | number)[];
  description?: any;
  touched?: boolean;

  errors?: string[];
}
const Role: React.FC = () => {
  const refTree = useRef<any>(null);

  const [isfelase, setisfelase] = useState(true);
  const [form] = Form.useForm();
  const [fields, setFields] = useState<any>();
  const [parameter, setparameter] = useState<any>({
    page: 1,
    size: 15,
  });
  const [visible1, setvisible1] = useState(false);
  const [visible, setvisible] = useState(false);
  const [valueterr, setvalueterr] = useState<any>();
  const [dataSource, setData] = useState<any>();
  const [valuedx, setvalue] = useState<any>();
  const [id, setiD] = useState(0);

  const { initialState, setInitialState } = useModel('@@initialState');

  const columns = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
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
      title: '描述',
      dataIndex: 'description',
      render: (text: any, record: any) => {
        return <div>{text}</div>;
      },
    },

    {
      title: '操作',
      dataIndex: 'size',
      sorter: (a: { size: number }, b: { size: number }) =>
        a.size - b.size > 0 ? 1 : -1,
      render: (text: string, record: any) => {
        return (
          <div>
            <Button
              onClick={() => {
                showDialog(record.id);
              }}
              style={{ marginRight: 8, color: 'rgb(104, 0, 240)' }}
            >
              分配权限
            </Button>

            <Button
              type="warning"
              style={{ marginRight: 8 }}
              onClick={() => modify(record.id)}
            >
              修改
            </Button>

            <Popconfirm
              placement="top"
              title="确认删除"
              onConfirm={() => {
                RoleDelete(record.id);
              }}
              okText="确认"
              cancelText="取消"
            >
              <Button type="danger" style={{ marginRight: 8 }}>
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const getData = () => {
    PrmRoleList(parameter).then((res) => {
      setData(res.data.record);
    });
  };
  useEffect(() => {
    setvalue(screen(routes));
    getData();
  }, []);
  const scroll = useMemo(() => ({ y: 400 }), []);

  const screen = (routes: any) => {
    return routes
      .filter((item: any) => {
        return item.name !== undefined;
      })
      .map((item: any, index: any) => {
        return {
          label: item.name,
          value: item.name,
          url: item.path,
          name: item.name,
          code: item.code,
          key: item.key,
          apiRoutes: item.apiRoutes,
          children: screen(item.routes || []),
        };
      });
  };

  useEffect(() => {
    setvalueterr(valueterr);
    valueterxxxrx(valueterr);
  }, [valueterr]);

  const valueterxxxrx = (valueterr: any) => {
    return valueterr;
  };

  function getSome(arr2: any) {
    if (arr2 === []) {
      return [];
    }
    return arr2.map((item: { name: any }) => item.name);
  }

  // 权限分配  弹窗
  const showDialog = (id: number) => {
    PrmRoleResource({
      roleId: id,
      type: 20,
    }).then((item) => {
      setvalueterr(getSome(item.data));

      setvisible(true);
    });
    setiD(id);
  };

  const getSomxex = (arr2: string) => {
    const resources: any = [];
    valuedx.map((item: any, index: number) => {
      if (item.code) {
        resources.push({
          code: item.code,
          name: item.name,
          url: item.url,
          apiRoutes: item.apiRoutes,
        });
      }
      if (item.name === arr2) {
        item.children.map(({ code, name, url, apiRoutes }: any) => {
          resources.push({ code, name, url, apiRoutes });
        });
      } else {
        item.children.map(({ code, name, url, apiRoutes }: any) => {
          if (name === arr2) {
            resources.push({ code, name, url, apiRoutes });
          }
        });
      }
    });
    return resources;
  };
  //数组平摊函数
  function flat<T>(array: Array<T | T[]>) {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        result.push(...(array[i] as T[]));
      } else {
        result.push(array[i] as T);
      }
    }
    return result;
  }
  // 权限分配弹窗ok确认
  const handleOk = async () => {
    const resources: string[] = [];
    let resourceCodes: string[] = [];

    valueterr.map((item: any, index: string | number) => {
      resourceCodes.push(...getSomxex(item).map(({ code }: any) => code));
      resourceCodes = resourceCodes.concat(
        flat(getSomxex(item).map(({ apiRoutes }: any) => apiRoutes)),
      );
      if (typeof item === 'string') {
        resources.push(...getSomxex(item));
      } else {
        resources.push(...getSomxex(item[index]));
      }
    });

    await PostSubmitResource({
      resources,
      type: 20,
    });
    await PostGrantResource({
      resourceCodes,
      roleId: id,
    });

    setvisible(false);
  };

  // 权限分配弹窗取消
  const handleCancel = () => {
    setvisible(false);
  };
  // Tree 树形控件
  const style = {
    width: 260,
    height: 420,
  };
  // 路由树
  const onChange = (value: any) => {
    setvalueterr(value);
  };

  const handleOk1 = () => {
    if (isfelase) {
      form.validateFields().then((values) => {
        PostPrmRoleAdd(values).then((ren) => {
          setvisible1(false);
          getData();
        });
      });
    } else {
      form.validateFields().then((values) => {
        PostPrmRoleEdit({
          description: values.description,
          roleId: id,
          roleName: values.roleName,
        }).then((res) => {
          setvisible1(false);
          getData();
        });
      });
    }
  };
  const handleCancel1 = (vale?: any) => {
    setvisible1(false);
  };

  // 删除角色
  const RoleDelete = (id: string) => {
    PostprmRoleDelete({
      roleId: id,
    }).then((res) => {
      getData();
    });
  };

  // 修改角色
  const modify = (id: number) => {
    setiD(id);
    PostPrmRoleGet({
      roleId: id,
    }).then((res) => {
      form.setFieldsValue(res.data);
      setvisible1(true);
      setisfelase(false);
    });
  };

  return (
    <PageContainer content="角色权限">
      <GridContent>
        <Suspense fallback={null}>
          <Card>
            <Button
              theme="solid"
              onClick={() => {
                setvisible1(true);
              }}
              icon={<IconPlus />}
              type="primary"
              style={{ marginRight: 8 }}
            >
              创建
            </Button>
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
        title="分配权限"
        visible={visible}
        onOk={handleOk}
        maskClosable={true}
        onCancel={handleCancel}
      >
        <div ref={refTree}>
          <Tree
            treeData={valuedx}
            multiple
            motion
            onChange={onChange as any}
            value={valueterr}
            defaultExpandAll
            style={style}
          />
        </div>
      </Modal>

      <Modal
        title="创建角色"
        cancelText="Cancel"
        visible={visible1}
        onOk={handleOk1}
        afterClose={() => {
          setisfelase(true);
        }}
        onCancel={handleCancel1}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="roleName"
            label="姓名"
            rules={[{ required: true, message: '不能为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: '不能为空' }]}
            label="描述"
          >
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
};

export default Role;
