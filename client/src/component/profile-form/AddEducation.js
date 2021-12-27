/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Fragment, useState } from 'react';
import { Button } from 'antd';
import { Link, withRouter, Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addEducation } from '../../actions/profile';
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

const AddEducation = ({ addEducation, history }) => {
  const validationSchema = Yup.object().shape({
    school: Yup.string().required('Type school'),
    degree: Yup.string().required('Type your degree'),
    fieldofstudy: Yup.string().required('Type your field of study'),
    from: Yup.string().required('Type from date'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const onSubmit = (data) => {
    addEducation(data, history);
  };

  return (
    <div css={editProfile}>
      <h1 css={title}>Add Your Education</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>School</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="school"
              {...register('school')}
            />
            {errors['school'] && (
              <p css={errorMessage}>{errors['school']?.message}</p>
            )}
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Degree</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="degree"
              {...register('degree')}
            />
            {errors['degree'] && (
              <p css={errorMessage}>{errors['degree']?.message}</p>
            )}
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Field of study</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="fieldofstudy"
              {...register('fieldofstudy')}
            />
            {errors['fieldofstudy'] && (
              <p css={errorMessage}>{errors['fieldofstudy']?.message}</p>
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
                <span>Current School</span>
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
              css={inputStyleDate}
              type="date"
              id="to"
              {...register('to')}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Program Description</label>
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
          <Link css={btnLink} to="/dashboard">
            <Button css={btnStyle('secondary')}>Go Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
