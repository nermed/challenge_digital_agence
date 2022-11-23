import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

function MainLayout() {
  return <div>
    <HeaderNavigation />
    <Outlet />
  </div>;
}

export default MainLayout;
