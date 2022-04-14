import { css } from '@emotion/react';

export const postCard = css({
  '.ant-card-body': {
    padding: '0',
  },
});

export const profileImg = css({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  '& img': {
    borderRadius: '50%',
    objectFit: 'cover',
  },
});

export const profileWrap = css({
  padding: '24px 24px 5px 24px',
});

export const profileImgWrap = css({
  display: 'flex',
});

export const profileName = css({
  marginLeft: '0.8rem',
  lineHeight: 1,
  '& h4': {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '6px',
    transition: '0.3s',
    '&:hover': {
      color: 'var(--secondary-color)',
    },
  },
  '& p': {
    fontSize: '1.2rem',
  },
});

export const postFooter = css({
  backgroundColor: 'var(--gray-scale1)',
  padding: '8px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const postFooterLeft = css({
  display: 'flex',
  '& a': {
    '&:hover': {
      color: 'var(--secondary-color) !important',
    },
  },
});

export const answerIcon = css({
  width: '15px',
  marginRight: '8px',
});

export const answerNum = css({
  marginRight: '5px',
  fontSize: '1.1rem',
});

export const btn = css({
  display: 'inline-block',
  color: '#333',
  lineHeight: 1,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s',
  outline: 'none',
});

export const btnThumbs = css({
  marginLeft: '18px',
  '& span': {
    fontSize: '1.1rem',
  },
  '&: hover': {
    opacity: '0.5',
  },
});

export const btnDelete = css({
  color: 'var(--danger-color)',
  '&: hover': {
    opacity: '0.5',
  },
});

export const isLikedIcon = css({
  color: 'var(--secondary-color)',
});

export const badgeColor = (category) =>
  css({
    background:
      category === 'front-end'
        ? '#1e9bff'
        : category === 'back-end'
        ? '#1bae06'
        : category === 'design'
        ? '#c600a8'
        : '#fe9400',
    color:
      category === 'front-end'
        ? '#1e9bff'
        : category === 'back-end'
        ? '#1bae06'
        : category === 'design'
        ? '#c600a8'
        : '#fe9400',
  });

export const profileText = css({
  margin: '15px 0',
});
