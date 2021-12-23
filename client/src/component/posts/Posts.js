import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import PostForm from './PostForm';

const categoryList = ['all', 'front-end', 'back-end', 'design', 'other'];

const Posts = ({ getPosts, post: { posts, loading } }) => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleChange = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const filterPosts = posts
    ? posts.filter((post) => {
        switch (currentFilter) {
          case 'all':
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
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <PostForm />
      <ul>
        {categoryList.map((f) => (
          <li key={f} onClick={() => handleChange(f)}>
            {f}
          </li>
        ))}
      </ul>
      <div className="posts">
        {filterPosts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
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
