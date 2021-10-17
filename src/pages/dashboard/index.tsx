import React, { memo } from 'react';
import { Button } from 'antd';
import { UserStore } from '../../store';
import { useModel } from 'umi';
const Dashboard = function (props) {
  const { history } = props;
  console.log(UserStore);
  const { username, avatar, title } = UserStore();
  const initState = useModel('@@initialState');
  console.log(initState, '====');
  return (
    <div>
      Dashboard页面
      <div>
        <div>用户名：{username}</div>
        <div>头像：{avatar}</div>
        <div>标题：{title}</div>
        {/* 不能直接遍历，因为userInfo里面除了有属性，还有方法。属性通过userInfo['username']调用没问题，
        但是方法userInfo['setUserToken']会报警告 */}
        {/* {Object.keys(userInfo).map((item, index) => {
          console.log(userInfo, item, '00');
          return (
            <div key={index}>
              <span style={{ color: 'red' }}>{item}: </span>
              <span style={{ width: '300px', wordBreak: 'break-word' }}>
                {userInfo['username']}
              </span>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
export default Dashboard;
