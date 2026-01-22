import { useState } from "react";

const mockDuration = 300; // mock total duration in seconds

// format time in mm:ss
const formatTime = (seconds: number): string => {
  if (!seconds || seconds < 0) return "--:--";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const ProgressBar = () => {
  const [currentTime] = useState(125); // mock current time in seconds
  // const [isHovering, setIsHovering] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full h-5 flex items-center cursor-pointer group z-50">
      {/* Progress bar overlay, to show the tooltip clear */}
      <div className="w-full h-25 absolute bottom-3 pointer-events-none bg-linear-to-t from-progress-bar-tooltip to-transparent opacity-0 group-hover:opacity-100"></div>

      {/* Time Tooltip */}
      <div className="absolute bottom-8 left-[30%] -translate-x-1/2 bg-progress-bar-tooltip text-progress-bar-text px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        {formatTime(currentTime)} / {formatTime(mockDuration)}
      </div>

      <div className="w-full h-1 bg-progress-bar-bg relative group-hover:h-4 transition-all ">
        <div className="w-[30%] h-full bg-progress-bar-red"></div>

        <div className="absolute left-[30%] top-2 -translate-2.5 w-5 h-5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
