import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "../reusables/useOnClickOurside";

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const clickRef = React.useRef(null);

  const handleClickOutside = () => {
    setMenuIsOpen(false);
    console.log("clicked outside");
  };

  useOnClickOutside(clickRef, handleClickOutside);

  return (
    <header className="header">
      <div className="nav" ref={clickRef}>
      {menuIsOpen && (
        <div className="toggle">
          <Link to="/" className="link nav-link">
            Home
          </Link>
          <Link to="/projects" className="link nav-link">
            Projects
          </Link>
          <Link to="/about" className="link nav-link">
            About
          </Link>
        </div>
      )}
      <div
        className="menu-button"
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }} 
        onMouseEnter={() => setMenuIsOpen(true)}
      >
        ꕔ
      </div>
      </div>
    </header>
  );
};

export default Header;
