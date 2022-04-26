/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, css } from '@emotion/react';

const notFound = css({
  minHeight: '100vh',
  paddingTop: '13rem',
  textAlign: 'center'
})

const notFountTitle = css({
  textAlign: 'center',
  paddingBottom: '20px'
})

const NotFound = () => {
  return (
    <div css={notFound}>
      <h1 css={notFountTitle}>
        <i className="fas fa-exclamation-triangle"/> Page Not Found
      </h1>
      <p>Sorry, this page does not exist</p>
    </div>
  )
}

export default NotFound;