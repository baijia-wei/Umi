import { Alert } from 'antd';
import React, { useEffect, useState } from 'react';
import { Form, Toast, Button } from '@douyinfe/semi-ui';
import { history, useModel } from 'umi';
import './index.less';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleSubmit = (values: any) => {
    document.cookie = 'toke=' + 'xxxxxx';
    // 设置用户信息 权限
    setInitialState({
      isAdmin: 'admin',
      hasRoutes: ['用户管理', '图表页面', '列表页面'], //权限列表
    });
    Toast.info('登录成功');
    history.push('/');
  };

  const syncValidate = (values: { name: number; password: number }) => {
    const errors = { name: '', password: '' };
    if (values.name === undefined && values.password === undefined) {
      errors.name = '清输入用户名';
      errors.password = '请输入密码';
      return errors;
    }
    if (values.name === undefined) {
      errors.name = '请输用户名';
      return errors;
    }
    if (values.password === undefined) {
      errors.password = '请输入密码';
      return errors;
    }
  };

  return (
    <div className="container loginback">
      <Form
        validateFields={syncValidate as any}
        onSubmit={handleSubmit}
        style={{ width: 400 }}
      >
        {({ formState, values, formApi }) => (
          <>
            <Form.Input
              field="name"
              trigger="blur"
              label="账户"
              style={{ width: '100%' }}
              placeholder="Enter your phone number"
            ></Form.Input>

            <Form.Input
              field="password"
              trigger="blur"
              label="密码"
              style={{ width: '100%' }}
              placeholder="Enter your password"
            ></Form.Input>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default Login;
