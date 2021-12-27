import { css } from '@emotion/react';

export const postsWrap = css({
  maxWidth: '1100px',
  margin: '100px auto 50px auto',
  paddingBottom: '50px',
  '@media(max-width: 1100px)': {
    margin: '100px 30px 50px 30px',
  },
  '@media(max-width: 767px)': {
    margin: '100px 15px 50px 15px',
  },
});

export const message = css({
  margin: '20px 0 30px 0',
});

export const addButton = css({
  backgroundColor: 'var(--secondary-color)',
  border: '1px solid #fff',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'var(--secondary-color)',
    border: '1px solid #fff',
    color: '#fff',
    opacity: '0.7',
  },
  '&:focus': {
    backgroundColor: 'var(--secondary-color)',
    border: '1px solid #fff',
    color: '#fff',
    opacity: '1',
  },
});

export const postWrap = css({
  marginTop: '15px',
});

export const tabWrap = css({
  marginTop: '20px',
});
