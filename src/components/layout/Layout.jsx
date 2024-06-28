import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default memo(Layout);
