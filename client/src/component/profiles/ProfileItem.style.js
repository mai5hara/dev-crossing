import { css } from '@emotion/react';

export const profileImg = css({
  width: '50%',
  borderRadius: '50%',
});

export const profileImgWrap = css({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
});

export const skillsWrap = css({
  '& button': {
    margin: '0 7px 7px 0',
    '& span': {
      marginRight: '8px',
    },
  },
});

export const companyName = css({ margin: '8px 0' });

export const locationName = css({
  marginBottom: '15px',
  '& span': {
    marginRight: '6px',
  },
});
