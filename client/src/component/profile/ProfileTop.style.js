import { css } from '@emotion/react';

export const profileTop = (dashboard) =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: dashboard && '0 24px',
    '@media(max-width: 767px)': {
      flexDirection: 'column',
    },
  });

export const editIcon = css({
  marginLeft: '7px',
});

export const editLink = css({
  display: 'flex',
  marginBottom: '1rem',
  justifyContent: 'flex-end',
  '@media(max-width: 767px)': {
    order: '1',
    margin: '0.5rem 0 0 0',
  },
});

export const profileTopLeft = css({
  display: 'flex',
  '@media(max-width: 767px)': {
    margin: '0 auto',
    flexDirection: 'column',
    textAlign: 'center',
  },
});

export const profileImg = css({
  width: '150px',
  height: '150px',
  marginRight: '50px',
  '& img': {
    borderRadius: '50%',
    objectFit: 'cover',
  },
  '@media(max-width: 767px)': {
    margin: '0 auto',
  },
});

export const profileDetail = css({
  marginTop: '1.5rem',
  '& h1': {
    fontSize: '1.8rem',
    marginBottom: '10px',
    lineHeight: 1,
  },
});

export const companyName = css({
  '& span': {
    fontWeight: 'bold',
  },
});

export const locationName = css({
  '& span': {
    marginLeft: '8px',
  },
});

export const iconsWrap = css({
  display: 'flex',
  justifyContent: 'flex-end',
  '& a': {
    marginRight: '10px',
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  '@media(max-width: 767px)': {
    justifyContent: 'center',
    '& a': {
      marginRight: '15px',
    },
  },
});

export const profileTopRight = css({
  marginTop: '1.5rem',
  '@media(max-width: 767px)': {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
  },
});

export const icon = css({
  fontSize: '1.6rem',
});
