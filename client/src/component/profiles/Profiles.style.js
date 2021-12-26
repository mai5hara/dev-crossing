import { css } from '@emotion/react';

export const profilesContent = css({
  maxWidth: '1100px',
  margin: '90px auto 50px auto',
  '@media(max-width: 1100px)': {
    margin: '0 30px',
  },
  '@media(max-width: 767px)': {
    margin: '0 15px',
  },
});
