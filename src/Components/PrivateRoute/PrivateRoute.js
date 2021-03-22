import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserLoginContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [ user] = useContext(UserLoginContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;