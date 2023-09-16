import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "5e5e90381b6933362ff8ad9d6eeda736";
const API_URL = "https://api.themoviedb.org/3/movie/";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch movie detials based on id
    fetch(`${API_URL}${id}?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error ("Network response failed")
        }
        return res.json()
      })
      .then((data) => {
        setMovieDetails(data);
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [id]);

  if (loading) {
    return <div> Loading ...</div>
  }

  if (error) {
    return <div> Error: {error.message} </div>
  }

  if (!movieDetails) {
    return <div>No movie details found</div>;
  }

  // movie details
  const { title, poster_path, release_date, runtime, overview } = movieDetails;

  return (
    <>
      <div className="moviedetails bg-[#dadbd3] h-[100vh] grid place-items-center">
        <div className="bg-[#ededed] h-[90vh] w-[90vw] shadow-2xl mt-[-50px">
          <div className="movieposter ml-[98px] mt-12 mr-[98px]">
            <img  className="w-[100%] h-auto max-w-[1980px] max-h-[649px] rounded-3xl" src={`${API_IMG}${poster_path}`} alt="movie-trailer"></img>
          </div>
          <div className="moviedetails flex space-x-4 text-[23px] ml-[108px] mt-8 mb-6">
            <p data-testid="movie-title" className="font-medium">{title}</p>
            <p data-testid="movie-release-date" className="text-slate-600">{release_date}</p>
            <p data-testid="movie-runtime" className="text-slate-400">{runtime}</p>
          </div>
          <div className="flex justify-between items-center mr-[98px]">
            <div className="overview ml-[108px] text-[18px] mr-[198px]">
              <p data-testid="movie-overview">{overview}</p>
            </div>
            <div className="buttons">
              <button className="bg-[#BE123C] w-[360px] h-[50px] text-white text-md font-medium border-1 rounded-md hover:bg-[#F8E7EB] mb-6" > See Showtimes</button>
              <Link to={ `/`}>
                <button className="bg-[#F8E7EB] w-[360px] h-[50px] text-black text-md font-medium border-1 rounded-md hover:bg-[#be123c]">More Watch Options</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
