import React, { useCallback } from 'react';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import { history } from 'umi';
import { stringify } from 'querystring';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

import type { MenuInfo } from 'rc-menu/lib/interface';
import { useState } from '@umijs/renderer-react/node_modules/@types/react';
import imgsyyy from '../../assets/static/11111.jpg';

import { Toast } from '@douyinfe/semi-ui';
import { removeToken } from '@/utils/cookie/auth';
export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  const { query = {}, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname,
      }),
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  //   const { initialState, setInitialState } = useState('@@initialState');//获取用户信息

  //  const  initialState=({
  //     currentUser:{
  //       name:"jiawei",
  //       avatar:""
  //     }
  //   })

  //   const onMenuClick = useCallback(
  //     (event: MenuInfo) => {
  //       const { key } = event;
  //       if (key === 'logout') {
  //         setInitialState((s: any) => ({ ...s, currentUser: undefined }));
  //         loginOut();
  //         return;
  //       }
  //       history.push(`/account/${key}`);
  //     },
  //     [setInitialState],
  //   );

  //   const loading = (
  //     <span className={`${styles.action} ${styles.account}`}>
  //       <Spin
  //         size="small"
  //         style={{
  //           marginLeft: 8,
  //           marginRight: 8,
  //         }}
  //       />
  //     </span>
  //   );

  //   if (!initialState) {
  //     return loading;
  //   }

  //   const { currentUser } = initialState;

  //   if (!currentUser || !currentUser.name) {
  //     return loading;
  //   }

  const onMenuClick = () => {
    removeToken();
    Toast.info('退出成功');

    location.replace('/Login/index');
    // history.push("/Login/index");
  };
  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />  */}
        <Avatar
          size="small"
          className={styles.avatar}
          src={imgsyyy}
          alt="avatar"
        />
        {/* <span className={`${styles.name} anticon`}>{currentUser.name}</span> */}
        <span className={`${styles.name} anticon`}>嘤嘤嘤</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
