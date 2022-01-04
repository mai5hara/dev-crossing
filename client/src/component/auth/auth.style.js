import { css } from '@emotion/react';

export const authWrap = css({
  maxWidth: '400px',
  margin: '100px auto 50px auto',
  '@media(max-width: 767px)': {
    padding: '0 15px',
  },
});

export const inputWrap = css({
  margin: '15px 0',
  '& label': {
    marginBottom: '5px',
    display: 'inline-block',
  },
});

export const description = css({
  margin: '20px 0 30px 0',
});

export const btnWrap = css({
  margin: '30px 0 10px 0',
});
