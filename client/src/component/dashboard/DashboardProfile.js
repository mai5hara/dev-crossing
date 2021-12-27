/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import ProfileTop from '../profile/ProfileTop';
import ProfileAbout from '../profile/ProfileAbout';
import { deleteAccount } from '../../actions/profile';
import { titleWrap, profileWrap } from './dashboard.style';
import {
  profileDetail,
  profileDetailContainer,
  profileAbout,
  dashboardItem,
} from '../profile/Profile.style';
import { btnStyle } from '../ui/Button.style';

const DashboardProfile = ({ profile, auth }) => {
  const history = useHistory();

  return (
    <div css={dashboardItem}>
      <div css={titleWrap}>
        <h2>Profile</h2>
        <Button
          css={btnStyle('primary')}
          shape="round"
          onClick={() => history.push('edit-profile')}
        >
          <i class="fas fa-edit"></i>
          <span>Edit Profile</span>
        </Button>
      </div>
      <div css={profileWrap}>
        <div css={profileDetail}>
          <div css={profileDetailContainer}>
            <ProfileTop profile={profile} auth={auth} dashboard />
          </div>
        </div>
        <div css={profileAbout('dashboard')}>
          <ProfileAbout profile={profile} />
        </div>
      </div>
      <Button onClick={() => deleteAccount()} css={btnStyle('secondary')}>
        <i className="fas fa-trash"></i> Delete My Account
      </Button>
    </div>
  );
};

export default DashboardProfile;
