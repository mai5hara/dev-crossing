/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProfileTop from '../profile/ProfileTop';
import ProfileAbout from '../profile/ProfileAbout';
import { deleteAccount } from '../../store/apiCalls/profile';
import { titleWrap, profileWrap } from './Mypage.style';
import {
  profileDetail,
  profileDetailContainer,
  profileAbout,
  mypageItem,
} from '../profile/Profile.style';
import { btnStyle } from '../ui/Button.style';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '../../store/features/profileSlice'

const MypageProfile = ({ profile, auth }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector(profileSelector)

  const notify = (message) =>
  toast.error(message, {
    theme: 'colored',
    position: 'top-center',
    toastId: 'mypageProfile'
  })

  if(error) {
    notify(error?.msg)
  }
  
  return (
    <div css={mypageItem}>
      <div css={titleWrap}>
        <h2>Profile</h2>
        <Button
          css={btnStyle('primary')}
          onClick={() => history.push('edit-profile')}
        >
          <i className="fas fa-edit"></i>
          <span>Edit Profile</span>
        </Button>
      </div>
      <div css={profileWrap}>
        <div css={profileDetail}>
          <div css={profileDetailContainer}>
            <ProfileTop profile={profile} auth={auth} mypage />
          </div>
        </div>
        <div css={profileAbout('mypage')}>
          <ProfileAbout profile={profile} />
        </div>
      </div>
      <Button onClick={() => dispatch(deleteAccount())} css={btnStyle('secondary')}>
        <i className="fas fa-trash"></i> Delete My Account
      </Button>
    </div>
  );
};

export default MypageProfile;
