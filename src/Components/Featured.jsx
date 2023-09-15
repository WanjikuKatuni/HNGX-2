import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";





export const Featured = () => {

    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=5e5e90381b6933362ff8ad9d6eeda736"
    const [movies, setMovies] = useState([])

    // fetch from api
    useEffect(() => {
        fetch(API_URL)
        .then((res)=> res.json())
        .then(data => {
            console.log(data)
            setMovies(data.results)
        })

    }, [])

    // get first 10 movies
    const firstTenMovies = movies.slice(0,10)

    
  return (
    <>
        <div className="featured-category ml-[98px]">
            <h1 className="text-[36px] font-extrabold mt-10">Featured Movies</h1>
        </div>

        {/* map the movies */}
        {/* map first 10 movies */}
        <div className="flex flex-wrap justify-center">
            {firstTenMovies.map((movieReq) => <MovieCard key={movieReq.id} {...movieReq}/>)}
        </div>
    </>
  );
};
