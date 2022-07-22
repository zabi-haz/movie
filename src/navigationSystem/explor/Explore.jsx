import { useEffect, useState } from "react";
import SearchBar from "../../component/searchBar";
import useFetch from "../../useFetch";
import useSearch from "../../useSearch";
import NavigationSystem from "../NavigationSystem";
import { BiSearchAlt } from "react-icons/bi";
const Explor = () => {
  const [page, setPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [searchMovie, setSearchMovie] = useState(null);
  const { searchedData, loadingSearchData, error } = useSearch("movies", "");
  const { data, loading, err } = useFetch("popular", page);

  //searching controle
  const inputSearching = () => {
    setSearchMovie();
  };

  //page controle
  const nextPage = () => {
    let adding = page + 1;
    setPage(adding);
  };
  const prevPage = () => {
    let negative = page - 1;
    setPage(negative);
  };

  //search bar
  const SearchBar = (props) => {
    let data = props.data;
    return (
      <div className="mian_search_movie_handler">
        <input type="text" placeholder="enter the movie name" />
        <button onClick={() => setIsSearch(true)}>
          <BiSearchAlt />
          search
        </button>
      </div>
    );
  };
  //cheack for loading and if the data still loading
  if (loading) {
    return <h1 className="loading">loading...</h1>;
  }

  //show the data
  return (
    <>
      <SearchBar />
      <div className="main_explor_handler">
        {searchedData &&
          searchedData.map((singleMovie) => (
            <div
              className="singleMovie_explor_image"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${singleMovie.poster_path}")`,
                backgroundSize: "cover",
              }}
              key={singleMovie.id}>
              <h4 className="rating">{singleMovie.vote_average}</h4>
            </div>
          ))}
        {data &&
          data.map((singleMovie) => (
            <div
              className="singleMovie_explor_image"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${singleMovie.poster_path}")`,
                backgroundSize: "cover",
              }}
              key={singleMovie.id}>
              <h4 className="rating">{singleMovie.vote_average}</h4>
            </div>
          ))}
      </div>
      <div className="main_next_prev_page_container">
        <button className="prev" onClick={() => prevPage()}>
          prev
        </button>
        <h2 className="curren_page">{page}</h2>
        <button className="next" onClick={() => nextPage()}>
          next
        </button>
      </div>
      <div className="mainSpace"></div>
    </>
  );
  return <h1 className="loading">loading...</h1>;
};
export default Explor;
