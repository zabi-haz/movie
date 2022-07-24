import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import ExplorMovies from "./ExploreMovies";

//main_explor_handler
const Explor = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [inputturmes, setInputTurmes] = useState("");
  // apis
  const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=28912a9fda87530cbf6787028e6ee294&language=en-US&page=${page}&include_adult=true&query=`;
  const discoverApi = `https://api.themoviedb.org/3/discover/movie?api_key=28912a9fda87530cbf6787028e6ee294&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
  useEffect(() => {
    fetch(discoverApi)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [page]);
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    fetch(searchApi + inputturmes)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const next_page = () => {
    let nextpage = page + 1;
    setPage(nextpage);
  };
  const prev_page = () => {
    if (page > 1) {
      let prev_page = page - 1;
      setPage(prev_page);
    }
  };
  if (!movies) {
    return <h3 className="loading">loading ...</h3>;
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
          <ExplorMovies data={movies} />
        </div>
        <div className="main_next_prev_page_container">
          <h4 className="curren_page">{page}</h4>
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
};
export default Explor;
