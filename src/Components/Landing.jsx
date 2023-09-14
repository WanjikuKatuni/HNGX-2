import React from "react";
import logo from "../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import menu from "../assets/Menu.png"

export const Landing = () => {
  return (
    <>
      <nav className="bg-slate-400 flex justify-between items-center pl-[60px] pr-[60px] pt-6 pb-6">
        {/* navbar logo */}
        <div className="ml-9">
          <img src={logo} alt="moviebox-logo" />
        </div>

        {/* navbar search */}
        <div className="navbar-search">
          <div className="search-container relative">
            <input
              className="bg-transparent text-white text-left text-lg rounded-[6px] outline outline-white outline-offset-2 outline-2 hover:outline-4 placeholder-white pl-2 pr-[400px] pt-[10px] pb-[10px]"
              placeholder="What do you want to watch?"
              type="text"
            />
            <div className="search-icon absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
            </div>
          </div>
        </div>

        {/* navbar signing */}
        <div className="sign-in flex place-items-center space-x-4 mr-10">
            <IconButton>
          <p className="text-white font-medium">Sign in</p>

            </IconButton>
          <img src={menu} alt="menu-icon" />
        </div>
      </nav>
    </>
  );
};
