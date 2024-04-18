import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, key }){
    return (
        <div class="movies__movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie_data">
                <h3 class="movie_title">{title}</h3>
                <h5 class="movie_year">{year}</h5>
                <p class="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    key: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;