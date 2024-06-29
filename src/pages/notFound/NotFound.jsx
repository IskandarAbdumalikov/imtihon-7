import React, { memo } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container not__fund">
      <img
        src="https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg"
        alt=""
      />
      <Link to={"/"}>
        <button>Go to home</button>
      </Link>
    </div>
  );
};

export default memo(NotFound);
