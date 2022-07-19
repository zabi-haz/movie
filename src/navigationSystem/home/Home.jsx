import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import NavigationSystem from "../NavigationSystem";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
const TopMovies = () => {
  //https://image.tmdb.org/t/p
  //https://api.themoviedb.org/3/movie/550?api_key=28912a9fda87530cbf6787028e6ee294
  const { data, loading, err } = useFetch("top_rated", "2");
  if (data) {
    return (
      <div className="main_top_movie">
        {data.map((singleMovie) => (
          <div className="mian_single_movie" key={singleMovie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    );
  } else {
    return <h1 className="loading">loading...</h1>;
  }
};
const Header = () => {
  return (
    <header className="main_header">
      <TopMovies />
    </header>
  );
};

const Home = () => {
  const { id } = useParams();
  return (
    <div className="main_home">
      <NavigationSystem />
      <TopMovies />
    </div>
  );
};

export default Home;
