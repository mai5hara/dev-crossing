/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../../store/apiCalls/profile';
import { table, titleWrap, mypageItem } from './Mypage.style';
import { btnStyle, btn, btnDelete } from '../ui/Button.style';

const Experience = ({ experience }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => dispatch(deleteExperience(exp._id))}
          css={[btn, btnDelete]}
        >
          <i className="fas fa-trash"></i>
          <span>Delete</span>
        </button>
      </td>
    </tr>
  ));

  return (
    <div css={mypageItem}>
      <div css={titleWrap}>
        <h2>Experience Credentials</h2>
        <Button
          icon={<PlusOutlined />}
          css={btnStyle('primary')}
          onClick={() => history.push('/add-experience')}
        >
          Add Experience
        </Button>
      </div>
      <table css={table}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

export default Experience;
