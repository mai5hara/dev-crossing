/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// import React from 'react';
import { Button } from 'antd';
import * as Yup from 'yup';
import { alert } from '../layout/Alert';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { authWrap, inputWrap, description, btnWrap } from './auth.style';
import { btnStyle } from '../ui/Button.style';
import { errorMessage, inputStyle } from '../profile-form/profile-form.style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ login, isAuthenticated, alerts }) => {
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
    login(data.email, data.password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/mypage" />;
  }

  const notify = (msg) =>
    toast.error(msg, {
      theme: 'colored',
      position: 'top-center',
    });

  const alert = (alerts) => {
    console.log(alerts);
    if (alerts !== null && alerts.length > 0) {
      alerts.map((alert) => {
        return notify(alert.msg, alert.id);
      });
    }
  };

  return (
    <div css={authWrap}>
      <ToastContainer limit={1} />
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
            onClick={alert(alerts)}
          >
            Login
          </Button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alert,
});

export default connect(mapStateToProps, { login })(Login);
