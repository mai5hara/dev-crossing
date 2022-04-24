/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { accountRegister } from '../../store/apiCalls/auth';
import { authSelector } from '../../store/features/authSlice';
import { authWrap, inputWrap, description, btnWrap } from './auth.style';
import { btnStyle } from '../ui/Button.style';
import { errorMessage, inputStyle } from '../profile-form/profile-form.style';

const Register = () => {
  const { isAuthenticated } = useSelector(authSelector);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().min(6).required('Password is required'),
    password2: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(accountRegister(data));
  };

  if (isAuthenticated) {
    return <Redirect to="/mypage" />;
  }

  return (
    <div css={authWrap}>
      <h1>Sign Up</h1>
      <p css={description}>
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={inputWrap}>
          <label>Name</label>
          <input type="text" css={inputStyle} id="name" {...register('name')} />
          {errors['name'] && (
            <p css={errorMessage}>{errors['name']?.message}</p>
          )}
        </div>
        <div css={inputWrap}>
          <label>Email</label>
          <input
            type="email"
            css={inputStyle}
            id="email"
            {...register('email')}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
          {errors['email'] && (
            <p css={errorMessage}>{errors['email']?.message}</p>
          )}
        </div>
        <div css={inputWrap}>
          <label>Password</label>
          <input
            type="password"
            css={inputStyle}
            id="password"
            {...register('password')}
          />
          {errors['password'] && (
            <p css={errorMessage}>{errors['password']?.message}</p>
          )}
        </div>
        <div css={inputWrap}>
          <label>Confirm Password</label>
          <input
            type="password"
            css={inputStyle}
            id="password2"
            {...register('password2')}
          />
          {errors['password2'] && (
            <p css={errorMessage}>{errors['password2']?.message}</p>
          )}
        </div>
        <div css={btnWrap}>
          <Button htmlType="submit" css={btnStyle('primary')}>
            Sign Up
          </Button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
