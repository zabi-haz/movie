import { useState } from "react";
import { API_KEY } from "../../API_KEY";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import ExplorMovies from "../explor/ExploreMovies";
import SingleTvShow from "./SingleTvShow";
export default function () {
  const [tvPage, setTvPage] = useState(1);
  const [tvShow, setTvShow] = useState(null);
  const [inputturmes, setInputTurmes] = useState("");
  const discoverTvShowsApi = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${tvPage}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
  const searchTvShows = `https://api.themoviedb.org/3/search/company?api_key=28912a9fda87530cbf6787028e6ee294&${tvPage}=1&query=`;
  useEffect(() => {
    fetch(discoverTvShowsApi)
      .then((res) => res.json())
      .then((data) => {
        setTvShow(data.results);
      });
  }, [tvPage]);
  const handlerOnSubmit = (e) => {
    setTvShow(null);
    e.preventDefault();
    fetch(searchTvShows + inputturmes)
      .then((res) => res.json())
      .then((data) => {
        setTvShow(data.results);
      });
  };

  const next_page = () => {
    let nextpage = tvPage + 1;
    setTvPage(nextpage);
  };
  const prev_page = () => {
    if (tvPage > 1) {
      let prev_page = tvPage - 1;
      setTvPage(prev_page);
    }
  };
  if (!tvShow) {
    return <h3 className="loading">loading ... </h3>;
  } else {
    return (
      <>
        <form className="mian_search_movie_handler" onSubmit={handlerOnSubmit}>
          <input
            type="text"
            placeholder="enter the movie name"
            value={inputturmes}
            onChange={(e) => setInputTurmes(e.target.value)}
          />
          <button onClick={handlerOnSubmit}>
            <BiSearchAlt />
            search
          </button>
        </form>
        <div className="main_explor_handler">
          <SingleTvShow data={tvShow} />
        </div>
        <div className="main_next_prev_page_container">
          <h4 className="curren_page">{tvPage}</h4>
          <button className="button" onClick={prev_page}>
            prev
          </button>
          <button className="button" onClick={next_page}>
            next
          </button>
        </div>
        <div className="mainSpace"></div>
      </>
    );
  }
}
