import { useEffect, useState } from "react";
import axios from "axios";
import CategoryButton from "../Buttons/CategoryButton";
import Carousel from "../Swipers/Swiper";

const PoPularCategory = () => {
  const [movies, setMovies] = useState([]);
  const genreMap = {
    Action: 28,
    Comedy: 35,
    Romance: 10749,
    Horror: 27,
  };
  useEffect(()=>{
    const fetchGenre = async () =>{
      const genreId =28

      const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie",{
        params:{
          api_key:"5f7eda380c1a398c55e16a580e4395dd" ,
          with_genres: genreId
          
        }
      })
      setMovies(data.results);
      console.log(data.results);
      
    }
    fetchGenre()
  },[])

  const handleCategoryClick = async (category) => {
    const genreId = genreMap[category];
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            with_genres: genreId,
          },
        }
      );
      setMovies(data.results); // Update movies list
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  

 

  return (
    <div>
      <div className="flex md:gap-3 gap-1 items-center mx-auto md:px-20 my-3">
        <CategoryButton category="Action" onClick={handleCategoryClick} />
        <CategoryButton category="Comedy" onClick={handleCategoryClick} />
        <CategoryButton category="Romance" onClick={handleCategoryClick} />
        <CategoryButton category="Horror" onClick={handleCategoryClick} />
      </div>
      <Carousel dataa={movies}/>
    </div>
  );
};

export default PoPularCategory;
