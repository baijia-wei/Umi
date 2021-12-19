// import { getgetVerifyCode, getNotices } from '@/services/homeApi/api';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Modal, Tree } from '@douyinfe/semi-ui';
import { Card } from 'antd';
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  SetStateAction,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRequest } from 'umi';
import * as dateFns from 'date-fns';
import { IconPlus } from '@douyinfe/semi-icons';
import Table from '@douyinfe/semi-ui/lib/es/table/Table';

import ccc from '../../../../config/routes';
import { PrmRoleList, PrmRoleResource } from '@/services/homeApi/api';
const Role = () => {
  const [parameter, setparameter] = useState<any>({
    page: 1,
    size: 15,
  });

  const [visible, setvisible] = useState(false);
  const [valueterr, setvalueterr] = useState<any>();
  const [dataSource, setData] = useState<any>();
  const [valuedx, setvalue] = useState<any>();

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
    setvalue(xxxx(ccc));
    getData();
  }, []);

  const scroll = useMemo(() => ({ y: 400 }), []);

  const xxxx = (routes: any) => {
    return routes
      .filter((item: any) => {
        return item.name !== undefined || item.code !== undefined;
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
          children: xxxx(item.routes || []),
        };
      });
  };

  function getSome(arr1: any, arr2: any) {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j].code === arr2[i].code) {
          newArr.push(arr1[j]);
        }
      }
    }
    return newArr;
  }

  // 权限分配弹窗
  const showDialog = async (id: string | number) => {
    const lonxxw = [
      {
        code: 'bd388aad09f9',
        name: '图表页面',
        url: '/dashboard',
      },
    ];
    const dwzx: any[] = getSome(valuedx, lonxxw);

    console.log(dwzx, 'xxxx');

    // const lonx = await PrmRoleResource({ roleId: id, type: 20 })

    let xsxs = [];

    xsxs.push(lonxxw.map(({ name }) => name));

    setvalueterr(xsxs);

    console.log(valueterr);

    setvisible(true);
  };

  function getSomex(arr2: any) {
    const llll: any = [];

    valuedx.map((item: any, index: string | number) => {
      if (item.name === arr2) {
        llll.push({
          code: item.code,
          name: item.name,
          url: item.url,
        });

        item.children.map((item1: any) => {
          llll.push({
            code: item1.code,
            name: item1.name,
            url: item1.url,
          });
        });
      }
      item.children.map((item1: any) => {
        if (item1.name === arr2) {
          llll.push({
            code: item1.code,
            name: item1.name,
            url: item1.url,
          });
        }
      });
    });

    return llll;
  }

  // 权限分配弹窗ok确认
  const handleOk = () => {
    const axooo: any = [];
    valueterr.map((item: any, index: string | number) => {
      if (typeof item === 'string') {
        axooo.push(...getSomex(item));
      } else {
        axooo.push(...getSomex(item[index]));
      }
    });

    console.log(getSomex('用户权限'));

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

  const onChange = (value: SetStateAction<never[]>) => {
    setvalueterr(value);
  };

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
          onChange={onChange as any}
          defaultValue={valueterr}
          defaultExpandAll
          style={style}
        />
      </Modal>
    </PageContainer>
  );
};

export default Role;
