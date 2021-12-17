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
import { useRequest } from 'umi';
import * as dateFns from 'date-fns';
import { IconPlus } from '@douyinfe/semi-icons';
import Table from '@douyinfe/semi-ui/lib/es/table/Table';
import treeData from './data';

import ccc from '../../../../config/routes';
const Role = () => {
  console.log(ccc);

  const [visible, setvisible] = useState(false);
  const [dataSource, setData] = useState<any>();
  const [valuedx, setvalue] = useState<any>();

  const columns = [
    {
      title: '角色名称',
      dataIndex: 'name',
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
            <Button
              onClick={showDialog}
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
    const data = [];
    for (let i = 0; i < 46; i++) {
      const isSemiDesign = i % 2 === 0;

      data.push({
        key: '' + i,
        name: isSemiDesign ? `家玮${i}.fig` : `催收主管${i}.fig`,
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

  // 权限分配弹窗
  const showDialog = () => {
    setvisible(true);
  };

  // 权限分配弹窗ok确认
  const handleOk = () => {
    console.log(valuedx, ' console.log(valuedx);');
    console.log();

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

  const onChange = (value: React.Key[]) => {
    setvalue(value);
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
        title="基本对话框"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tree
          treeData={treeData}
          multiple
          onChange={onChange as any}
          value={valuedx}
          defaultExpandAll
          style={style}
        />
      </Modal>
    </PageContainer>
  );
};

export default Role;
