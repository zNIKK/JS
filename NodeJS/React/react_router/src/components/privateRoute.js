import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from '../context/contextLogin';

export default function PrivateRoute() {
    const {state} = useContext(Context);

    return (
        state ? <Outlet /> : <Navigate to="/negado" />
        // <Route {...rest} render={({ location }) => 
        //     login ? (children) :
            // (<Navigate to={{
            //     pathname: "/",
            //     state: { from: location }
            // }}></Navigate>)
        // }>
        // </Route>
    );
}