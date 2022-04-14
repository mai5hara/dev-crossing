import { css } from '@emotion/react';

export const profilesContent = css({
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '13rem 50px',
  minHeight: '100vh',
  boxSizing: 'border-box',
  '@media(max-width: 1100px)': {
    padding: '13rem 30px',
  },
  '@media(max-width: 767px)': {
    padding: '13rem 15px',
  },
});

export const message = css({
  margin: '20px 0 30px 0',
});
