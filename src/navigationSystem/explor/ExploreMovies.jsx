import useFetch from "../../useFetch";
export default function ExplorMovies({ data }) {
  return (
    <>
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
    </>
  );
}
