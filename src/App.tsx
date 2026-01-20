import React from "react";
import PlayerBar from "./components/layout/PlayerBar";

const App = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-1 bg-neutral-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold text-green-500">
          Global Music Player
        </h1>
      </main>
      <PlayerBar />
    </div>
  );
};

export default App;
