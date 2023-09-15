import React from "react";
import tomato from "../assets/tomato.png";
import imdb from "../assets/imdbi.png";
import like from "../assets/Favorite.png";




const API_IMG = "https://image.tmdb.org/t/p/w500/"


export const MovieCard = ({poster_path, title, release_date, vote_average}) => {

    // console.log(title)

  return (
    <>
       <div className="ml-[98px]">

        <div data-testid="movie-card" className=" movie-card relative max-w-sm rounded overflow-hidden shadow-lg mt-10">
            <img data-testid="movie-poster" className="w-full" src={API_IMG+poster_path} 
            alt="movie-poster" />
            
            <div className="items-center">
                <div className="absolute top-2 left-2 bg-[#f3f4f6] opacity-60 text-black uppercase text-sm font-semibold px-2 py-1 mt-6 ml-5 rounded-xl shadow-lg hover:text-white hover:bg-black">
                    <p>MOVIES</p>
                </div>
                <div className="absolute top-2 right-2 bg-[#f3f4f6] opacity-60 hover:opacity-90 focus:opacity-90 text-black uppercase text-sm font-semibold px-2 py-1 mt-6 mr-5 rounded-full shadow-lg">
                    <img src={like} alt="favorite" />
                </div>
            </div>
            <div className="px-1 py-4">
                <div data-testid="movie-release-date" className="text-slate-400 mb-6 text-xs">{release_date}</div>
                <div data-testid="movie-title" className="font-bold text-xl mb-3">{title}</div>
                <div className="title-rating flex justify-between">
                    <div className="imdb-title-rating flex space-x-2">
                        <img src={imdb} alt='imdb-icon'/>
                        <p>{vote_average}</p>
                    </div>
                    <div className="tomato-title-rating flex space-x-2">
                        <img src={tomato} alt='tomato-icon'/>
                        <p>{vote_average}</p>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Action</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Adventure</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Horror</span>
            </div>
        </div>
       </div>
    </>
  );
};
