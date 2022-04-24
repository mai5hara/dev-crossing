/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Card } from 'antd';
import {
  bioWrap,
  skillsWrap,
  profileAboutItem,
  profileAbout,
  badge,
} from './ProfileAbout.style';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    githubusername,
    user: { name },
  }}) => {
  return (
    <div css={profileAbout}>
      {bio && (
        <Card>
          <div css={bioWrap}>
            <h2>{name?.trim().split(' ')[0]}'s Bio</h2>
            <p>{bio}</p>
          </div>
        </Card>
      )}
      <Card css={profileAboutItem}>
        <div css={skillsWrap}>
          <h2>Skill Set</h2>
          <div>
            {skills?.map((skill, index) => (
              <div css={badge} key={index}>
                <i className="fas fa-check"></i>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileAbout;
