import { css } from '@emotion/react';

export const profileEducation = css({
  '& li': {
    borderBottom: '1px solid var(--border-primary)',
    paddingBottom: '10px',
    paddingTop: '10px',
    '&:first-of-type': {
      paddingTop: 0,
    },
    '&:last-of-type': {
      borderBottom: 'none',
      paddingBottom: 0,
    },
    '& p': {
      wordBreak: 'break-all',
    },
  },
});
