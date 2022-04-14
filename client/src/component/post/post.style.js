import { css } from '@emotion/react';

// ===== Post =====
export const postWrap = css({
  maxWidth: '800px',
  margin: '100px auto 0 auto',
  paddingBottom: '230px',
  '@media(max-width: 800px)': {
    margin: '100px 30px 0 30px',
  },
  '@media(max-width: 767px)': {
    paddingBottom: '250px',
    margin: '100px 15px 0 15px',
  },
});

export const btnWrap = css({
  marginBottom: '20px',
  display: 'inline-block',
  transition: '0.3s',
  '& span': {
    marginLeft: '10px',
  },
  '&:hover': {
    color: 'var(--secondary-color)',
  },
});

export const textareaWrap = css({
  marginBottom: '15px',
});

export const commentWrap = css({
  border: '1px solid var(--border-primary)',
  padding: '20px',
  marginTop: '20px',
  backgroundColor: '#fff'
});

// ===== CommentItem =====
export const commentItem = css({
  borderBottom: '1px solid var(--border-primary)',
  padding: '20px 0',
  '&:last-of-type': {
    borderBottom: 'none',
    paddingBottom: 0,
  },
  '&:first-of-type': {
    paddingTop: 0,
  },
});

export const commentDelete = css({
  fontSize: '1.4rem'
})

export const commentTime = css({
  fontSize: '1.2rem'
})

export const profileLink = css({
  display: 'flex',
  alignItems: 'center',
  '& h4': {
    fontWeight: 600,
    marginBottom: '2px',
    fontSize: '1.4rem'
  },
});

export const imgWrap = css({
  width: '40px',
  height: '40px',
  marginRight: '10px',
  '& img': {
    borderRadius: '50%',
  },
});

export const textWrap = css({
  paddingTop: '15px',
});

export const profileWrap = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

// ===== CommentForm =====
export const commentFormWrap = css({
  margin: '0 auto',
  position: 'fixed',
  bottom: 0,
  backgroundColor: '#fff',
  width: '100%',
  padding: '20px 0',
  boxShadow: '0 -2px 3px 2px #eeeeee',
  '@media(max-width: 800px)': {
    padding: '20px 30px',
  },
  '@media(max-width: 767px)': {
    padding: '20px 15px',
  },
  '& h3': {
    marginBottom: '15px',
    fontSize: '1.6rem'
  },
  '& form': {
    '& button': {
      marginTop: '15px',
    },
  },
});

export const commentContent = css({
  maxWidth: '800px',
  margin: '0 auto',
});

export const commentTextArea = css({
  height: '80px',
});
