/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React from 'react';
import { errorTextStyles, marginBottom } from './ErrorText.style';

export const ErrorText = (props) => {
  return (
    <p css={css(errorTextStyles, props.mb && marginBottom)}>{props.error}</p>
  );
};
