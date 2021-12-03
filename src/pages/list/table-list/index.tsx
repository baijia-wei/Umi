import { Suspense, useEffect, useMemo, useState } from 'react';
// import  '';
import {
  Table,
  Avatar,
  Descriptions,
  Tag,
  Card,
  Form,
  Button,
} from '@douyinfe/semi-ui';
import './index.less';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import * as dateFns from 'date-fns';
const TableList = () => {
  const [dataSource, setData] = useState([]);
  const figmaIconUrl =
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png';
  useEffect(() => {
    const data = getData();
    setData(data as any);
  }, []);
  const expandData = {
    0: [
      { key: '实际用户数量', value: '1,480,000' },
      { key: '7天留存', value: '98%' },
      { key: '安全等级', value: '3级' },
      { key: '垂类标签', value: <Tag style={{ margin: 0 }}>设计</Tag> },
      { key: '认证状态', value: '未认证' },
    ],
    1: [
      { key: '实际用户数量', value: '2,480,000' },
      { key: '7天留存', value: '90%' },
      { key: '安全等级', value: '1级' },
      { key: '垂类标签', value: <Tag style={{ margin: 0 }}>模板</Tag> },
      { key: '认证状态', value: '已认证' },
    ],
    2: [
      { key: '实际用户数量', value: '2,920,000' },
      { key: '7天留存', value: '98%' },
      { key: '安全等级', value: '2级' },
      { key: '垂类标签', value: <Tag style={{ margin: 0 }}>文档</Tag> },
      { key: '认证状态', value: '已认证' },
    ],
  };
  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
      width: 400,
      render: (text: any) => {
        return (
          <div>
            <Avatar
              size="small"
              shape="square"
              src={figmaIconUrl}
              style={{ marginRight: 12 }}
            ></Avatar>
            {text}
          </div>
        );
      },

      filters: [
        {
          text: 'Semi Design 设计稿',
          value: 'Semi Design 设计稿',
        },
        {
          text: 'Semi Pro 设计稿',
          value: 'Semi Pro 设计稿',
        },
      ],
      onFilter: (value: any, record: { name: string | any[] }) =>
        record.name.includes(value),
    },
    {
      title: '大小',
      dataIndex: 'size',
      sorter: (a: { size: number }, b: { size: number }) =>
        a.size - b.size > 0 ? 1 : -1,
      render: (text: any) => `${text} KB`,
    },
    {
      title: '所有者',
      dataIndex: 'owner',
      render: (text: any, record: any) => {
        return (
          <div>
            <Avatar
              size="small"
              color={record.avatarBg}
              style={{ marginRight: 4 }}
            >
              {typeof text === 'string' && text.slice(0, 1)}
            </Avatar>
            {text}
          </div>
        );
      },
    },
    {
      title: '更新日期',
      dataIndex: 'updateTime',
      render: (value: any) => {
        return dateFns.format(new Date(value), 'yyyy-MM-dd');
      },
    },
  ];
  const rowSelection = useMemo(
    () => ({
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows,
        );
      },
      getCheckboxProps: (record: { name: string }) => ({
        disabled: record.name === 'Michael James', // Column configuration not to be checked
        name: record.name,
      }),
    }),
    [],
  );
  const scroll = useMemo(() => ({ y: 300 }), []);
  const expandRowRender = (record: any, index: any) => {
    return <Descriptions align="justify" data={(expandData as any)[index]} />;
  };
  const DAY = 24 * 60 * 60 * 1000;
  const getData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      const isSemiDesign = i % 2 === 0;
      const randomNumber = (i * 1000) % 199;
      data.push({
        key: '' + i,
        name: isSemiDesign
          ? `Semi Design 设计稿${i}.fig`
          : `Semi Pro 设计稿${i}.fig`,
        owner: isSemiDesign ? '姜鹏志' : '郝宣',
        size: randomNumber,
        updateTime: new Date().valueOf() + randomNumber * DAY,
        avatarBg: isSemiDesign ? 'grey' : 'red',
      });
    }
    return data;
  };

  const handleSubmit = () => {};

  return (
    <PageContainer content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
      <GridContent>
        <Suspense fallback={null}>
          <Card className="offlineCards">
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
                  style={{ marginRight: '10px' }}
                  className="btn-margin-right"
                >
                  搜索
                </Button>
                <Button htmlType="reset">清空</Button>
              </div>
            </Form>
          </Card>
        </Suspense>

        <Suspense fallback={null}>
          <Card className="offlineCards">
            <Table
              scroll={scroll}
              rowKey="name"
              columns={columns as any}
              dataSource={dataSource}
              // expandedRowRender={expandRowRender}
              hideExpandedColumn={false}
              rowSelection={rowSelection}
            />
          </Card>
        </Suspense>
      </GridContent>
    </PageContainer>
  );
};

export default TableList;
