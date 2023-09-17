import React, { useEffect, useState } from "react";
import { MovieCard } from "../Components/MovieCard";




const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=5e5e90381b6933362ff8ad9d6eeda736"

export const Featured = () => {

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    // fetch from api
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL)
                if (!response.ok) {
                    throw new Error (`HTTP error! status: ${response.status}`)
                }
                const data = await response.json()
                setMovies(data.results)
            }
            catch (error) {
                setError(error)
            }
        };
        fetchData()

    }, [])

    if (error) {
        return <div> Error fetching data: {error.message} </div>
    }

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
