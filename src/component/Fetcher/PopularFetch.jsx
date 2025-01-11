import axios from "axios";
import { useEffect, useState } from "react";

import "swiper/css/scrollbar";
import Carousel from "../Swipers/Swiper";
import Loader from "../Loader/Loader";

const FetchPopular = () => {
  const [dataa, setData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // State to handle errors



  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
              page:8,
              
            },
          }
        );
        setData(data.results); // Set the fetched data
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movies. Please try again later.");
      }
    };
    fetchMovies();
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if(!dataa) return <Loader/>

  return (
    <>
      <Carousel dataa={dataa}/>
    </>
  );
};

export default FetchPopular;
