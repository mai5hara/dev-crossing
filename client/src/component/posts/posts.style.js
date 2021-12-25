import { css } from '@emotion/react';

export const postsWrap = css({
  marginBottom: '80px',
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
