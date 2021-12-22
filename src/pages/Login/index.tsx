import React, { useEffect, useState } from 'react';
import { Form, Toast, Button } from '@douyinfe/semi-ui';
import { history, useModel, useRequest } from 'umi';
import './index.less';

import { login, verifyCodes } from '@/services/homeApi/api';
import { setToken } from '@/utils/cookie/auth';
const Login: React.FunctionComponent = () => {
  // 图片
  const [img, steimg] = useState('');
  const [verifyKey, stecode] = useState('');
  const { initialState, setInitialState } = useModel('@@initialState');

  // 处理用户权限
  const fetchUserInfo = async () => {
    await initialState?.fetchUserInfo?.();
  };
  // 登录
  const handleSubmit = async (values: API.LoginParams) => {
    values.verifyKey = verifyKey;
    console.log(values);
    try {
      // 登录
      const msg = await login(values);
      if (msg.status === 1) {
        setToken(msg.data as any);
        await fetchUserInfo();

        history.push('/');
      }
    } catch (error) {
      Toast.error('失败');
    }
  };

  //点击图片
  const VerificationCodeexx = () => {
    verifyCodes().then((res) => {
      stecode(res.data.verify);
      steimg(res.data.captcha);
    });
  };

  const syncValidate = (values: {
    username: undefined;
    password: undefined;
    verifyCode: undefined;
  }) => {
    const errors = { username: '', password: '', verifyCode: '' };
    if (
      (values.username === undefined && values.password === undefined) ||
      values.verifyCode === undefined
    ) {
      errors.username = '清输入用户名';
      errors.password = '请输入密码';
      errors.verifyCode = '请输入密码';
      return errors;
    }
    if (values.username === undefined) {
      errors.username = '请输用户名';
      return errors;
    }
    if (values.password === undefined) {
      errors.password = '请输入密码';
      return errors;
    }
    if (values.verifyCode === undefined) {
      errors.verifyCode = '请输入验证码';
      return errors;
    }
  };

  return (
    <div className="container loginback">
      <Form
        validateFields={syncValidate as any}
        onSubmit={handleSubmit}
        style={{ width: 300, marginTop: -300 }}
      >
        {({ formState, values, formApi }) => (
          <>
            <Form.Input
              field="username"
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
            <Form.Input
              field="verifyCode"
              trigger="blur"
              label="验证码"
              style={{ width: '70%' }}
              placeholder="Enter your password"
            ></Form.Input>
            {/* 验证码 */}
            <div className="spansaxws" onClick={VerificationCodeexx}>
              <span>
                <img src={img} alt="load" />
              </span>
            </div>

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
