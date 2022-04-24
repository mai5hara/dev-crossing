/* eslint-disable no-mixed-operators */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import { Tabs, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { profileSelector } from '../../store/features/profileSlice'
import { authSelector } from '../../store/features/authSlice'
import Spinner from '../layout/Spinner';
import Experience from './Experience';
import Education from './Education';
import MypageProfile from './MypageProfile';
import { getCurrentProfile } from '../../store/apiCalls/profile';
import { mypage, userName, message } from './Mypage.style';
import { btnStyle } from '../ui/Button.style';

const Mypage = () => {
  const { TabPane } = Tabs;
  const profileData = useSelector(profileSelector)
  const auth = useSelector(authSelector)
  const history = useHistory();
  const dispatch = useDispatch();

  const notify = (message) =>
  toast.error(message, {
    theme: 'colored',
    position: 'top-center',
  })

  if(profileData.error) {
    notify(profileData.error?.msg)
  }

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return (
    <div css={mypage}>
      { profileData.loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Mypage</h1>
          <p css={userName}>
            <span>
              <i className="fas fa-user"></i>
            </span>
            Welcome {auth.user && auth.user.name}
          </p>
          {profileData.profile !== null ? (
            <>
              <Tabs size="small" defaultActiveKey="1" type="card">
                <TabPane tab="Profile" key="1">
                  <MypageProfile profile={profileData.profile} auth={auth} />
                </TabPane>
                <TabPane tab="Experience" key="2">
                  <Experience experience={profileData.profile.experience} />
                </TabPane>
                <TabPane tab="Education" key="3">
                  <Education education={profileData.profile.education} />
                </TabPane>
              </Tabs>
            </>
          ) : (
            <>
              <p css={message}>
                You have not yet setup a profile, please add some info
              </p>
              <Button
                css={btnStyle('primary')}
                onClick={() => history.push('/create-profile')}
              >
                Create Profile
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Mypage;
