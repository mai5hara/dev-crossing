/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Input, Select } from 'antd';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { btnSubmit, categoryText } from './PostAddModal.style';

const PostModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  addPost,
  setIsModalVisible,
}) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const { TextArea } = Input;
  const { Option } = Select;

  console.log(text, category);

  return (
    <Modal
      title="Say Something..."
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ text, category });
            setText('');
            setCategory('');
            setIsModalVisible(false);
          }}
        >
          <TextArea
            rows={5}
            value={text}
            placeholder="Create a post"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <p css={categoryText}>Category</p>
          <Select
            defaultValue=""
            style={{ width: 200 }}
            onChange={(e) => setCategory(e)}
          >
            <Option value="">Select category</Option>
            <Option value="front-end">Front-end</Option>
            <Option value="back-end">Back-end</Option>
            <Option value="design">Design</Option>
            <Option value="other">Other</Option>
          </Select>
          <input type="submit" css={btnSubmit} value="Submit" />
        </form>
      </div>
    </Modal>
  );
};

PostModal.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostModal);
