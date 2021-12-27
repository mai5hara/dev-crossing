import { css } from '@emotion/react';

export const dashboard = css({
  maxWidth: '1100px',
  margin: '100px auto 50px auto',
  '@media(max-width: 1100px)': {
    margin: '100px 30px 50px 30px',
  },
  '@media(max-width: 767px)': {
    margin: '100px 15px 50px 15px',
  },
});

export const titleWrap = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
  '& h2': {
    fontSize: '1.8rem',
    '@media(max-width: 767px)': {
      marginBottom: '15px',
    },
  },
  '@media(max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const userName = css({
  margin: '20px 0 30px 0',
});

export const profileWrap = css({
  margin: '30px 0',
});

export const message = css({
  marginBottom: '40px',
});

export const dashboardItem = css({
  marginBottom: '50px',
});

// === table ====

export const table = css({
  marginTop: '30px',
  width: '100%',
  border: '1px solid var(--border-primary)',
  '& th': {
    height: '50px',
    textAlign: 'left',
    backgroundColor: 'var(--gray-scale1)',
    padding: '0 15px',
    borderRight: '1px solid var(--border-primary)',
  },
  '& td': {
    padding: '0 15px',
    height: '50px',
  },
  '& tr': {
    borderBottom: '1px solid var(--border-primary)',
  },
});
