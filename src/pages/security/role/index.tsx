import { getgetVerifyCode, getNotices } from '@/services/homeApi/api';
import { PageContainer } from '@ant-design/pro-layout';
import { useState } from 'react';
import { useRequest } from 'umi';

const Role = () => {
  const [img, steimg] = useState('');
  let { data, error, loading } = useRequest(() => {
    return getNotices();
  });
  console.log(data);

  return (
    <PageContainer content="角色权限">
      <div>
        {/* <img src={data?.captcha} alt="load" /> */}
        你好aaaaaaaaaaaaaaaaa jasijdojw asjdijas
      </div>
    </PageContainer>
  );
};

export default Role;
