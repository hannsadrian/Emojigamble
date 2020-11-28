import React from "react";
import { Socket } from "socket.io-client";
import firebase from "../firebase";

interface TicTacToeProps {
  socket: typeof Socket;
}

interface TicTacToeState {}

class TicTacToe extends React.Component<TicTacToeProps, TicTacToeState> {
  componentDidMount() {
    this.props.socket.emit("notice", "hi tictactoe");

    this.props.socket.on("reply", (msg: string) => {
      console.log(msg);
    });
  }

  async submitMove(index: number) {
    let data = {
      col: index % 3,
      row: Math.ceil((index+1) / 3)-1,
      emoji: "😄",
      idToken: await firebase.auth().currentUser?.getIdToken(),
    };

    console.log("col " + data.col + ", row " + data.row)

    this.props.socket.emit("tictactoe-move", JSON.stringify(data));
  }

  render() {
    return (
      <div className="min-h-screen">
        <h1>🎲 TicTacToe</h1>

        <div className="grid text-black grid-cols-3 w-64 h-64 mr-auto">
          {[...Array(9)].map((x, i) => (
            <div
              key={i}
              onClick={this.submitMove.bind(this, i)}
              className="bg-white m-2"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
