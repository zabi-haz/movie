import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsArrowDownCircleFill } from "react-icons/bs";
import { GrAdd, GrAddCircle } from "react-icons/gr";
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
        <div className="main_random_movie_controler">
          <h2 className="random_movie_title">
            {data[randomNumber].original_title}
          </h2>
          <div className="main_controler_play_and_add_to_list">
            <Link className="play_link" to="/home">
              <BsFillPlayCircleFill />
              <h4 className="random_movie_play_text">Play</h4>
            </Link>
            <div className="mian_add_to_list_handler">
              <BsArrowDownCircleFill style={{ color: "#fff" }} />
              <h4 className="add_to_list_test">My List</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomeMovie;
