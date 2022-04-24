/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Switch, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSelector } from '../../store/features/profileSlice'
import { createProfile } from '../../store/apiCalls/profile';
import {
  editProfile,
  inputItem,
  inputDescription,
  labelWrap,
  inputArea,
  inputLabel,
  inputStyle,
  textareaStyle,
  errorMessage,
  selectBox,
  required,
  title,
  inputLabelSns,
  btnLink,
} from './profile-form.style';
import { btnWrap, btnStyle } from '../ui/Button.style';

const CreateProfile = ({ history }) => {
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector(profileSelector);

  const validationSchema = Yup.object().shape({
    skills: Yup.string().required('Type your skills'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const notify = (message) =>
  toast.error(message, {
    theme: 'colored',
    position: 'top-center',
  })

  const onSubmit = async (data) => {
    await dispatch(createProfile(data, history, true));
    if(error) {
      notify(error?.msg);
    }
    history.push('/mypage');
  };

  return (
    <div css={editProfile}>
      <h1 css={title}>Create Your Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label>Career</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <select id="status" {...register('status')} css={selectBox}>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <p css={inputDescription}>
              Give us an idea of where you are at in your career
            </p>
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Company</label>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="company"
              {...register('company')}
            />
            <p css={inputDescription}>
              Could be your own company or one you work for
            </p>
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Website</label>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="Website"
              {...register('Website')}
            />
            <p css={inputDescription}>Could be your own or a company website</p>
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Location</label>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="location"
              {...register('location')}
            />
            <p css={inputDescription}>
              City & state suggested (eg. Boston, MA)
            </p>
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label>Skills</label>
            <div css={required}>Required</div>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="skills"
              {...register('skills')}
            />
            <p css={inputDescription}>
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </p>
            {errors['skills'] && (
              <p css={errorMessage}>{errors['skills']?.message}</p>
            )}
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Github Username</label>
          </div>
          <div css={inputArea}>
            <input
              css={inputStyle}
              type="text"
              id="githubusername"
              {...register('githubusername')}
            />
            <p css={inputDescription}>
              If you want your latest repos and a Github link, include your
              username
            </p>
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Bio</label>
          </div>
          <div css={inputArea}>
            <textarea
              css={textareaStyle}
              id="bio"
              {...register('bio')}
            ></textarea>
            <p css={inputDescription}>Tell us a little about yourself</p>
          </div>
        </div>
        <div css={inputItem}>
          <div css={labelWrap}>
            <label css={inputLabel}>Add Social Network Links</label>
          </div>
          <div css={inputArea}>
            <Switch onChange={() => toggleSocialInputs(!displaySocialInputs)} />
          </div>
        </div>
        {displaySocialInputs && (
          <>
            <div css={inputItem}>
              <label css={inputLabelSns}>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
                Twitter URL
              </label>
              <div css={inputArea}>
                <input
                  css={inputStyle}
                  type="text"
                  id="twitter"
                  {...register('twitter')}
                />
              </div>
            </div>
            <div css={inputItem}>
              <label css={inputLabelSns}>
                <span>
                  <i className="fab fa-facebook"></i>
                </span>
                Facebook URL
              </label>
              <div css={inputArea}>
                <input
                  css={inputStyle}
                  type="text"
                  id="facebook"
                  {...register('facebook')}
                />
              </div>
            </div>
            <div css={inputItem}>
              <label css={inputLabelSns}>
                <span>
                  <i className="fab fa-youtube"></i>
                </span>
                YouTube URL
              </label>
              <div css={inputArea}>
                <input
                  css={inputStyle}
                  type="text"
                  id="youtube"
                  {...register('youtube')}
                />
              </div>
            </div>
            <div css={inputItem}>
              <label css={inputLabelSns}>
                <span>
                  <i className="fab fa-linkedin"></i>
                </span>
                Linkedin URL
              </label>
              <div css={inputArea}>
                <input
                  css={inputStyle}
                  type="text"
                  id="linkedin"
                  {...register('linkedin')}
                />
              </div>
            </div>
            <div css={inputItem}>
              <label css={inputLabelSns}>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
                Instagram URL
              </label>
              <div css={inputArea}>
                <input
                  css={inputStyle}
                  type="text"
                  id="instagram"
                  {...register('instagram')}
                />
              </div>
            </div>
          </>
        )}
        <div css={btnWrap}>
          <Button css={btnStyle('primary')} htmlType="submit">
            Submit
          </Button>
          <Link to="/mypage" css={btnLink}>
            <Button css={btnStyle('secondary')}>Go Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
