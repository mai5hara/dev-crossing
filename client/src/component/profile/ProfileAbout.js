/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Card, Button } from 'antd';
import {
  bioWrap,
  skillsWrap,
  profileAboutItem,
  profileAbout,
} from './ProfileAbout.style';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div css={profileAbout}>
      {bio && (
        <Card>
          <div css={bioWrap}>
            <h2>{name.trim().split(' ')[0]}'s Bio</h2>
            <p>{bio}</p>
          </div>
        </Card>
      )}
      <Card css={profileAboutItem}>
        <div css={skillsWrap}>
          <h2>Skill Set</h2>
          <div>
            {skills.map((skill, index) => (
              <Button shape="round" key={index}>
                <span>
                  <i className="fas fa-check"></i>
                </span>
                {skill}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileAbout;
