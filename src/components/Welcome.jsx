import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (<div>
        <h1>Welcome to Do-To</h1>
        <Link to="/login">
            <button>Login</button>
        </Link>
        <Link to="/signup">
            <button>Create Acount</button>
        </Link>
        

    </div>)
}

export default Welcome;