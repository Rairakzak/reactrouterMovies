import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
// import MovieCard from "../components/MovieCard";

const DiscoverRecipesPage = () => {
  // const [search, setSearch] = useState("");
  //we make and object that hold the status
  const [searchStatus, setSearchStatus] = useState({
    status: "search did not start",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setSearchStatus({ status: "searching" });
        const response = await axios.get(
          "https://www.omdbapi.com/?s=face&apikey=cb6555db"
        );
        setSearchStatus({ status: "done", data: response.data.Search });
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  console.log("sear", searchStatus);
  return (
    <div>
      {/* <div className="discover">
        <h1>Discover Movies </h1>
        <form>
          onSubmit={onFormSubmit}
          <label>Search for </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search </button>
        </form>
      </div> */}

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
                id={movie.imdbID}
              />
            );
          })}
      </section>
    </div>
  );
};

export default DiscoverRecipesPage;
