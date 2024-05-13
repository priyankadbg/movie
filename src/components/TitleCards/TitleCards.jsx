import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // Import Axios
import "./Titlecards.css";
// import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTBiODRkMTJhZTBjMWY5YmM4ZGNhOWUwNWEwNzZjYSIsInN1YiI6IjY2NDFkNDJlNDBhNDM3MDQ0OTU1YjEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tjsmk2n9mL5lNplbNRPMlNu3exaaoVMVNsCtOvlsqJw",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          category ? category : "now_playing"
        }?language=en-US&page=1`,
        options
      )
      .then((response) => setApiData(response.data.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);

    return () => {
      cardsRef.current.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-Cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
