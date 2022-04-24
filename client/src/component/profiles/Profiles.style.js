import { css } from '@emotion/react';

export const profilesContentWrap = css({
  maxWidth: '1100px',
  margin: '0 auto',
  minHeight: '100vh',
  boxSizing: 'border-box'
});

export const profilesContent = css({
  padding: '13rem 15px',
  '@media(max-width: 1100px)': {
    padding: '13rem 30px',
  },
  '@media(max-width: 767px)': {
    padding: '13rem 15px',
  },
})

export const message = css({
  margin: '20px 0 30px 0',
});
