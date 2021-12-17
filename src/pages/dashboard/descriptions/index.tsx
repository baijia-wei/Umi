import {
  GridContent,
  PageContainer,
  PageLoading,
} from '@ant-design/pro-layout';
import { Suspense, useEffect, useState } from 'react';

import {
  Col,
  Card,
  Row,
  Progress,
  Tag,
  Descriptions,
  Timeline,
  Typography,
} from '@douyinfe/semi-ui';
import { DualAxes, Line, Liquid, Pie } from '@ant-design/charts';
import { Column } from '@ant-design/charts';
import './index.less';

const Descriptionsw = () => {
  const { Text } = Typography;
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
              <Col span={6}>
                <Suspense fallback={null}>
                  <Card>
                    <Descriptions data={data} />
                  </Card>
                </Suspense>
              </Col>

              <Col span={6}>
                <Suspense fallback={null}>
                  <Card>
                    <Descriptions data={data} />
                  </Card>
                </Suspense>
              </Col>
              <Col span={6}>
                <Suspense fallback={null}>
                  <Card>
                    <Descriptions data={data} />
                  </Card>
                </Suspense>
              </Col>
              <Col span={6}>
                <Suspense fallback={null}>
                  <Card>
                    <Timeline style={{ height: '160px' }}>
                      <Timeline.Item time="2019-07-14 10:35" type="ongoing">
                        审核中
                      </Timeline.Item>
                      <Timeline.Item time="2019-06-13 16:17" type="success">
                        发布成功
                      </Timeline.Item>
                      <Timeline.Item time="2019-05-14 18:34" type="error">
                        审核失败
                      </Timeline.Item>
                    </Timeline>
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
                  <Card
                    title="Semi Design"
                    style={{ maxWidth: 360 }}
                    headerExtraContent={<Text link>更多</Text>}
                  >
                    Semi Design 是由互娱社区前端团队与 UED
                    团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
                    Web 应用。
                  </Card>
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

export default Descriptionsw;
