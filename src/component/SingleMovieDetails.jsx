import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../API_KEY";
import { ImStarHalf } from "react-icons/im";
const SingleMovieDetails = () => {
  const { id } = useParams();
  const movieInformation = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const [movieDetails, setMovieDetails] = useState(null);
  const image_api = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(movieInformation)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(movieDetails);
  if (movieDetails) {
    return (
      <div className="main_single_movie_details" key={movieDetails.id}>
        <div
          className="main_movie_details_image"
          style={{
            backgroundImage: `url("${image_api}${movieDetails.backdrop_path}")`,
          }}>
          <img
            src={`${image_api}${movieDetails.poster_path}`}
            alt=""
            className="singel_movie_image"
          />
        </div>
        <div className="mian_information_container">
          <div className="mian_title_tagline_container">
            <h2 className="main_title">
              {movieDetails.title} : {movieDetails.tagline}
            </h2>
            {/* <h2 className="movie_tag_line">{movieDetails.tagline}</h2> */}
          </div>
          <div className="main_vote_rate_other_info_container">
            <ImStarHalf className="main_star_logo" />
            <p className="main_vote movie_details_information_show_tags">
              {movieDetails.vote_average}
            </p>
            <p className="main_adults movie_details_information_show_tags">
              {movieDetails.adult}
            </p>
            <p className="main_detail_movie_arrow movie_details_information_show_tags">
              {`>`}
            </p>
            <p className="realeas_date movie_details_information_show_tags">
              {movieDetails.release_date}
            </p>
            <p className="movie_details_status movie_details_information_show_tags">
              {movieDetails.status}
            </p>
            {movieDetails.production_countries.map(
              (singeMovieProductionCountries) => (
                <p className="production_countries">
                  {singeMovieProductionCountries.name}
                </p>
              )
            )}
          </div>
          <div className="mian_single_movie_overview">
            <p className="overview">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleMovieDetails;
