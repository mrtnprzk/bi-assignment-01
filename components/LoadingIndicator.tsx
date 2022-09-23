import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
