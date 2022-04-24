import { css } from '@emotion/react';

export const mypageItem = css({
  marginBottom: '50px',
});

export const profileContainer = css({
  padding: '67px 0 50px 0',
  minHeight: '100vh',
  '@media(max-width: 767px)': {
    padding: '52px 0 50px 0',
  }
});

export const noProfile = css({
  marginTop: '50px',
  '@media(max-width: 767px)': {
    marginTop: '30px',
  }
})

export const profileDetail = css({
  backgroundColor: '#eeeeee',
});

export const profileDetailContainer = css({
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '4rem 15px',
  boxSizing: 'border-box',
  '@media(max-width: 1100px)': {
    padding: '4rem 30px',
  },
  '@media(max-width: 767px)': {
    padding: '2.5rem 15px',
  },
});

export const profileAbout = (page) =>
  css({
    maxWidth: '1100px',
    margin: '0 auto',
    padding: page === 'mypage' ? '0' : '0 15px',
    boxSizing: 'border-box',
    '@media(max-width: 1100px)': {
      padding: page === 'mypage' ? '0' : '0 30px',
    },
    '@media(max-width: 767px)': {
      padding: page === 'mypage' ? '0' : '0 15px',
    },
  });

export const profileExpEdu = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  '@media(max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const profileExpEduItem = css({
  width: '49%',
  '& h2': {
    fontWeight: 600,
    fontSize: '1.7rem',
    marginBottom: '15px',
  },
  '@media(max-width: 767px)': {
    width: '100%',
    '&:first-of-type': {
      marginBottom: '20px',
    },
  },
});

export const profileGithub = css({
  marginTop: '20px'
})