import { css } from '@emotion/react';

export const bioWrap = css({
  '& h2': {
    fontWeight: 600,
    fontSize: '1.7rem',
    marginBottom: '15px',
  },
});

export const profileAbout = css({
  marginTop: '50px',
});

export const profileAboutItem = css({
  marginTop: '20px',
});

export const skillsWrap = css({
  '& h2': {
    fontWeight: 600,
    fontSize: '1.7rem',
    marginBottom: '15px',
  },
  '& button': {
    margin: '0 15px 7px 0',
    '& span': {
      marginRight: '8px',
    },
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
