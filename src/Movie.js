import React from "react";
import PropTypes from "prop-types";

// state가 필요없는 경우 function component로 사용하면 된다 (class component 사용할 필요가 없다.)

function Movie({ id, year, title, summary, poster }){
    return (
        <div>
            <h2>{ title } </h2>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;