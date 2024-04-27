import React from "react";

const Users = () => (
  <>
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          {" "}
          <stop
            id="stop1"
            stop-color="rgba(248, 117, 55, 1)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stop-color="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path
        fill="url(#sw-gradient)"
        d="M23.7,-40.5C30.8,-36.9,36.7,-30.8,40.5,-23.6C44.4,-16.4,46.1,-8.2,45.5,-0.3C44.9,7.5,42.1,15.1,37.9,21.8C33.8,28.4,28.5,34.2,21.9,37.6C15.4,40.9,7.7,41.8,0.5,41C-6.8,40.2,-13.5,37.7,-20.1,34.3C-26.6,31,-32.9,26.8,-36.3,20.9C-39.8,15.1,-40.4,7.5,-40.2,0.1C-40,-7.3,-39.1,-14.7,-35.6,-20.4C-32,-26.1,-25.9,-30.2,-19.5,-34.2C-13.2,-38.2,-6.6,-42.2,0.8,-43.7C8.3,-45.1,16.6,-44.1,23.7,-40.5Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
      ></path>
    </svg>
  </>
);

export default Users;
