import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  let classes = "sidenav";
  if (showNavbar) classes += " sidenav--is-open";
  return (
    <>
      <Topbar />
      <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Sidebar
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
        classes={classes}
      />
    </>
  );
};

export default Navbar;
