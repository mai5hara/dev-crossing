import { css } from '@emotion/react';

export const profilesContent = css({
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
