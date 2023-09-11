import { Route, Routes} from "react-router-dom";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import AccesControl from "./components/AccesControl";
import NotFoundPage from "./components/NotFoundPage";
import ForgotPassword from "./components/ForgotPassword";

const AppRouts = () => {

    
    return (
        
        <Routes>
            <Route path="/" element={<AccesControl><Welcome /></AccesControl>} />
            <Route path="/login" element={<AccesControl ><Login /></AccesControl>} />
            <Route path="/signup" element={<AccesControl><SignUp /></AccesControl>} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/reset" element={<ForgotPassword/>} />
            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
        
    );
};

export default AppRouts;