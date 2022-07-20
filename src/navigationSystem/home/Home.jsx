import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import NavigationSystem from "../NavigationSystem";
import { Link } from "react-router-dom";
import { BiSearchAlt, BiCameraMovie } from "react-icons/bi";
import RandomeMovie from "../../component/RandomeMovie";

const Space = () => {
  return <div className="mainSpace"></div>;
};

const MovieListingTitle = ({ movieListingName }) => {
  return (
    <div className="main_top_movie_title_hanlder">
      <h2 className="top_20_movies">{movieListingName}</h2>
    </div>
  );
};

const MovieListingData = ({ dataType, pageNumber }) => {
  const { data, loading, err } = useFetch(dataType, pageNumber);
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
      <nav className="topnavbar">
        <Link className="nav_home_title_link" to="/home">
          <BiCameraMovie />
          <div className="main_title">
            Mo<span>vie</span>
          </div>
        </Link>
      </nav>
      <NavigationSystem />
      <RandomeMovie />
      <MovieListingTitle movieListingName="Top 20 Movies" />
      <MovieListingData dataType="top_rated" pageNumber="1" />
      <MovieListingTitle movieListingName="Upcoming" />
      <MovieListingData dataType="upcoming" pageNumber="1" />{" "}
      <MovieListingTitle movieListingName="Popular" />
      <MovieListingData dataType="popular" pageNumber="1" />
      <Space />
    </div>
  );
};

export default Home;
