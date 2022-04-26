/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../store/features/authSlice';
import { logout } from '../../store/apiCalls/auth';
import {
  navbar,
  navbarWrap,
  hamburgerMenu,
  menuLine,
  menuLineOpen,
  navbarOpen,
  selectedBar,
  logoImg
} from './Navbar.style';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, loading } = useSelector(authSelector);
  const dispatch = useDispatch()

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const authLinks = (
    <ul>
      <li
        onClick={handleToggle}
        css={location.pathname === '/' ? selectedBar : ''}
      >
        <NavLink to="/">
        <i className="fas fa-code"></i> <span>Developers</span>
        </NavLink>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/posts' ? selectedBar : ''}
      >
        <NavLink to="/posts">
          <i className="fas fa-comment-dots"></i> <span>Posts</span>
        </NavLink>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/mypage' ? selectedBar : ''}
      >
        <NavLink to="/mypage">
          <i className="fas fa-user"></i> <span>Mypage</span>
        </NavLink>
      </li>
      <li onClick={handleToggle}>
        <a onClick={() => dispatch(logout())} href="#!">
          <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li
        onClick={handleToggle}
        css={location.pathname === '/' ? selectedBar : ''}
      >
        <NavLink to="/">Developers</NavLink>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/signup' ? selectedBar : ''}
      >
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/login' ? selectedBar : ''}
      >
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );

  return (
    <nav css={navbarWrap}>
      <div css={isSidebarOpen ? navbarOpen : navbar}>
        <h1>
          <NavLink to="/">
            <img src={Logo} alt="Logo" css={logoImg} />
          </NavLink>
        </h1>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        <button onClick={handleToggle} css={hamburgerMenu}>
          <span css={isSidebarOpen ? menuLineOpen : menuLine}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
