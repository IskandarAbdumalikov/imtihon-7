import React from "react";
import { NavLink } from "react-router-dom";

const Empty = ({ type }) => {
  return (
    <div className="empty container">
      {type === "cart" ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt=""
        />
      ) : (
        <img
          src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
          alt=""
        />
      )}

      <NavLink to={"/"}>
        <button>Let's continue</button>
      </NavLink>
    </div>
  );
};

export default Empty;
