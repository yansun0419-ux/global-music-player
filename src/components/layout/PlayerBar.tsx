import {
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  ListMusic,
  Volume2,
  Maximize2,
  Shuffle,
  MicVocal,
} from "lucide-react";
import ProgressBar from "./ProgressBar";

const PlayerBar = () => {
  return (
    <footer className="h-25 bg-bg-primary flex flex-col justify-start items-center relative">
      <div className="w-full h-5 -top-2 absolute">
        <ProgressBar />
      </div>

      <div className="w-full flex justify-between items-center mt-4">
        {/* left song info */}
        <div className="w-[35%] flex justify-start items-center pl-8 gap-3 ">
          <div className="w-18 h-18 bg-[linear-gradient(to_bottom_left,#17171a,#363636,#17171a)] rounded-full flex items-center justify-center flex-none shadow-md border border-neutral-900">
            {/* only turn img around */}
            <img
              src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyhvn267srlm0sbabjv5l.png"
              alt="song cover"
              className="w-13 h-13 object-cover rounded-full flex-none animate-spin [animation-duration:45s]"
            />
          </div>
          <div className="flex flex-col justify-center pt-1 min-w-0 ">
            <span className="text-xl font-medium text-text-primary truncate">
              The Dark Side of the Moon (2023 Remastered)
            </span>
            <span className="text-lg text-text-tertiary truncate">
              Pink Floyd / David Gilmour
            </span>
          </div>
        </div>

        {/* middle player controls */}
        <div className="w-[30%] flex justify-center items-center gap-7">
          <Shuffle
            size={22}
            className="text-text-tertiary hover:text-text-secondary cursor-pointer"
          />
          <SkipBack
            size={22}
            className="text-text-secondary fill-text-secondary hover:fill-text-primary hover:text-text-primary cursor-pointer"
          />
          <button
            className="w-12 h-12 flex justify-center items-center rounded-full bg-text-red
         hover:scale-105 transition-transform cursor-pointer"
          >
            <Play size={20} className="text-text-primary fill-text-primary" />
          </button>
          <SkipForward
            size={22}
            className="text-text-secondary fill-text-secondary hover:fill-text-primary hover:text-text-primary cursor-pointer"
          />
          <Repeat
            size={22}
            className="text-text-tertiary cursor-pointer hover:text-text-secondary"
          />
        </div>

        {/* right other controls */}
        <div className="w-[35%] flex justify-end items-center pr-8 gap-6">
          <MicVocal className="text-text-tertiary cursor-pointer hover:text-text-secondary" />
          <ListMusic className="text-text-tertiary cursor-pointer hover:text-text-secondary" />
          <Volume2 className="text-text-tertiary cursor-pointer hover:text-text-secondary" />
          <Maximize2 className="text-text-tertiary cursor-pointer hover:text-text-secondary" />
        </div>
      </div>
    </footer>
  );
};

export default PlayerBar;
