import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Suspense, useEffect, useState } from 'react';

import { Col, Card, Row, Progress } from '@douyinfe/semi-ui';
import { DualAxes, Line, Liquid, Pie } from '@ant-design/charts';
import { Column } from '@ant-design/charts';
import './index.less';
import PageLoading from '@/components/PageLoading/index';
import configsw, { configxxxx } from './data';

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

  const configdwx = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };

  return (
    <PageContainer content="今日数据">
      <GridContent>
        <>
          <Suspense fallback={<PageLoading />}></Suspense>

          <Suspense fallback={null}>
            <Row
              style={{
                marginTop: 24,
              }}
            >
              <Col span={12}>
                <Suspense fallback={null}>
                  <Card>
                    <Column {...(config as any)} height={420} />
                  </Card>
                </Suspense>
              </Col>
              <Col span={6}>
                <Suspense fallback={null}>
                  <Card>
                    <div>收入情况 ￥100000（万）</div>
                    <Pie {...configsw} />
                  </Card>
                </Suspense>
              </Col>
              <Col span={6}>
                <Suspense fallback={null}>
                  <Card>
                    <div>收入情况 ￥100000（万）</div>
                    <br />
                    手续费
                    <Progress percent={10} stroke="#fc8800" showInfo={true} />
                    <br />
                    充值
                    <Progress percent={25} stroke="#f93920" showInfo={true} />
                  </Card>
                  <Card>
                    奖金池资源
                    <Liquid {...configdwx} height={234} />
                  </Card>
                </Suspense>
              </Col>
            </Row>
          </Suspense>

          <Row
            style={{
              marginTop: 24,
            }}
          >
            <Col span={24}>
              <Suspense fallback={null}>
                <Card>
                  <DualAxes {...configxxxx} />
                </Card>
              </Suspense>
            </Col>
          </Row>

          <Suspense fallback={null}></Suspense>

          {/* 折线表 */}
          <Suspense fallback={null}></Suspense>
        </>
      </GridContent>
    </PageContainer>
  );
};

export default asdadw;
