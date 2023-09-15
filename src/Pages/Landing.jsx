import React from "react";
import logo from "../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import menu from "../assets/Menu.png";
import poster from "../assets/Poster.png";
import imdb from "../assets/IMDB.png";
import play from "../assets/Play.png";
import tomato from "../assets/tomato.png";
import { Featured } from "./Featured";
import { Footer } from "../Components/Footer";


export const Landing = () => {
  return (
    <>
      {/* image */}
      <div
        className="image bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${poster})`,
        }}
      >
        {/* navigation bar */}
        <nav className="flex justify-between items-center pl-[60px] pr-[60px] pt-6 pb-6">
          {/* navbar logo */}
          <div className="ml-9">
            <img src={logo} alt="moviebox-logo" />
          </div>

          {/* navbar search */}
          <div className="navbar-search">
            <div className="search-container relative">
              <input
                className="bg-transparent text-white text-left text-lg rounded-[6px] outline outline-white outline-offset-2 outline-2 hover:outline-4 placeholder-white pl-2 sm:pr-8 md:pr-[400px] pt-[10px] pb-[10px]"
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

        {/* landing page info */}
        <div className="landing-info flex flex-col h-[285px] w-[454px] mt-[190px] ml-[98px]  ">
          {/* title */}
          <div className="title pb-6">
            <p className="text-white font-extrabold text-7xl">
              {" "}
              John Wick 3 :{" "}
              <span>
                <br /> Parabellum
              </span>
            </p>
          </div>
          {/* ratings */}
          <div className="ratings flex text-slate-400 space-x-5 items-center pb-4">
            <div className="IMDB">
              <img src={imdb} alt="imdb-logo" />
            </div>
            <div className="rotten-tomatoes flex space-x-3">
              <img src={tomato} alt="rotten-tomatoes logo" />
              <p className="text-xs">97%</p>
            </div>
          </div>
          {/* info */}
          <div className="title-info pb-3">
            <p className="text-white font-medium">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </div>
          <div className="play-button">
            <button className="title-button text-white bg-[#be123c] rounded-md p-2 flex items-center uppercase font-medium text-lg hover:bg-[#be123c]">
              {" "}
              <img className="mr-2" src={play} alt="play-icon" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      <Featured />
      <Footer />
    </>
  );
};
