import { css } from '@emotion/react';

export const mypageItem = css({
  marginBottom: '50px',
});

export const profileContainer = css({
  marginTop: '65px',
  paddingBottom: '50px',
});

export const profileDetail = css({
  backgroundColor: '#eeeeee',
});

export const profileDetailContainer = css({
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '4rem 0',
  '@media(max-width: 1100px)': {
    margin: '0 30px',
  },
  '@media(max-width: 767px)': {
    padding: '2.5rem 0',
    margin: '0 15px',
  },
});

export const profileAbout = (page) =>
  css({
    maxWidth: '1100px',
    margin: '0 auto',
    '@media(max-width: 1100px)': {
      margin: page === 'mypage' ? '0' : '0 30px',
    },
    '@media(max-width: 767px)': {
      margin: page === 'mypage' ? '0' : '0 15px',
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
