/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { profile, profileImg, profileImgWrap } from './ProfileItem.style';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} css={profile}>
      <Link to={`/profile/${_id}`}>
        <Card hoverable>
          <div css={profileImgWrap}>
            <img css={profileImg} src={avatar} alt="" className="round-img" />
          </div>
          <div>
            <h2>{name}</h2>
            <p>
              {status} {company && <span> at {company}</span>}
            </p>
            <p className="my-1">{location && <span>{location}</span>}</p>
          </div>
          <ul>
            {skills.slice(0, 4).map((skill, index) => (
              <li key={index} className="text-primary">
                <i className="fas fa-check"></i> {skill}
              </li>
            ))}
          </ul>
        </Card>
      </Link>
    </Col>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
