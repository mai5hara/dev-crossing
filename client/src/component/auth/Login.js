/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// import React from 'react';
import { Button } from 'antd';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/apiCalls/auth';
import { authSelector } from '../../store/features/authSlice';
import { authWrap, inputWrap, description, btnWrap } from './auth.style';
import { btnStyle } from '../ui/Button.style';
import { errorMessage, inputStyle } from '../profile-form/profile-form.style';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authSelector);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().min(6).required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(login(data.email, data.password));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/mypage" />;
  }

  return (
    <div css={authWrap}>
      <h1>Login</h1>
      <p css={description}>
        <i className="fas fa-user"></i> Login with Your Account
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={inputWrap}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            css={inputStyle}
          />
          {errors['email'] && (
            <p css={errorMessage}>{errors['email']?.message}</p>
          )}
        </div>
        <div css={inputWrap}>
          <label>Password</label>
          <input
            type="password"
            minLength="6"
            id="password"
            {...register('password')}
            css={inputStyle}
          />
          {errors['password'] && (
            <p css={errorMessage}>{errors['password']?.message}</p>
          )}
        </div>
        <div css={btnWrap}>
          <Button
            htmlType="submit"
            css={btnStyle('primary')}
          >
            Login
          </Button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
