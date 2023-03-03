import React, { useState } from "react";
import "./navbar.css";
import { BiMoon } from "react-icons/bi";

const Navbar = ({ titleShow }) => {
  const [langs, setLangs] = useState([
    { id: 1, text: "en", isActive: true },
    { id: 2, text: "uz", isActive: false },
    { id: 3, text: "ru", isActive: false },
  ]);
  const setLang = (id) => {
    setLangs(
      langs.map((lang) =>
        lang.id === id
          ? { ...lang, isActive: true }
          : { ...lang, isActive: false }
      )
    );
  };
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="nav">
      <div className="navbar-component">
        <a href="#home" className="moon">
          <BiMoon />
        </a>
        <div className="nav-langs" onClick={() => setOpenMenu(!openMenu)}>
          {langs.find((lang) => lang.isActive).text}
          <ul className={`${openMenu ? "open" : ""}`}>
            {langs
              .filter((lang) => lang.isActive === false)
              .map((lang) => {
                return (
                  <li key={lang.id} onClick={() => setLang(lang.id)}>
                    {lang.text}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="nav-title" style={{display: titleShow ? 'flex' : 'none'}}>
        <h1>
          <span>M</span>
          <span>y blog</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
