import { getgetVerifyCode } from '@/services/homeApi/api';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Suspense, useEffect, useState } from 'react';

import { Col, Card, Row } from '@douyinfe/semi-ui';
import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/charts';

import PageLoading from '@/components/PageLoading/index';

const asdadw = () => {
  const dataswk = [
    { year: '1990', value: 3 },
    { year: '1991', value: 1 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return (
    <PageContainer content="数据可视化">
      <GridContent>
        <>
          <Suspense fallback={<PageLoading />}></Suspense>
          <Suspense fallback={null}>
            <Card bordered={false}>
              <div>
                <Line
                  height={400}
                  data={dataswk}
                  xField="year"
                  yField="value"
                />
              </div>
            </Card>
          </Suspense>

          <Row
            style={{
              margin: 24,
            }}
          >
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <Suspense fallback={null}>adas</Suspense>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <Suspense fallback={null}>asdas</Suspense>
            </Col>
          </Row>

          <Suspense fallback={null}>
            <Card>
              <div>
                <Column {...(config as any)} />
              </div>
            </Card>
          </Suspense>

          {/* 折线表 */}
          <Suspense fallback={null}></Suspense>
        </>
      </GridContent>
    </PageContainer>
  );
};

export default asdadw;
