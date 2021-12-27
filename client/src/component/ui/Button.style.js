import { css } from '@emotion/react';

export const btnWrap = css({
  display: 'flex',
  justifyContent: 'center',
  margin: '50px auto 0 auto',
  '@media(max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const btnStyle = (color) =>
  css({
    minWidth: '180px',
    background:
      color === 'primary'
        ? 'var(--secondary-color)'
        : color === 'secondary'
        ? '#ffffff'
        : '#909090',
    borderColor:
      color === 'primary'
        ? '#ffffff'
        : color === 'secondary'
        ? 'var(--secondary-color)'
        : '#909090',
    color:
      color === 'primary'
        ? '#fff'
        : color === 'secondary'
        ? 'var(--secondary-color)'
        : '#ffffff',
    '&: hover': {
      background:
        color === 'primary'
          ? 'var(--secondary-color)'
          : color === 'secondary'
          ? '#ffffff'
          : '#909090',
      borderColor:
        color === 'primary'
          ? '#ffffff'
          : color === 'secondary'
          ? 'var(--secondary-color)'
          : '#909090',
      color:
        color === 'primary'
          ? '#fff'
          : color === 'secondary'
          ? 'var(--secondary-color)'
          : '#ffffff',
      opacity: '0.8',
    },
    '&: focus': {
      background:
        color === 'primary'
          ? '#ffffff'
          : color === 'secondary'
          ? 'var(--secondary-color)'
          : '#909090',
      borderColor:
        color === 'primary'
          ? '#ffffff'
          : color === 'secondary'
          ? 'var(--secondary-color)'
          : '#909090',
      color:
        color === 'primary'
          ? '#fff'
          : color === 'secondary'
          ? 'var(--secondary-color)'
          : '#ffffff',
    },
    '@media(max-width: 767px)': {
      width: '100%',
    },
  });