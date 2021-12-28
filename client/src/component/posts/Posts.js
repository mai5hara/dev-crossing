/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { Row, Button, Tabs } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostModal from './PostAddModal';
import { getPosts } from '../../actions/post';
import { PlusOutlined } from '@ant-design/icons';
import { postWrap, tabWrap, postsWrap, message } from './posts.style';
import { btnStyle } from '../ui/Button.style';

const categoryList = ['all posts', 'front-end', 'back-end', 'design', 'other'];

const Posts = ({ getPosts, post: { posts, loading } }) => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TabPane } = Tabs;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleChange = (newFilter) => {
    setCurrentFilter(newFilter);
    console.log(newFilter);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const filterPosts = posts
    ? posts.filter((post) => {
        switch (currentFilter) {
          case 'all posts':
            return true;
          case 'front-end':
          case 'back-end':
          case 'design':
          case 'other':
            return post.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <div css={postsWrap}>
      <h1 className="large text-primary">Posts</h1>
      <p css={message}>
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <Button
        css={btnStyle('primary')}
        shape="round"
        icon={<PlusOutlined />}
        onClick={showModal}
      >
        Add Post
      </Button>
      <PostModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setIsModalVisible={setIsModalVisible}
      />
      <div css={tabWrap}>
        <Tabs defaultActiveKey="1" centered onChange={handleChange}>
          {categoryList.map((f) => (
            <TabPane tab={f} key={f}>
              {f}
            </TabPane>
          ))}
        </Tabs>
      </div>
      <Row gutter={[16, 16]} css={postWrap}>
        {filterPosts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </Row>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
