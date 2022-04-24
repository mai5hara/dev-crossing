/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from 'antd';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/apiCalls/post';
import { btnStyle } from '../ui/Button.style';
import { commentFormWrap, commentTextArea, commentContent } from './post.style';
import {
  textareaStyle,
  errorMessage,
} from '../profile-form/profile-form.style';

const CommentForm = ({ postId, error }) => {
  const validationSchema = Yup.object().shape({
    text: Yup.string().required('Type some comments'),
  });
  const dispatch = useDispatch();

  const notify = (message) => {
    toast.error(message, {
      theme: 'colored',
      position: 'top-center',
    })
  }

  if(error) {
    notify(error?.msg);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(addComment(postId, data));
    reset();
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

export default CommentForm;
