/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  profileTop,
  profileImg,
  profileDetail,
  companyName,
  locationName,
  profileTopLeft,
  profileTopRight,
  icon,
  editIcon,
  editLink,
  iconsWrap,
} from './ProfileTop.style';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar, _id },
  },
  auth,
}) => {
  const urlToRender = (link) => {
    if (!link.match(/^[a-zA-Z]+:\/\//)) {
      return '//' + link;
    }
    return link;
  };

  return (
    <div css={profileTop}>
      <div css={profileTopLeft}>
        <div css={profileImg}>
          <img src={avatar} alt="" />
        </div>
        <div css={profileDetail}>
          <h1>{name}</h1>
          <p css={companyName}>
            {status} at{company && <span> {company}</span>}
          </p>
          <p css={locationName}>
            <i class="fas fa-map-marker-alt"></i>
            {location && <span>{location}</span>}
          </p>
        </div>
      </div>
      <div css={profileTopRight}>
        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user._id === _id && (
            <Link to="/edit-profile" css={editLink}>
              <Button type="primary" shape="round">
                <i class="fas fa-edit"></i>
                <span css={editIcon}>Edit Profile</span>
              </Button>
            </Link>
          )}
        <div css={iconsWrap}>
          {website && (
            <a
              href={urlToRender(website)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i css={icon} className="fas fa-globe"></i>
            </a>
          )}
          {social && social.twitter && (
            <a
              href={urlToRender(social.twitter)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i css={icon} className="fab fa-twitter"></i>
            </a>
          )}
          {social && social.facebook && (
            <a
              href={urlToRender(social.facebook)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i css={icon} className="fab fa-facebook"></i>
            </a>
          )}
          {social && social.linkedin && (
            <a
              href={urlToRender(social.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i css={icon} className="fab fa-linkedin"></i>
            </a>
          )}
          {social && social.youtube && (
            <a
              href={urlToRender(social.youtube)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i css={icon} className="fab fa-youtube"></i>
            </a>
          )}
          {social && social.instagram && (
            <a
              href={urlToRender(social.instagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i css={icon} className="fab fa-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default ProfileTop;
