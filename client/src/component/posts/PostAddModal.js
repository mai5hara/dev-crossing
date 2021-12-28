/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
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
  addPost,
  setIsModalVisible,
}) => {
  const validationSchema = Yup.object().shape({
    text: Yup.string().required('Type somethig'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    addPost(data);
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

PostModal.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostModal);
