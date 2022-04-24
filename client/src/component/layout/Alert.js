/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { alertSelector } from '../../store/features/alertSlice';

const alertStyle = css({
  fontWeight: 'bold',
  position: 'fixed',
  width: '100%',
  marginTop: '70px',
  padding: '30px',
  zIndex: '99',
})

const alertType = (type) => css({
  backgroundColor: type === 'success' ? '#BDF3CD' : '#FFB4B4',
  color: type === 'success' ? '#1AC84E' : '#FF2A2A'
})

const Alert = () =>  {
  const alerts = useSelector(alertSelector);
  return (
    <>
      {
        alerts !== null && alerts.length > 0 && alerts.map(alert => (
          <div key={alert.id} css={[alertStyle, alertType(alert.alertType)]}>
            { alert.msg }
          </div>
        ))
      }
    </>
  )
}

export default Alert;