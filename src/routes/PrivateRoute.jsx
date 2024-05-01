import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    //go to location(Ami jei tai jete chai)
    const location = useLocation();
    console.log(location.pathname)

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.any.isRequired
  };

export default PrivateRoute;