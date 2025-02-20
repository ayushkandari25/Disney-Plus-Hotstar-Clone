import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/LatestRelease.css";
import {ThreeDot} from "react-loading-indicators";

const LatestRelease=()=>{
    const[movie, setMovie]=useState(null);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        const fetchLatestMovie=async()=>{
            try {
                const response=await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=2ef1c478");
                console.log(response.data)
                setMovie(response.data)
                setLoading(false)
                
            } catch (error) {
                console.log(error)
                setLoading(false);
            } 
        };
        fetchLatestMovie();
    },[]);

    return (
      <div className="latest-release-container">
        {loading ? (
          <p className="loading-text">
            <ThreeDot
              variant="bob"
              color="#32cd32"
              size="medium"
              text=""
              textColor=""
            />
          </p>
        ) : movie ? (
          <div className="latest-movie-card">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="latest-movie-image"
            />
            <div className="latest-movie-details">
              <h2 className="latest-movie-title">{movie.Title}</h2>
              <p className="latest-movie-info">
                <strong>Year:</strong> {movie.Year}
              </p>
              <p className="latest-movie-info">
                <strong>IMDB:</strong> {movie.imdbRating || "N/A"}
              </p>
              <p className="latest-movie-info">
                <strong>Genre:</strong> {movie.Genre}
              </p>
            </div>
          </div>
        ) : (
          <p className="no-movie-text">No movie found</p>
        )}
      </div>
    );
        };


export default LatestRelease;