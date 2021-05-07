import axios from "axios";
import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
// import MovieCard from "../components/MovieCard";

const DiscoverRecipesPage = () => {
  const [search, setSearch] = useState("");
  //we make and object that hold the status
  const [searchStatus, setSearchStatus] = useState({
    status: "search did not start",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log("searched value >>", search);
    // API CALL
    try {
      setSearchStatus({ status: "searching" });

      const response = await axios.get(
        `http://www.omdbapi.com/?s=${search}&apikey=cb6555db`
      );

      // we added data to the status object so it will hold the new data from state
      setSearchStatus({ status: "done", data: response.data.Search });
    } catch (err) {
      console.log(err);
    }
  };
  console.log("sear", searchStatus);
  return (
    <div>
      <div className="discover">
        <h1>Discover Movies </h1>
        <form onSubmit={onFormSubmit}>
          <label>Search for </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search </button>
        </form>
      </div>
      
      <section className="result-section">
        {searchStatus.status === "searching" && "Loading..."}
        {searchStatus.status === "done" &&
          searchStatus.data.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                imageSrc={movie.Poster}
                year={movie.Year}
              />
            );
          })}
      </section>
    </div>
  );
};

export default DiscoverRecipesPage;
