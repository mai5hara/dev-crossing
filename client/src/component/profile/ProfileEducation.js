/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { profileEducation } from './ProfileEducation.style';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <ul css={profileEducation}>
      <li>
        <p>School Name</p>
        <p>{school}</p>
      </li>
      <li>
        <p>Date</p>
        <p>
          <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
          {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
        </p>
      </li>
      <li>
        <p>Degree</p>
        <p>{degree}</p>
      </li>
      <li>
        <p>Field of study</p>
        <p>{fieldofstudy}</p>
      </li>
      <li>
        <p>Description</p>
        <p>{description}</p>
      </li>
    </ul>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
