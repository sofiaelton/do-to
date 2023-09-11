import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AccesControl = ({ children }) => {
    const [user] = useAuthState(auth);

    if (user) {
        return <Navigate to="/home" />;
    }
    return children;
};


export default AccesControl;