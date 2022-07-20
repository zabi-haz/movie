import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
function RandomeMovie() {
  const [randomMovie, setRandomMovie] = useState(null);
  const { data, loading, err } = useFetch("popular", "1");
  if (data) {
    let randomNumber = Math.floor(Math.random() * data.length);
    return (
      <div
        className="main_random_movie_handler"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500${data[randomNumber].poster_path}")`,
          backgroundSize: "cover  ",
        }}>
        <h2 className="main_welcome_masseage">welcome to the movie project</h2>
      </div>
    );
  }
}

export default RandomeMovie;
