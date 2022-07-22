import { useEffect, useState } from "react";
import { CgUserRemove } from "react-icons/cg";
import SearchBar from "../../component/searchBar";
import useFetch from "../../useFetch";
import NavigationSystem from "../NavigationSystem";
const Explor = () => {
  const [movie, setMovie] = useState(null);
  const [page, setPage] = useState(2);
  const nextPage = () => {
    let adding = page + 1;
    setPage(adding);
  };
  const { data, loading, err } = useFetch("popular", page);
  if (data) {
    console.log(data);
    return (
      <>
        <SearchBar />
        <div className="main_explor_handler">
          {data.map((singleMovie) => (
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
        <div className="mainSpace"></div>
      </>
    );
  } else {
    return <h1 className="loading">loading...</h1>;
  }
};
export default Explor;
