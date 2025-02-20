import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";
import axios from "axios";
import {ThreeDot} from "react-loading-indicators";
import "./Styles/MainMovie.css"

const MainMovie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
  const fetchMovies = async () => {
    const options = {
      method: "GET",
      url: "https://ott-details.p.rapidapi.com/advancedsearch",
      params: {
        start_year: "1970",
        end_year: "2020",
        min_imdb: "6",
        max_imdb: "7.8",
        genre: "action",
        language: "english",
        type: "movie",
        sort: "latest",
        page: "1",
      },
      headers: {
        "x-rapidapi-key": "5cdd07d7eemsh040ace04f152e66p14436djsn1bb21ad4304c",
        "x-rapidapi-host": "ott-details.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMovie(response.data.results||[]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Latest Movies</h1>
      {loading ? (
        <p className="loading">
          <ThreeDot
            variant="bob"
            color="#32cd32"
            size="medium"
            text=""
            textColor=""
          />
        </p>
      ) : (
        <div className="movie-grid">
          {movie.map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={
                  movie.imageurl
                    ? movie.imageurl[0]
                    : "https://via.placeholder.com/200"
                }
                alt={movie.title}
                className="movie-image"
              />
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-rating">IMDB: {movie.imdbrating || "N/A"}</p>
              <button className="info">
                <Info />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainMovie;
