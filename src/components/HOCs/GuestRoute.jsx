import React from 'react';
import jwt from 'jsonwebtoken';
import jwtsecret from '../../../jwtsecret';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ component: Component }) => {
  return (
    <Route 
      render={props => {
        try {
          let token = jwt.verify(sessionStorage.getItem('quiz-maker-auth-token'), jwtsecret.secret);

          return <Redirect to={
            {
              pathname: '/',
              state: {
                from: props.location
              }
            }
          } />;
        } catch(error) {
          return <Component {...props} />;
        }
      }} 
    />
  );
};

export default GuestRoute;