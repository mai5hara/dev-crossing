import { css } from '@emotion/react';

export const cardWrap = css({
  minHeight: '100%'
})

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

export const badge = css({
  border: '1px solid var(--secondary-color)',
  borderRadius: '50px',
  display: 'inline-block',
  padding: '2px 8px',
  fontSize: '1.2rem',
  margin: '0 8px 8px 0',
  color: 'var(--secondary-color)',
  '& span': {
    marginLeft: '5px',
  },
});
