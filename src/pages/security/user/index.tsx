import { getgetVerifyCode } from '@/services/homeApi/api';
import { PageContainer } from '@ant-design/pro-layout';
import { useState } from 'react';
import { useRequest } from 'umi';

const User = () => {
  const [img, steimg] = useState('');
  let { data, error, loading } = useRequest(() => {
    return getgetVerifyCode();
  });
  return (
    <PageContainer content="用户权限">
      <div>
        <img src={data?.captcha} alt="load" />
        你aaaaaa
      </div>
    </PageContainer>
  );
};

export default User;
