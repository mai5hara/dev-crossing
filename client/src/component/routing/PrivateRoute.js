import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/features/authSlice';

const PrivateRoute = ({ 
  component: Component, 
  ...rest 
}) => {
  const { isAuthenticated, loading } = useSelector(authSelector)

  return(
  <Route
    {...rest} 
    render={props => 
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    } 
  />)
}

export default PrivateRoute;
