import React, { useState } from "react";
import firebase, { GoogleSignIn } from "../firebase";
import Brand from "./Brand";
import { Link } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((res: any) => {
    setUser(res);
  });

  return (
    <div className="flex justify-between px-8 py-5 bg-white shadow-lg dark:bg-gray-900">
      <Link to="/">
        <Brand />
      </Link>

      {user && !user!["isAnonymous"] ? (
        <p className="font-caveat text-2xl my-auto">
          Welcome, {user!["displayName"]}
        </p>
      ) : (
        <button
          className="text-gray-600 select-none flex my-1 px-3 py-2 rounded hover:bg-gray-100 active:bg-gray-300 transition duration-100"
          onClick={GoogleSignIn}
        >
          <IoLogoGoogle className="my-auto mr-2" /> Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Navbar;
