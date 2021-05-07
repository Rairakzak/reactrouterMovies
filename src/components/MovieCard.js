import React from "react";

const MovieCard = ({ title, imageSrc, year }) => {
  return (
    <div className="movieCard">
      <div className="image">
        <img src={imageSrc} alt={title + " image"} />
      </div>
      <h1>{title}</h1>
      <h2>{year}</h2>
      {/* <button>Movie Details</button> */}
    </div>
  );
};

export default MovieCard;
