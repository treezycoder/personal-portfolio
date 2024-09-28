import React from "react";

const NextIcon = () => {
  return (
    <div className="flex items-center h-8 space-x-1 bg-black/50 hover:scale-105 hover:bg-black/80 transition cursor-pointer px-2 md:px-3 lg:px-4">
      <span className="font-bold text-blue-500 text-sm md:text-base lg:text-lg">
        Next
        <span className="font-bold text-blue-600 text-sm md:text-base lg:text-lg">
          .js
        </span>
      </span>
    </div>
  );
};

export default NextIcon;
