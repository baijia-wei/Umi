import { Alert } from 'antd';
import React, { useEffect, useState } from 'react';
import { Form, Toast, Button } from '@douyinfe/semi-ui';

import './index.less';

const Login: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
    Toast.info('表单已提交');
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
    <div className="container">
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
