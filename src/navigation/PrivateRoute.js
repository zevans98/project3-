import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { USR_TOKEN_KEY } from '../service/userService';

export const PrivateRoute = ({
    component: Component,
    fallbackUrl,
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem(USR_TOKEN_KEY) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: fallbackUrl,
                        state: { from: props.location, loginRequested: true },
                    }}
                />
            )
        }
    />
);
