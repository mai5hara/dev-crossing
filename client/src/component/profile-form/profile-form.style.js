import { css } from '@emotion/react';

export const title = css({
  marginBottom: '40px',
  fontSize: '2.2rem',
});

export const editProfile = css({
  maxWidth: '800px',
  margin: '90px auto 0 auto',
  paddingBottom: '50px',
  '@media(max-width: 800px)': {
    margin: '0 30px',
  },
  '@media(max-width: 767px)': {
    margin: '0 15px',
  },
});

export const inputItem = css({
  marginBottom: '20px',
  display: 'flex',
  '@media(max-width: 767px)': {
    flexDirection: 'column',
  },
});

export const inputDescription = css({
  fontSize: '1.2rem',
  marginTop: '5px',
});

export const labelWrap = css({
  display: 'flex',
  width: '30%',
  '@media(max-width: 767px)': {
    width: '100%',
    marginBottom: '8px',
  },
});

export const inputArea = css({
  width: '70%',
  '@media(max-width: 767px)': {
    width: '100%',
  },
});

export const inputLabel = css({
  width: '50%',
  '@media(max-width: 767px)': {
    width: '100%',
    marginBottom: '8px',
  },
});

export const inputLabelSns = css({
  width: '25%',
  display: 'flex',
  alignItems: 'center',
  '& span': {
    marginRight: '10px',
    fontSize: '2rem',
  },
  '@media(max-width: 767px)': {
    width: '100%',
  },
});

export const inputStyle = css({
  width: '100%',
  border: '1px solid #d9d9d9',
  transition: 'all 0.4s',
  height: '32px',
  outline: 0,
  padding: '0 5px',
  '&: hover': {
    border: '1px solid #40a9ff',
  },
  '&: focus': {
    border: '1px solid #40a9ff',
    boxShadow: '0 0 0 2px rgb(64 169 255 / 20%)',
  },
});

export const inputStyleDate = css(inputStyle, {
  width: '35%',
});

export const textareaStyle = css(inputStyle, {
  height: '200px',
  padding: '5px',
});

export const errorMessage = css({
  fontSize: '1.4rem',
  color: '#E24475',
  marginTop: '7px',
});

export const selectBox = css({
  width: '50%',
  borderRadius: '3px',
  border: '1px solid #d9d9d9',
  height: '32px',
  outline: 0,
  cursor: 'pointer',
  transition: 'all 0.3s',
  backgroundColor: '#ffffff',
  '&: hover': {
    border: '1px solid #40a9ff',
  },
  '&: focus': {
    border: '1px solid #40a9ff',
    boxShadow: '0 0 0 2px rgb(24 144 255 / 20%)',
  },
});

export const checkBox = css({});

export const required = css({
  color: '#fff',
  backgroundColor: 'var(--danger-color)',
  borderRadius: '5px',
  padding: '2px 7px',
  height: '2rem',
  marginLeft: '10px',
});

export const btnLink = css({
  marginLeft: '30px',
  '@media(max-width: 767px)': {
    margin: '15px 0 0 0',
    width: '100%',
  },
});

export const checkboxWrap = css({
  marginLeft: '15px',
  display: 'flex',
  alignItems: 'center',
  '& span': {
    marginLeft: '6px',
  },
});

export const checkboxArea = css({
  display: 'flex',
  alignItems: 'center',
});
