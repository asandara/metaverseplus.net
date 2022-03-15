import React from "react";

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <div className="container w-full min-h-screen grid place-items-center">
      <div className="spinner">
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Loading;
