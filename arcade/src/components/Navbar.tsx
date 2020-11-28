import React, { useState } from "react";
import firebase from "../firebase";
import Brand from "./Brand";
import {Link} from "react-router-dom";

interface NavbarProps {}

function SignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    });
}

const Navbar: React.FC<NavbarProps> = () => {
    const [user, setUser] = useState(null);

    firebase.auth().onAuthStateChanged((res: any) => {
        setUser(res)
    })

  return (
    <div className="flex justify-between px-8 py-5 bg-white shadow-lg dark:bg-gray-900">
        <Link to="/"><Brand /></Link>
      
      {user ? (
        <p className="font-caveat text-2xl my-auto">Welcome, {user!['displayName']}</p>
      ) : (
        <button
          onClick={SignIn}
          className="my-auto select-none bg-gray-300 dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-400 dark:hover:bg-black animate duration-700"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
