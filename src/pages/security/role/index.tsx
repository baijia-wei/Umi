// import { getgetVerifyCode, getNotices } from '@/services/homeApi/api';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Modal, Tree } from '@douyinfe/semi-ui';
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

import { IconPlus } from '@douyinfe/semi-icons';
import Table from '@douyinfe/semi-ui/lib/es/table/Table';
import routes from '../../../../config/routes';
import {
  PostGrantResource,
  PostSubmitResource,
  PrmRoleList,
  PrmRoleResource,
} from '@/services/homeApi/api';
const Role = () => {
  const [parameter, setparameter] = useState<any>({
    page: 1,
    size: 15,
  });
  const [visible1, setvisible1] = useState(false);
  const [visible, setvisible] = useState(false);
  const [valueterr, setvalueterr] = useState([]);
  const [dataSource, setData] = useState<any>();
  const [valuedx, setvalue] = useState<any>();
  const [id, setiD] = useState(0);

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
            <Button type="warning" style={{ marginRight: 8 }}>
              修改
            </Button>
            <Button type="danger" style={{ marginRight: 8 }}>
              删除
            </Button>
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

  function getSome(arr2: any) {
    return arr2.map((item: { name: any }) => item.name);
  }

  // 权限分配弹窗
  const showDialog = async (id: number) => {
    let list: any = [];
    await PrmRoleResource({
      roleId: id,
      type: 20,
    }).then((item) => {
      list = item.data;
    });
    setiD(id);

    setvalueterr(getSome(list));

    setvisible(true);
  };

  const getSomxex = (arr2: string) => {
    const resources: any = [];
    valuedx.map((item: any, index: number) => {
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
      if (typeof item === 'string') {
        resourceCodes.push(...getSomxex(item).map(({ code }: any) => code));
        resourceCodes = resourceCodes.concat(
          flat(getSomxex(item).map(({ apiRoutes }: any) => apiRoutes)),
        );
        resources.push(...getSomxex(item));
      } else {
        resourceCodes.push(...getSomxex(item).map(({ code }: any) => code));
        resourceCodes = resourceCodes.concat(
          flat(getSomxex(item).map(({ apiRoutes }: any) => apiRoutes)),
        );
        resources.push(...getSomxex(item[index]));
      }
    });

    await PostSubmitResource({
      resources,
      type: 20,
    }).then((res) => {
      console.log(res);
    });
    await PostGrantResource({
      resourceCodes,
      roleId: id,
    }).then((res) => {
      console.log(res);
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
    console.log(value, 'valueterr');
    setvalueterr(value);
  };

  const handleOk1 = () => {
    setvisible1(false);
  };
  const handleCancel1 = () => {};
  return (
    <PageContainer content="角色权限">
      <GridContent>
        <Suspense fallback={null}>
          <Card>
            <Button
              theme="solid"
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
        onCancel={handleCancel}
      >
        <Tree
          treeData={valuedx}
          multiple
          motion
          onChange={onChange as any}
          defaultValue={valueterr}
          defaultExpandAll
          style={style}
        />
      </Modal>
      <Modal
        title="创建角色"
        visible={visible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
      ></Modal>
    </PageContainer>
  );
};

export default Role;
