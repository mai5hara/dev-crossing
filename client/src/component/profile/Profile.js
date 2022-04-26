/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { profileSelector } from '../../store/features/profileSlice';
import { authSelector } from '../../store/features/authSlice';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../store/apiCalls/profile';
import {
  profileDetail,
  profileDetailContainer,
  profileAbout,
  profileContainer,
  profileExpEdu,
  profileExpEduItem,
  noProfile,
  profileGithub
} from './Profile.style';

const Profile = ({ match }) => {
  const { profile, loading, error } = useSelector(profileSelector)
  const auth = useSelector(authSelector)
  const dispatch = useDispatch();

  const notify = (message) => {
    toast.error(message, {
      theme: 'colored',
      position: 'top-center',
      toastId: 'profile'
    })
  }

  if(error) {
    notify(error?.msg);
  }

  useEffect(() => {
    dispatch(getProfileById(match.params.id));
  }, [dispatch, match.params.id]);

  console.log('profile', profile, loading, error)

  return (
    <div css={profileContainer}>
      {loading ? (
        <Spinner />
      ): !profile ? (
        <div css={profileAbout}>
          <p css={noProfile}>No Profile yet</p>
        </div>
      ) : (
        <>
          <div css={profileDetail}>
            <div css={profileDetailContainer}>
              <ProfileTop profile={profile} auth={auth} />
            </div>
          </div>
          <div css={profileAbout}>
            <ProfileAbout profile={profile} />
            <div css={profileExpEdu}>
              <div css={profileExpEduItem}>
                <Card>
                  <h2>Experience</h2>
                  {profile.experience.length > 0 ? (
                    <>
                      {profile.experience.map((experience) => (
                        <ProfileExperience
                          key={experience._id}
                          experience={experience}
                        />
                      ))}
                    </>
                  ) : (
                    <h4>No experience credentials</h4>
                  )}
                </Card>
              </div>
              <div css={profileExpEduItem}>
                <Card>
                  <h2>Education</h2>
                  {profile.education.length > 0 ? (
                    <>
                      {profile.education.map((education) => (
                        <ProfileEducation
                          key={education._id}
                          education={education}
                        />
                      ))}
                    </>
                  ) : (
                    <h4>No education credentials</h4>
                  )}
                </Card>
              </div>
            </div>
            {profile.githubusername && (
              <div css={profileGithub}>
                <Card>
                  <h2>Github Repos</h2>
                  <ProfileGithub username={profile.githubusername}/>
                </Card>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
