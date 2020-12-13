import React from "react";
import AmberPing from "../components/icons/AmberPing";
import BluePing from "../components/icons/BluePing";
import GreenPing from "../components/icons/GreenPing";
import TealPing from "../components/icons/TealPing";
import MenuButton from "../components/MenuButton";
import { SignOut, auth } from "../firebase";

const Menu: React.FC = () => {
  return (
    <div className="p-4 mx-auto sm:p-8 min-h-screen max-w-3xl">
      <p className="mt-12 select-none text-2xl font-caveat text-gray-500">
        Funzel Environment presents
      </p>
      <h1
        className="text-3xl font-bold font-mono select-none cursor-default"
        style={{ fontFamily: "Inter, 'Segoe UI Emoji'" }}
      >
        Emoji<span className="text-orange-500">gamble</span>
      </h1>
      {auth.currentUser?.isAnonymous ? (
        <div className="select-none cursor-default bg-amber-200 border-l-4 border-amber-400 text-amber-700 mt-5 px-4 py-2">
          <p>
            <b>You're signed in anonymously.</b> Progress won't be saved.
          </p>
        </div>
      ) : (
        <></>
      )}
      <p className="font-serif italic max-w-2xl my-6">
        A fun collection of traditional paper games like TicTacToe, 4wins, and
        Battleship, but <b>instead of using X and O, you play with emojis</b>.
        Each emoji has either a passive or active ability, which can be used
        during or at the end of each game. <br />
        Have fun! <span className="not-italic">🤓😜😎</span>
      </p>
      <div className="mt-12" style={{ fontFamily: "Inter, 'Segoe UI Emoji'" }}>
        <pre
          className="mb-2 ml-5 select-none cursor-default"
          style={{ fontFamily: "monospace, 'Segoe UI Emoji'" }}
        >
          🎙 PUBLIC GAMES
        </pre>
        <div className="grid sm:grid-cols-2 md:grid-cols-6 max-w-3xl">
          <MenuButton
            ping={<GreenPing />}
            bold={true}
            title="🎲 TicTacToe"
            link="/tictactoe"
            className="md:col-span-2"
          />
          <MenuButton
            ping={<GreenPing />}
            bold={true}
            title="⛵️ Battleship"
            className="md:col-span-2"
          />
          <MenuButton
            ping={<GreenPing />}
            bold={true}
            title="🏆 4wins"
            className="md:col-span-2"
          />
          <MenuButton
            ping={<TealPing />}
            title="👁 Spectate"
            className="md:col-span-3"
          />
          <MenuButton
            ping={<BluePing />}
            title="🙈 Random game"
            className="md:col-span-3"
          />
        </div>
      </div>
      <div className="mt-8" style={{ fontFamily: "Inter, 'Segoe UI Emoji'" }}>
        <pre
          className="mb-2 ml-5 select-none cursor-default"
          style={{ fontFamily: "monospace, 'Segoe UI Emoji'" }}
        >
          🎭 PRIVATE GAMES
        </pre>
        <div className="max-w-3xl">
          <MenuButton
            ping={<AmberPing />}
            bold={true}
            title="🌳 New private Game"
          />
        </div>
      </div>
      <div className="flex">
        <button onClick={SignOut} className="mb-8 mt-12 mx-auto text-gray-500">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Menu;
