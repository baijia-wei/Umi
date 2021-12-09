import {
  GridContent,
  PageContainer,
  PageLoading,
} from '@ant-design/pro-layout';
import { Suspense, useEffect, useState } from 'react';

import { Col, Card, Row, Progress, Tag, Descriptions } from '@douyinfe/semi-ui';
import { DualAxes, Line, Liquid, Pie } from '@ant-design/charts';
import { Column } from '@ant-design/charts';
import './index.less';

const Descriptionsw = () => {
  const data: any = [
    { key: '实际用户数量', value: '1,480,000' },
    { key: '7天留存', value: '98%' },
    { key: '安全等级', value: '3级' },
    { key: '垂类标签', value: '电商' },
    { key: '认证状态', value: '未认证' },
  ];

  return (
    <PageContainer content="">
      <GridContent>
        <>
          <Suspense fallback={<PageLoading />}></Suspense>

          <Suspense fallback={null}>
            <Row
              style={{
                marginTop: 24,
              }}
            >
              <Col span={24}>
                <Suspense fallback={null}>
                  <Card>
                    <Descriptions data={data} />
                  </Card>
                </Suspense>
              </Col>

              {/* <Col span={6}>
                <Suspense fallback={null}>
                  <Card>

                  </Card>
                </Suspense>
              </Col>
              <Col span={6}>
                <Suspense fallback={null}>
                  <Card>

                  </Card>
                </Suspense>
              </Col> */}
            </Row>
          </Suspense>

          <Row
            style={{
              marginTop: 24,
            }}
          >
            <Col span={24}>
              <Suspense fallback={null}>
                <Card></Card>
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

export default Descriptionsw;
