import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./contents/Menu";
import io, { Socket } from "socket.io-client";
import firebase from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicTacToe from "./contents/TicTacToe";
import StatusDisplay from "./contents/StatusDisplay";
import RedPing from "./components/icons/RedPing";
import GreenPing from "./components/icons/GreenPing";

function App() {
  let [socket, setSocket] = useState<typeof Socket>();
  let [connectionError, setConnectionError] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user?.displayName);
      if (user == null) {
        console.log("user is null");
        return;
      }

      user.getIdToken().then((res) => {
        const s = io("http://localhost:8000?idToken=" + res);
        setSocket(s);

        s.on("connect", () => {
          console.log("connected!!");
          setConnectionError(false);
        });

        s.on("connect_error", (error: any) => {
          // TODO: deal with connection errors
          console.log("Encountered connection error");
          setConnectionError(true);
        });
      });
    });
  }, []);

  return (
    <div className="bg-warmGray-100 dark:bg-gray-800 dark:text-white h-full">
      <Router>
        {socket?.connected ? (
          <>
            <Navbar />
            <Switch>
              <Route path="/tictactoe">
                <TicTacToe socket={socket!} />
              </Route>
              <Route path="/">
                <Menu />
              </Route>
            </Switch>
          </>
        ) : connectionError ? (
          <StatusDisplay
            icon={<RedPing center={true} />}
            message="Connection Error!"
          />
        ) : (
          <StatusDisplay
            icon={<GreenPing center={true} />}
            message="Connecting..."
          />
        )}
      </Router>
    </div>
  );
}

export default App;
