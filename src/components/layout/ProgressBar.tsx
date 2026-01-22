const ProgressBar = () => {
  return (
    <div className="w-full h-5 flex items-center cursor-pointer group z-50">
      <div className="w-full h-1 bg-progress-bar-bg relative group-hover:h-4 transition-all ">
        <div className="w-[30%] h-full bg-progress-bar-red"></div>

        <div className="absolute left-[30%] top-2 -translate-2.5 w-5 h-5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
