import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
//   const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            // navigate("/login");
            console.log("sign out successful");
          })
          .catch((error) => console.log(error));
      };


  return (
    <div className="footer">
      {" "}
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}<button onClick={userSignOut}>Log out</button></p>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
};

export default AuthDetails;
