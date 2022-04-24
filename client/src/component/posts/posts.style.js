import { css } from '@emotion/react';

export const postsWrap = css({
  maxWidth: '1100px',
  margin: '0 auto',
  boxSizing: 'border-box',
  minHeight: '100vh',
  padding: '13rem 15px',
  '@media(max-width: 1100px)': {
    padding: '13rem 30px',  },
  '@media(max-width: 767px)': {
    padding: '13rem 15px',  },
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

export const noItemMsg = css({
  marginLeft: '8px',
});

export const tabPane = css({
  fontSize: '1.6rem'
})