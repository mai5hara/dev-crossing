import { css } from '@emotion/react';

export const mypage = css({
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
  '.ant-tabs > .ant-tabs-nav .ant-tabs-nav-list': {
    width: '100%',
  },
  '.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab': {
    width: '33.33%',
    justifyContent: 'center',
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
  '& span': {
    marginRight: '5px',
  },
});

export const profileWrap = css({
  margin: '30px 0',
});

export const message = css({
  marginBottom: '40px',
});

export const mypageItem = css({
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
