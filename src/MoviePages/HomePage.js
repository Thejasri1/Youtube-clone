/** @format */

import { useEffect, useState } from "react";
import { getAllMovies } from "../API/cloneApi";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const getMovies = async () => {
    try {
      const res = await getAllMovies();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>hOME Page</h1>
    </div>
  );
};
export default HomePage;
