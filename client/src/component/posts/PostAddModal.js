/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/apiCalls/post';
import { categoryText, buttonWrap } from './PostAddModal.style';
import { btnStyle } from '../ui/Button.style';
import {
  textareaStyle,
  errorMessage,
  selectBox,
} from '../profile-form/profile-form.style';

const PostModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  setIsModalVisible,
  postError
}) => {
  const validationSchema = Yup.object().shape({
    text: Yup.string().required('Type somethig'),
  });
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const notify = (message) => {
    toast.error(message, {
      theme: 'colored',
      position: 'top-center',
    })
  }

  if(postError) {
    notify(postError?.msg);
  }

  const onSubmit = (data) => {
    dispatch(addPost(data));
    setIsModalVisible(false);
  };


  return (
    <Modal
      title="Say Something..."
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="Create a post"
            css={textareaStyle}
            id="text"
            {...register('text')}
          />
          {errors['text'] && (
            <p css={errorMessage}>{errors['text']?.message}</p>
          )}
          <p css={categoryText}>Category</p>
          <select id="category" css={selectBox} {...register('category')}>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="design">Design</option>
            <option value="other">Other</option>
          </select>
          <div css={buttonWrap}>
            <Button htmlType="submit" css={btnStyle('primary')}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PostModal;
