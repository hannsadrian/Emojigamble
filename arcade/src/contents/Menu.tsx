import React from "react";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className="p-4 mx-auto sm:p-8 min-h-screen max-w-3xl">
      <h1
        className="mt-12 text-3xl font-bold font-mono select-none cursor-default"
        style={{ fontFamily: "Inter, 'Segoe UI Emoji'" }}
      >
        🕹 Emojigamble
      </h1>
      <p className="font-serif italic max-w-2xl my-6">
        Emojigamble is a fun collection of traditional paper games like
        TicTacToe, 4wins and Battleship, but
        <b>instead of using X and O you play with emojis</b>. Each emoji has
        either a passive or active ability, which can be used during or at the
        end of each game. <br />
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
          <div className="md:col-span-2 m-1 px-2 py-4 cursor-pointer shadow-sm hover:shadow-md bg-white transition duration-200 flex rounded-lg">
            <div className="bg-green-600 my-auto sm:mb-auto ml-3 mr-2 rounded-full h-4 w-4">
              <div className="h-4 w-4 animate-ping rounded-full bg-green-500"></div>
            </div>
            <div className="ml-1">
              <p className="font-bold">🎲 TicTacToe</p>
            </div>
          </div>
          <div className="md:col-span-2 m-1 px-2 py-4 cursor-pointer shadow-sm hover:shadow-md bg-white transition duration-200 flex rounded-lg">
            <div className="bg-green-600 my-auto sm:mb-auto ml-3 mr-2 rounded-full h-4 w-4">
              <div className="h-4 w-4 animate-ping rounded-full bg-green-500"></div>
            </div>
            <div className="ml-1">
              <p className="font-bold">⛵️ Battleship</p>
            </div>
          </div>
          <div className="md:col-span-2 m-1 px-2 py-4 cursor-pointer shadow-sm hover:shadow-md bg-white transition duration-200 flex rounded-lg">
            <div className="bg-green-600 my-auto sm:mb-auto ml-3 mr-2 rounded-full h-4 w-4">
              <div className="h-4 w-4 animate-ping rounded-full bg-green-500"></div>
            </div>
            <div className="ml-1">
              <p className="font-bold">🏆 4wins</p>
            </div>
          </div>
          <div className="md:col-span-3 m-1 px-2 py-4 cursor-pointer shadow-sm hover:shadow-md bg-white transition duration-200 flex rounded-lg">
            <div className="bg-teal-500 my-auto sm:mb-auto ml-3 mr-2 rounded-full h-4 w-4">
              <div className="h-4 w-4 animate-ping rounded-full bg-teal-400"></div>
            </div>
            <div className="ml-1">
              <p className="font-normal">👁 Spectate</p>
            </div>
          </div>
          <div className="sm:col-span-2 md:col-span-3 m-1 px-2 py-4 cursor-pointer shadow-sm hover:shadow-md bg-white transition duration-200 flex rounded-lg">
            <div className="bg-blue-500 my-auto sm:mb-auto ml-3 mr-2 rounded-full h-4 w-4">
              <div className="h-4 w-4 animate-ping rounded-full bg-blue-400"></div>
            </div>
            <div className="ml-1">
              <p className="font-normal">🙈 Random game</p>
            </div>
          </div>
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
          <div className="m-1 px-2 py-4 cursor-pointer shadow-sm hover:shadow-md bg-white transition duration-200 flex rounded-lg">
            <div className="bg-amber-500 my-auto sm:mb-auto ml-3 mr-2 rounded-full h-4 w-4">
              <div className="h-4 w-4 animate-ping rounded-full bg-amber-400"></div>
            </div>
            <div className="ml-1">
              <p className="font-normal">🌳 New private Game</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
