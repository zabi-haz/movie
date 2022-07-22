import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar = (props) => {
  let data = props.data;
  return (
    <div className="mian_search_movie_handler">
      <input type="text" placeholder="enter the movie name" />
      <button>
        <BiSearchAlt />
        search
      </button>
    </div>
  );
};

export default SearchBar;
