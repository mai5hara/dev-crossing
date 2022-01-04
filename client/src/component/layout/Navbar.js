/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
} from './Navbar.style';

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
        css={location.pathname === '/profiles' ? selectedBar : ''}
      >
        <Link to="/profiles">Developers</Link>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/posts' ? selectedBar : ''}
      >
        <Link to="/posts">Posts</Link>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/mypage' ? selectedBar : ''}
      >
        <Link to="/mypage">
          <i className="fas fa-user"></i> <span>Mypage</span>
        </Link>
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
        css={location.pathname === '/profiles' ? selectedBar : ''}
      >
        <Link to="/profiles">Developers</Link>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/register' ? selectedBar : ''}
      >
        <Link to="/register">Register</Link>
      </li>
      <li
        onClick={handleToggle}
        css={location.pathname === '/login' ? selectedBar : ''}
      >
        <Link to="/login">Sign In</Link>
      </li>
    </ul>
  );

  return (
    <nav css={navbarWrap}>
      <div css={isSidebarOpen ? navbarOpen : navbar}>
        <h1>
          <Link to="/profiles">
            {/* <i className="fas fa-code"></i>  */}
            DevConnector
          </Link>
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
