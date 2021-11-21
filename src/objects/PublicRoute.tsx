import { Navigate, Outlet } from 'react-router-dom';
import { authenticator } from '../tools/Authentication';
import React from 'react';

class PublicRoute extends React.Component {
    render() {
        return !authenticator.isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
    }
}

export default PublicRoute