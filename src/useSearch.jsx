import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY } from "./API_KEY";
export default function useSearch(type, data, page) {
  const [searchedData, setData] = useState(null);
  const [loadingSearchData, setLoading] = useState(true);
  const [error, setErr] = useState(null);
  let api = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${data}&page=${page}&include_adult=true`;

  const FetchingSearchData = async () => {
    const data = await axios
      .get(api)
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        setErr("err" + err);
      });
  };
  useEffect(() => {
    FetchingSearchData();
  }, [api, page]);
  return { searchedData, loadingSearchData, error };
}
