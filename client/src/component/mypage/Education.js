/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import { table, titleWrap, mypageItem } from './Mypage.style';
import { btnStyle, btn, btnDelete } from '../ui/Button.style';

const Education = ({ education, deleteEducation }) => {
  const history = useHistory();

  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteEducation(edu._id)} css={[btn, btnDelete]}>
          <i className="fas fa-trash"></i>
          <span>Delete</span>
        </button>
      </td>
    </tr>
  ));

  return (
    <div css={mypageItem}>
      <div css={titleWrap}>
        <h2>Education Credentials</h2>
        <Button
          icon={<PlusOutlined />}
          css={btnStyle('primary')}
          onClick={() => history.push('/add-education')}
        >
          Add Education
        </Button>
      </div>
      <table css={table}>
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
