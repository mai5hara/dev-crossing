/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';
import {
  profileDetail,
  profileDetailContainer,
  profileAbout,
  profileContainer,
  profileExpEdu,
  profileExpEduItem,
} from './Profile.style';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <div css={profileContainer}>
      {profile === null || loading ? (
        <Spinner />
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
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
