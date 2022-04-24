/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSelector } from '../../store/features/profileSlice'
import { addExperience } from '../../store/apiCalls/profile';
import {
  editProfile,
  inputItem,
  labelWrap,
  inputArea,
  inputLabel,
  inputStyle,
  textareaStyle,
  errorMessage,
  required,
  title,
  btnLink,
  inputStyleDate,
  checkboxWrap,
  checkboxArea,
} from './profile-form.style';
import { btnWrap, btnStyle } from '../ui/Button.style';

const AddExperience = ({ history }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Type your Job Title'),
    company: Yup.string().required('Type your own company or one you work'),
    location: Yup.string().required('Type city or state'),
    from: Yup.string().required('Type from date'),
  });
  const dispatch = useDispatch();
  const [toDateDisabled, toggleDisabled] = useState(false);
  const { error } = useSelector(profileSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const notify = (message) =>
  toast.error(message, {
    theme: 'colored',
    position: 'top-center',
  })

  const onSubmit = async (data) => {
    await dispatch(addExperience(data, history));
    if(error) {
      notify(error?.msg);
    }
  };

  return (
    <div css={editProfile}>
      <h1 css={title}>Add An Experience</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Job Title</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="title"
              {...register('title')}
            />
            {errors['title'] && (
              <p css={errorMessage}>{errors['title']?.message}</p>
            )}
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Company</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="company"
              {...register('company')}
            />
            {errors['company'] && (
              <p css={errorMessage}>{errors['company']?.message}</p>
            )}
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Location</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="location"
              {...register('location')}
            />
            {errors['location'] && (
              <p css={errorMessage}>{errors['location']?.message}</p>
            )}
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>From Date</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <div css={checkboxArea}>
              <input
                css={inputStyleDate}
                type="date"
                id="from"
                {...register('from')}
              />
              <div css={checkboxWrap}>
                <input
                  type="checkbox"
                  id="current"
                  {...register('current')}
                  onChange={(e) => {
                    toggleDisabled(!toDateDisabled);
                  }}
                />{' '}
                <span>Current Job</span>
              </div>
            </div>
            {errors['from'] && (
              <p css={errorMessage}>{errors['from']?.message}</p>
            )}
          </div>
        </div>

        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>To Date</label>
          </div>
          <div css={inputArea}>
            <input
              type="date"
              css={inputStyleDate}
              id="to"
              {...register('to')}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Job Description</label>
          </div>
          <div css={inputArea}>
            <textarea
              css={textareaStyle}
              id="description"
              {...register('description')}
            ></textarea>
          </div>
        </div>
        <div css={btnWrap}>
          <Button css={btnStyle('primary')} htmlType="submit">
            Submit
          </Button>
          <Link css={btnLink} to="/mypage">
            <Button css={btnStyle('secondary')}>Go Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddExperience;
