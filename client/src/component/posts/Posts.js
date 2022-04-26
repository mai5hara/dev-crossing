/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Row, Button, Tabs } from 'antd';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { postSelector } from '../../store/features/postSlice';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostModal from './PostAddModal';
import { getPosts, handleTabs } from '../../store/apiCalls/post';
import { PlusOutlined } from '@ant-design/icons';
import {
  postWrap,
  tabWrap,
  postsWrap,
  message,
  noItemMsg,
  tabPane
} from './posts.style';
import { btnStyle } from '../ui/Button.style';

const categoryList = ['all posts', 'front-end', 'back-end', 'design', 'other'];

const Posts = () => {
  const [currentFilter, setCurrentFilter] = useState('all posts');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { posts, loading, error, tabKey } = useSelector(postSelector)
  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleChange = (newFilter) => {
    setCurrentFilter(newFilter);
    dispatch(handleTabs(newFilter))
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const notify = (message) =>
  toast.error(message, {
    theme: 'colored',
    position: 'top-center',
    toastId: 'posts'
  })

  if (error) {
    notify(error?.msg);
  }

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
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentFilter(tabKey);
  }, [tabKey]);

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
        postError={error}
      />
      <div css={tabWrap}>
        <Tabs activeKey={tabKey} centered onChange={handleChange}>
          {categoryList.map((f) => (
            <TabPane css={tabPane} tab={f} key={f}>
              {f}
            </TabPane>
          ))}
        </Tabs>
      </div>
      <Row gutter={[16, 16]} css={postWrap}>
        {filterPosts.length === 0 ? (
          <p css={noItemMsg}>No posts yet</p>
        ) : (
          filterPosts.map((post) => <PostItem key={post._id} post={post} postError={error}/>)
        )}
      </Row>
    </div>
  );
};

export default Posts;
