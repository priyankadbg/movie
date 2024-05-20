import React, { useState, useEffect } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams } from "react-router-dom";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    type: "",
    published_at: "",
  });

  // const staticKey = "domt_Sx-wTY";

  const { id } = useParams();
  console.log("id is", id);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTBiODRkMTJhZTBjMWY5YmM4ZGNhOWUwNWEwNzZjYSIsInN1YiI6IjY2NDFkNDJlNDBhNDM3MDQ0OTU1YjEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tjsmk2n9mL5lNplbNRPMlNu3exaaoVMVNsCtOvlsqJw",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  // const videoKey = apiData ? apiData.key : staticKey;

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="back icon" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.Published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.Type}</p>
      </div>
    </div>
  );
};

export default Player;
