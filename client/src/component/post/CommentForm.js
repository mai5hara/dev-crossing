/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { Button } from 'antd';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import { btnStyle } from '../ui/Button.style';
import { commentFormWrap, commentTextArea, commentContent } from './post.style';
import {
  textareaStyle,
  errorMessage,
} from '../profile-form/profile-form.style';

const CommentForm = ({ postId, addComment }) => {
  const validationSchema = Yup.object().shape({
    text: Yup.string().required('Type some comments'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    addComment(postId, data);
  };

  return (
    <div css={commentFormWrap}>
      <div css={commentContent}>
        <h3>Leave a Comment</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            id="text"
            {...register('text')}
            css={[textareaStyle, commentTextArea]}
          ></textarea>
          {errors['text'] && (
            <p css={errorMessage}>{errors['text']?.message}</p>
          )}
          <Button css={btnStyle('primary')} htmlType="submit">
            Send comment
          </Button>
        </form>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
