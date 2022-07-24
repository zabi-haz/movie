import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API_KEY";
import { ImStarHalf } from "react-icons/im";
const SingleTvShowDetails = () => {
  const { id } = useParams();
  const movieInformation = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  const [TvShowDetails, setTvShowDetails] = useState(null);
  const image_api = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(movieInformation)
      .then((res) => res.json())
      .then((data) => setTvShowDetails(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(TvShowDetails);
  if (!TvShowDetails) {
    return <h3 className="loading">loading</h3>;
  } else {
    return (
      <div className="mian_single_tv_show_details_continaer">
        <div
          className="mian_movie_image_and_backdroup"
          style={{
            backgroundImage: `url("${image_api}${TvShowDetails.backdrop_path}")`,
          }}>
          <img src={`${image_api}${TvShowDetails.poster_path}`} alt="" />
        </div>
        <div className="mian_information_container">
          <div className="mian_title_tagline_container">
            <h2 className="main_title">
              {TvShowDetails.name}{" "}
              {TvShowDetails.tagline != "" ? TvShowDetails.tagline : ""}
            </h2>
            {/* <h2 className="movie_tag_line">{movieDetails.tagline}</h2> */}
          </div>
          <div className="main_vote_rate_other_info_container">
            <ImStarHalf className="main_star_logo" />
            <p className="main_vote movie_details_information_show_tags">
              {TvShowDetails.vote_average}
            </p>
            <p className="main_adults movie_details_information_show_tags">
              {TvShowDetails.adult}
            </p>
            <p className="main_detail_movie_arrow movie_details_information_show_tags">
              {`>`}
            </p>
            <p className="realeas_date movie_details_information_show_tags">
              {TvShowDetails.last_air_date.split("-")[0]}
            </p>
            {/* <p className="movie_details_status movie_details_information_show_tags">
    {movieDetails.status}
  </p> */}
            <p className="production_countries">
              {TvShowDetails.production_countries[0].name}
            </p>
          </div>
          <div className="mian_single_movie_overview">
            <p className="overviewred">over view :</p>
            <p className="overview">{TvShowDetails.overview}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleTvShowDetails;
