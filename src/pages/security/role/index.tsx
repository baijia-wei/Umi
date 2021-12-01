import { getgetVerifyCode, getNotices } from '@/services/homeApi/api';
import { useState } from 'react';
import { useRequest } from 'umi';

const Role = () => {
  const [img, steimg] = useState('');
  let { data, error, loading } = useRequest(() => {
    return getNotices();
  });
  console.log(data);

  return (
    <div>
      {/* <img src={data?.captcha} alt="load" /> */}
      你好aaaaaaaaaaaaaaaaa jasijdojw asjdijas
    </div>
  );
};

export default Role;
