import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import NavigationSystem from "../NavigationSystem";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import RandomeMovie from "../../component/RandomeMovie";

const TopMovieTitle = () => {
  return (
    <div className="main_top_movie_title_hanlder">
      <h2 className="top_20_movies">Top 20 Movies</h2>
    </div>
  );
};

const TopMovies = () => {
  const { data, loading, err } = useFetch("top_rated", "1");
  if (data) {
    return (
      <div className="main_top_movie">
        {data.map((singleMovie) => (
          <div
            className="mian_single_movie"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w500${singleMovie.poster_path}")`,
              backgroundSize: "cover",
            }}
            key={singleMovie.id}>
            <h4 className="rating">{singleMovie.vote_average}</h4>
          </div>
        ))}
      </div>
    );
  } else {
    return <h1 className="loading">loading...</h1>;
  }
};

const Home = () => {
  const { id } = useParams();
  return (
    <div className="main_home">
      <NavigationSystem />
      <RandomeMovie />
      <TopMovieTitle />
      <TopMovies />
    </div>
  );
};

export default Home;
