/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postSelector } from '../../store/features/postSlice';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { getPost } from '../../store/apiCalls/post';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { postWrap, btnWrap, commentWrap } from './post.style';

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector(postSelector)

  const notify = (message) => {
    toast.error(message, {
      theme: 'colored',
      position: 'top-center',
    })
  }

  if(error) {
    notify(error?.msg);
  }

  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <div css={postWrap}>
        <Link to="/posts" css={btnWrap}>
          <i className="fas fa-arrow-left"></i>
          <span>Back to Posts</span>
        </Link>
        <PostItem post={post} showActions={false} />
        <div css={post.comments.length === 0 ? '' : commentWrap}>
          {post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </div>
      </div>
      <CommentForm postId={post._id} error={error}/>
    </>
  );
};

export default Post;
