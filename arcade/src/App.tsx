import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./contents/Menu";
import io, { Socket } from "socket.io-client";
import { auth, SignIn } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicTacToe from "./contents/TicTacToe";
import StatusDisplay from "./contents/StatusDisplay";
import RedPing from "./components/icons/RedPing";
import GreenPing from "./components/icons/GreenPing";
import AmberPing from "./components/icons/AmberPing";
import BluePing from "./components/icons/BluePing";

function App() {
  let [loading, setLoading] = useState<boolean>(true);

  let [socket, setSocket] = useState<typeof Socket>();
  let [connected, setConnected] = useState<boolean>(false);
  let [connectionError, setConnectionError] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);

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

        s.on("authenticated", () => {
          setConnected(true);
        })

        s.on("connect_error", (error: any) => {
          // TODO: deal with connection errors
          console.log("Encountered connection error");
          setConnectionError(true);
          setConnected(false);
        });

        s.on("disconnect", () => {          
          if (!auth.currentUser) {
            s.disconnect();
          }

          console.log("disconnected")
          setConnected(false);
        })
      });
    });
  }, []);

  return (
    <div className="bg-warmGray-100 dark:bg-gray-800 dark:text-white h-full">
      <Router>
        {loading ? (
          <StatusDisplay
            icon={<BluePing center={true}/>}
            message="Loading"
          />
        ) : connected ? (
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
        ) : !auth.currentUser ? (
          <StatusDisplay
            icon={<AmberPing center={true}/>}
            message={<p>Please <button className="text-blue-400" onClick={SignIn}>login</button>.</p>}
          />
        ) : connectionError ? (
          <StatusDisplay
            icon={<RedPing center={true} />}
            message="Connection Error!"
          />
        ) : (
          <StatusDisplay
            icon={<GreenPing center={true} />}
            message="Connecting to vault"
          />
        )}
      </Router>
    </div>
  );
}

export default App;
