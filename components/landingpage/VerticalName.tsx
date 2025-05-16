import React from "react";

const VerticalName = ({ className = "" }) => {
  return (
    <div
      className={`rotate-90 origin-left text-7xl font-bold uppercase  bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent ${className}`}>
      Vita Nova
    </div>
  );
};

export default VerticalName;
