/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
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

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

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
        <i class="fas fa-code"></i> <span>Developers</span>
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
        <a onClick={logout} href="#!">
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

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
