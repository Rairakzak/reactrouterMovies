import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const DetailPage = () => {
  const [detailData, setDetailData] = useState({});
  //because params is an object we need to get the string inside of it
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDetailData({ status: "searching" });
        const res = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=cb6555db`
        );
        console.log("res", res.data);
        setDetailData({ status: "done", data: res.data });
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [id]);
  console.log(detailData);
  return (
    <div className="Detail-Page">
      {detailData.status === "searching" && "Loading..."}
      {detailData.status === "done" && (
        <div className="Detail-container">
          <div className="left-side">
            <img src={detailData.data.Poster} alt="" />
          </div>
          <div className="right-side">
            <h2>Title: {detailData.data.Title}</h2>
            <h3>Genre: {detailData.data.Genre}</h3>
            <h3>Awards:{detailData.data.Awards}</h3>
            <ul>
              <li>Director: {detailData.data.Director}</li>
              <li>Actors: {detailData.data.Actors}</li>
              <li>Writer:{detailData.data.Writer}</li>
              <li>Plot:{detailData.data.Plot}</li>
              <div className="rating">
                <div>
                  <p>{detailData.data.Ratings[0].Source}</p>
                  <p>{detailData.data.Ratings[0].Value}</p>
                </div>
                <div>
                  <p>{detailData.data.Ratings[1].Source}</p>
                  <p>{detailData.data.Ratings[1].Value}</p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
