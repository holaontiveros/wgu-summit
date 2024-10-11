import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import darkLogo from "assets/images/wgu-logo-dark.svg";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount >= 2) {
      navigate("/egg");
    }
  }, [clickCount, navigate]);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <header className="sticky top-0 z-20" onClick={handleClick}>
      <div className="container z-20 mx-auto flex items-center gap-4 bg-primary-250 px-6 pb-6 pt-10">
        <img src={darkLogo} width="85" height="20" alt="" />
        <span className="text-xl font-bold">|</span>
        {title && <h1 className="text-lg">{title}</h1>}
      </div>
    </header>
  );
};

export default Header;
