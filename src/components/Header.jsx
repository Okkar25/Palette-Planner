import React, { useState } from "react";
import Logo from "../assets/logo2.jpg";

const Header = () => {
  const [activeTheme, setActiveTheme] = useState(null);
  const [theme, setTheme] = useState("");

  const selectTheme = (e) => {
    if (activeTheme && theme) {
      activeTheme.classList.remove("activeTheme");
      document.body.classList.remove(theme);
    }

    e.target.classList.add("activeTheme");
    setActiveTheme(e.target);

    const selectedTheme = e.target.getAttribute("data-theme");
    setTheme(selectedTheme);

    document.body.classList.add(selectedTheme); // change background theme
  };

  console.log(theme);

  return (
    <header className="mt-5 flex items-center justify-between shadow-md px-3 bg-white py-1 rounded">
      <div className="logo flex items-center">
        <img src={Logo} alt="logo" className="w-[80px] h-[80px]" />
        <span className="text-2xl text-gradient font-Roboto font-bold">
          Palette Planner
        </span>
      </div>

      <div className="themeSelector flex items-center gap-2 w-[200px] h-20">
        <span
          onClick={selectTheme}
          data-theme="light"
          className="light border-slate-300 border w-5 h-5 block rounded-full cursor-pointer"
        ></span>

        <span
          onClick={selectTheme}
          data-theme="medium"
          className="medium w-5 h-5 block rounded-full cursor-pointer"
        ></span>

        <span
          onClick={selectTheme}
          data-theme="dark"
          className="dark w-5 h-5 block rounded-full cursor-pointer "
        ></span>

        <span
          onClick={selectTheme}
          data-theme="gOne"
          className="gOne w-5 h-5 block rounded-full cursor-pointer "
        ></span>

        <span
          onClick={selectTheme}
          data-theme="gTwo"
          className="gTwo w-5 h-5 block rounded-full cursor-pointer"
        ></span>

        <span
          onClick={selectTheme}
          data-theme="gThree"
          className="gThree w-5 h-5 block rounded-full cursor-pointer"
        ></span>
      </div>
    </header>
  );
};

export default Header;
9;
