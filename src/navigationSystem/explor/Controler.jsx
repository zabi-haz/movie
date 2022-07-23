import useSearch from "../../useSearch";
import useFetch from "../../useFetch";
import React, { useEffect, useState } from "react";
export default function Controler(
  movie_or_tv,
  type_of_movie_or_tv,
  search_words,
  search_movie_or_tv,
  is_the_user_searching,
  the_page
) {
  const [finalData, setFinalData] = useState(null);
  const { data } = useFetch(type_of_movie_or_tv, the_page);
  const { searchedData } = useSearch(
    search_movie_or_tv,
    search_words,
    the_page
  );
  useEffect(() => {
    console.log(is_the_user_searching);
    if (is_the_user_searching) {
      setFinalData(searchedData);
    } else {
      setFinalData(data);
    }
  }, [is_the_user_searching]);

  return { finalData };
}
