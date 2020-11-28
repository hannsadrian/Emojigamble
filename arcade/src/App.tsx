import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./contents/Menu";
import io, { Socket } from "socket.io-client";
import firebase from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicTacToe from "./contents/TicTacToe";
import Loading from "./contents/Loading";

function App() {
  let [socket, setSocket] = useState<typeof Socket>()
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user?.displayName)
      if (user == null) {
        console.log("user is null");
        return;
      }

      user.getIdToken().then((res) => {
        const s = io("http://localhost:8000?idToken=" + res);
        setSocket(s)

        s.on("connect", () => {
          console.log("connected!!");
        });

        s.on("connect_error", (error: any) => {
          console.log(error);
        });
      });
    });
  }, []);

  return (
    <div className="bg-warmGray-100 dark:bg-gray-800 dark:text-white h-full">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/tictactoe">
            {socket ? (
              <TicTacToe socket={socket!} />
            ) : (
              <Loading message="Connecting..." />
            )}
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
