import { css } from '@emotion/react';

export const profileGihub = css({
  marginTop: '50px',
  '& h2': {
    fontSize: '1.7rem',
    marginBottom: '15px',
  },
});

export const githubRepoListItem = css({
  marginBottom: '20px',
  display: 'block',
  '&: last-of-type': {
    marginBottom: 0,
  },
});

export const githubRepoCount = css({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginRight: '5px',
});

export const githubIcon = css({
  width: '18px',
  display: 'flex',
  marginRight: '5px',
  justifyContent: 'center',
  color: 'var(--secondary-color)'
});

export const githubRepoListContent = css({
  display: 'flex',
  justifyContent: 'space-between',
  '@media(max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const githubIconWrap = css({
  borderLeft: '1px solid var(--border-primary)',
  paddingLeft: '25px',
  marginLeft: '25px',
  '& li': {
    display: 'flex',
    alignItems: 'center',
  },
  '@media(max-width: 767px)': {
    margin: '15px 0 0 0',
    padding: '15px 0 0 0',
    borderLeft: 'none',
    borderTop: '1px solid var(--border-primary)',
  },
});

export const githubRepoDetails = css({
  '& h4': {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
});
