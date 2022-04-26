/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authSelector } from '../../store/features/authSlice';
import Moment from 'react-moment';
import { deleteComment } from '../../store/apiCalls/post';
import {
  commentItem,
  profileLink,
  imgWrap,
  textWrap,
  profileWrap,
  commentTime,
  commentDelete
} from './post.style';
import { btn, btnDelete } from '../ui/Button.style';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  error
}) => {
  const auth = useSelector(authSelector)
  const dispatch = useDispatch();

  const notify = (message) => {
    toast.error(message, {
      theme: 'colored',
      position: 'top-center',
      toastId: 'commonItem'
    })
  }

  if(error) {
    notify(error?.msg);
  }

  return (
    <div css={commentItem}>
      <div css={profileWrap}>
        <div css={profileLink}>
          <div css={imgWrap}>
            <img src={avatar} alt="" />
          </div>
          <div>
            <Link to={`/profile/${user}`}>
              <h4>{name}</h4>
            </Link>
            <p css={commentTime}>
              <Moment fromNow>{date}</Moment>
            </p>
          </div>
        </div>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => dispatch(deleteComment(postId, _id))}
            type="button"
            css={[btn, btnDelete, commentDelete]}
          >
            <i className="fas fa-trash"></i>
            <span>Delete</span>
          </button>
        )}
      </div>
      <p css={textWrap}>{text}</p>
    </div>
  );
};

export default CommentItem;
