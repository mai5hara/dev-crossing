/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import {
  commentItem,
  profileLink,
  imgWrap,
  textWrap,
  profileWrap,
} from './post.style';
import { btn, btnDelete } from '../ui/Button.style';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
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
            <p>
              <Moment fromNow>{date}</Moment>
            </p>
          </div>
        </div>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => deleteComment(postId, _id)}
            type="button"
            css={[btn, btnDelete]}
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

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
