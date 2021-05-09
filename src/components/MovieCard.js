import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, imageSrc, year, id }) => {
  console.log(id);
  return (
    <div className="movieCard">
      <div className="image">
        <img src={imageSrc} alt={title + " image"} />
      </div>

      <h1>{title}</h1>
      <h2>{year}</h2>
      <Link className="btnalike" to={`/discover/${id}`}>
        Read More
      </Link>
    </div>
  );
};

export default MovieCard;
// http://www.omdbapi.com/?i=${id}&apikey=cb6555db
