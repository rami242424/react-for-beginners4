import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }){
    return (
        <Link to={{
            pathname:"/movie-detail",
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movies__movie">
                <img src={poster} alt={title} title={title} />
                <ul className="genres">{genres.map((item, index) => (
                    <li key={index} className="genres_genre">{item}</li>
                ))}</ul>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <p className="movie_summary">{summary.slice(0, 150)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;