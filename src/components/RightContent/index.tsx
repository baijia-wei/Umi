import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { TagInput } from '@douyinfe/semi-ui';
import { history } from 'umi';
import {
  useEffect,
  useState,
} from '@umijs/renderer-react/node_modules/@types/react';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  return (
    <Space>
      <div className={styles.right}>
        <Avatar />
        <SelectLang className={styles.action} />
      </div>
    </Space>
  );
};

export default GlobalHeaderRight;
