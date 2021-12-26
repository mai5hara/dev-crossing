/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Moment from 'react-moment';
import { profileEducation } from './ProfileEducation.style';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <ul css={profileEducation}>
      <li>
        <p>Company Name</p>
        <p>{company}</p>
      </li>
      <li>
        <p>Date</p>
        <p>
          <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
          {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
        </p>
      </li>
      <li>
        <p>Position</p>
        <p>{title}</p>
      </li>
      <li>
        <p>Location</p>
        <p>{location}</p>
      </li>
      <li>
        <p>Description</p>
        <p>{description}</p>
      </li>
    </ul>
  );
};

export default ProfileExperience;
