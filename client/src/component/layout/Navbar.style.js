import { css } from '@emotion/react';

export const navbarWrap = css({
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  top: 0,
  backgroundColor: '#fff',
  height: '70px',
  borderBottom: 'solid 1px var(--border-primary)',
  '@media(max-width: 767px)': {
    height: '56px',
  },
});

export const navbar = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1100px',
  margin: '0 auto',
  '& ul': {
    display: 'flex',
    padding: '1.5rem 0',
  },
  '& li': {
    padding: '1rem 1.5rem',
    position: 'relative',
    '& a': {
      '&:hover': {
        color: 'var(--secondary-color)',
      },
    },
  },
  '& h1': {
    fontSize: '1.5rem',
    display: 'flex',
    height: '70px',
    alignItems: 'center',
    '& a': {
      '&:hover': {
        color: 'var(--secondary-color)',
      },
    },
  },
  '@media(max-width: 1100px)': {
    margin: '0 30px',
  },
  '@media(max-width: 767px)': {
    margin: 0,
    position: 'relative',
    '& h1': {
      lineHeight: '56px',
      marginLeft: '15px',
    },
    '& ul': {
      position: 'absolute',
      flexDirection: 'column',
      top: '56px',
      backgroundColor: '#fff',
      width: '100%',
      height: '100vh',
      left: 0,
      transition: '0.3s',
    },
    '& li': { padding: '18px 15px' },
  },
});

export const selectedBar = css({
  '& a': {
    color: 'var(--secondary-color)',
  },
  '&:before': {
    content: "''",
    position: 'absolute',
    width: 'calc(100% - 2rem)',
    height: '2px',
    bottom: 'calc(-1.5rem - 1px)',
    backgroundColor: 'var(--secondary-color)',
    transition: '0.3s',
  },
  '@media(max-width: 767px)': {
    '&:before': {
      display: 'none',
    },
  },
});

export const navbarOpen = css(navbar, {
  '@media(max-width: 767px)': {
    '& ul': {
      left: '-100%',
      transition: '0.3s',
    },
  },
});

export const hamburgerMenu = css({
  display: 'none',
  '@media(max-width: 767px)': {
    appearance: 'none',
    verticalAlign: 'middle',
    border: 0,
    outline: 0,
    background: 'transparent',
    borderRadius: 0,
    textAlign: 'inherit',
    position: 'fixed',
    top: '18px',
    right: '15px',
    width: ' 28px',
    height: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

export const menuLineOpen = css({
  '@media(max-width: 767px)': {
    width: '100%',
    height: '2px',
    backgroundColor: '#333',
    position: 'relative',
    transition: '0.3s',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#333',
      transition: '0.3s',
      transform: 'translateY(-10px)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#333',
      transition: '0.3s',
      transform: 'translateY(10px)',
    },
  },
});

export const menuLine = css(menuLineOpen, {
  '@media(max-width: 767px)': {
    backgroundColor: 'transparent',
    '&::before': {
      content: '""',
      transition: '0.3s',
      transform: 'rotate(45deg)',
    },
    '&::after': {
      content: '""',
      transition: '0.3s',
      transform: 'rotate(-45deg)',
    },
  },
});

export const logoImg = css({
  width: '220px',
  '@media(max-width: 767px)': {
    width: '190px',
  }
})