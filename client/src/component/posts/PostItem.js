/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Col, Badge, Card } from 'antd';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../store/features/authSlice';
import { addLike, removeLike, deletePost } from '../../store/apiCalls/post';
import {
  postCard,
  profileImg,
  profileWrap,
  profileName,
  postFooter,
  postFooterLeft,
  answerIcon,
  answerNum,
  btn,
  btnDelete,
  btnThumbs,
  isLikedIcon,
  badgeColor,
  profileImgWrap,
  profileText,
} from './PostItem.style';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date, category },
  postError,
  showActions,
}) => {
  const [isLiked, setIsLikes] = useState(false);
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  const handleLike = () => {
    const userLiked = likes.filter((like) => {
      return like.user === auth.user._id;
    });
    if (userLiked.length !== 0) {
      dispatch(removeLike(_id));
      setIsLikes(false);
    } else {
      setIsLikes(true);
      dispatch(addLike(_id));
    }
  };
  
  const notify = (message) => {
    toast.error(message, {
      theme: 'colored',
      position: 'top-center',
      toastId: 'postItem'
    })
  }

  if (auth.error) {
    notify(auth.error?.msg);
  }

  if(postError) {
    notify(postError?.msg);
  }

  useEffect(() => {
    if (!auth.loading) {
      const userLiked = likes.filter((like) => {
        return like.user === auth.user._id;
      });
      if (userLiked.length !== 0) {
        setIsLikes(true);
      }
    }
  }, [auth, likes]);

  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <Badge.Ribbon text={category} css={badgeColor(category)}>
        <Card css={postCard}>
          <div css={profileWrap}>
            <div css={profileImgWrap}>
              <div css={profileImg}>
                <img src={avatar} alt="" />
              </div>
              <div css={profileName}>
                <Link to={`/profile/${user}`}>
                  <h4>{name}</h4>
                </Link>
                <p>
                  <Moment fromNow>{date}</Moment>
                </p>
              </div>
            </div>
            <p css={profileText}>{text}</p>
          </div>
          <div>
            {showActions && (
              <>
                <div css={postFooter}>
                  <div css={postFooterLeft}>
                    <Link to={`/posts/${_id}`}>
                      <i
                        className="fas fa-reply"
                        css={answerIcon}
                        alt="answer"
                      ></i>
                      {comments.length > 0 && (
                        <span css={answerNum}>{comments.length}</span>
                      )}
                      <span>answer</span>
                    </Link>
                    <button
                      onClick={(e) => handleLike()}
                      type="button"
                      css={[btn, btnThumbs]}
                    >
                      <i
                        className="fas fa-thumbs-up"
                        css={isLiked && isLikedIcon}
                      ></i>{' '}
                      <span>
                        {likes.length > 0 && <span>{likes.length}</span>}
                      </span>
                    </button>
                  </div>
                  {!auth.loading && user === auth.user._id && (
                    <button
                      onClick={(e) => dispatch(deletePost(_id))}
                      type="button"
                      css={[btn, btnDelete]}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </Card>
      </Badge.Ribbon>
    </Col>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

export default PostItem;
