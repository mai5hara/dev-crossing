/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  profileImg,
  profileImgWrap,
  skillsWrap,
  companyName,
  locationName,
  badge,
} from './ProfileItem.style';

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
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <Link to={`/profile/${_id}`}>
        <Card hoverable>
          <div css={profileImgWrap}>
            <img css={profileImg} src={avatar} alt="" />
          </div>
          <div>
            <h2>{name}</h2>
            <p css={companyName}>
              {status} {company && <span> at {company}</span>}
            </p>
            <p css={locationName}>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              {location && <span>{location}</span>}
            </p>
          </div>
          <ul css={skillsWrap}>
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} css={badge}>
                <i className="fas fa-check"></i>
                <span>{skill}</span>
              </div>
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
