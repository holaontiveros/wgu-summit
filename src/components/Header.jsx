import React from "react";
import darkLogo from "assets/images/wgu-logo-dark.svg";

const Header = ({ title }) => {
  return (
    <header className="relative h-32">
      <div className="container fixed top-0 z-20 mx-auto flex items-center gap-4 bg-primary-250 px-6 pb-8 pt-8">
        <img src={darkLogo} width="85" height="20" alt="" />
        <span className="text-xl font-bold">|</span>
        {title && <h1 className="text-lg">{title}</h1>}
      </div>
    </header>
  );
};

export default Header;
