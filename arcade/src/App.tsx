import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./contents/Menu";
import io, { Socket } from "socket.io-client";
import { auth, GoogleSignIn, AnonymousSignIn } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicTacToe from "./contents/TicTacToe";
import StatusDisplay from "./contents/StatusDisplay";
import RedPing from "./components/icons/RedPing";
import GreenPing from "./components/icons/GreenPing";
import AmberPing from "./components/icons/AmberPing";
import BluePing from "./components/icons/BluePing";
import TextBanner from "./components/TextBanner";
import { IoLogoGoogle, IoLogIn } from "react-icons/io5";

function App() {
  let [loading, setLoading] = useState<boolean>(true);

  let [socket, setSocket] = useState<typeof Socket>();
  let [connected, setConnected] = useState<boolean>(false);
  let [connectionError, setConnectionError] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);

      if (user == null) {
        return;
      }

      user.getIdToken().then((res) => {
        const s = io("http://localhost:8000?idToken=" + res, {
          reconnectionDelay: 5000,
        });
        setSocket(s);

        s.on("connect", () => {
          console.log("connected!!");
          setConnectionError(false);
        });

        s.on("authenticated", () => {
          setConnected(true);
        });

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

          console.log("disconnected");
          setConnected(false);
        });
      });
    });
  }, []);

  return (
    <div className="bg-warmGray-100 dark:bg-gray-800 dark:text-white h-full">
      <Router>
        {loading ? (
          <StatusDisplay
            icon={<BluePing center={true} />}
            message={<TextBanner title="Loading" />}
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
            icon={<AmberPing center={true} />}
            message={
              <div className="-mt-1 flex-row">
                <button
                  className="text-gray-600 select-none flex mx-auto my-1 px-3 py-2 rounded hover:shadow-md hover:bg-white active:shadow-sm transition duration-100"
                  onClick={GoogleSignIn}
                >
                  <IoLogoGoogle className="my-auto mr-2" /> Sign in with Google
                </button>
                <button
                  className="text-gray-600 select-none flex mx-auto my-1 px-3 py-2 rounded hover:shadow-md hover:bg-white active:shadow-sm transition duration-100"
                  onClick={AnonymousSignIn}
                >
                  <IoLogIn className="my-auto mr-2" /> Continue Anonymous
                </button>
              </div>
            }
          />
        ) : connectionError ? (
          <StatusDisplay
            icon={<RedPing center={true} />}
            message={
              <TextBanner
                title="Conectivity Error"
                message="Please make sure you're online"
              />
            }
          />
        ) : (
          <StatusDisplay
            icon={<GreenPing center={true} />}
            message={
              <TextBanner
                title="Connecting"
                message="Establishing a secured connection"
              />
            }
          />
        )}
      </Router>
    </div>
  );
}

export default App;
