import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
export default function ExplorMovies({ data }) {
  return (
    <>
      {data &&
        data.map((singleTvShow) => (
          <Link
            className="singleMovie_explor_image"
            to={`/tv/${singleTvShow.id}`}
            key={singleTvShow.id}>
            <div
              className="singleMovie_explor_image"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${singleTvShow.poster_path}")`,
                backgroundSize: "cover",
              }}
              key={singleTvShow.id}>
              <h4 className="rating">{singleTvShow.vote_average}</h4>
            </div>
          </Link>
        ))}
    </>
  );
}
