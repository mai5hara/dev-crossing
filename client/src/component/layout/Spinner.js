import React, { Fragment } from 'react';
import Walk from './Walk.gif';

export default () => (
  <Fragment>
    <img
      src={Walk}
      style={{width: '100px', margin: 'auto', display: 'block'}}
      alt='Loading...'
    />
  </Fragment>
)