import React from "react";

const Loading = ({ size = 40 }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="animate-spin"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#EEF5FF" strokeWidth="4" />
          <path
            d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12"
            stroke="#86B6F6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893"
            stroke="#B4D4FF"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
