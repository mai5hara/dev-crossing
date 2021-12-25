/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { Col, Badge, Card } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
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
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date, category },
  showActions,
}) => {
  const [isLiked, setIsLikes] = useState(false);

  const handleLike = () => {
    const userLiked = likes.filter((like) => {
      return like.user === auth.user._id;
    });
    if (userLiked.length !== 0) {
      removeLike(_id);
      setIsLikes(false);
    } else {
      setIsLikes(true);
      addLike(_id);
    }
  };

  useEffect(() => {
    if (!auth.loading) {
      const userLiked = likes.filter((like) => {
        return like.user === auth.user._id;
      });
      if (userLiked.length !== 0) {
        setIsLikes(true);
      }
    }
  }, [auth.loading, likes]);

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
                      onClick={(e) => deletePost(_id)}
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

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
