/* eslint-disable no-mixed-operators */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Row } from 'antd';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { profileSelector } from '../../store/features/profileSlice'
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../store/apiCalls/profile';
import { profilesContentWrap, profilesContent, message } from './Profiles.style';

const Profiles = () => {
  const {profiles, loading, error} = useSelector(profileSelector)
  
  const dispatch = useDispatch();

  const notify = (message) => {
    toast.error(message, {
      theme: 'colored',
      position: 'top-center',
      toastId: 'profiles'
    });
  }

  if(error) {
    notify(error?.msg);
  }

  useEffect(() => {
    console.log('aa')
    dispatch(getProfiles())
  }, [dispatch]);

  console.log('profiles',profiles, loading, error)


  return (
    <div css={profilesContentWrap}>
      {loading ? (
        <Spinner />
      ) : (
        <div css={profilesContent}>
          <h1>Developers</h1>
          <p css={message}>
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <Row gutter={[16, 16]}>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Profiles;
