import { css } from '@emotion/react';

export const profileContainer = css({
  marginTop: '58px',
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

export const profileAbout = css({
  maxWidth: '1100px',
  margin: '0 auto',
  '@media(max-width: 1100px)': {
    margin: '0 30px',
  },
  '@media(max-width: 767px)': {
    margin: '0 15px',
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
