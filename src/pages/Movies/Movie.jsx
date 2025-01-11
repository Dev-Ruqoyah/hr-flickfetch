import { useEffect, useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import SwiperCard from "../../component/Swipers/SwiperCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Loader from "../../component/Loader/Loader";
import Footer from "../Home/Footer";

const Movies = () => {
  const [searchTerms, setSearchTerms] = useState("Wicked");
  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages,setPage] = useState(1)

  const handlePage = ()=>{
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      if(!searchTerms.trim()){
        return;
      }
      
      try {
        const { data:{results,total_pages} } = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
              query: searchTerms,
              page: pages,
              language: "en-US", // Fixed language format
            },
          }
        );
        if(pages === total_pages){
          setPage(1)
        }
        console.log(total_pages);

        console.log(pages);
        
        
        setLoading(false);
        setMovies(results);

      } catch (error) {
        console.error("Error fetching movie details", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerms,pages]);

  if (loading) return <Loader />;
  if (Movies.length === 0) return <div className="text-white">No Movies found</div>;

  return (
    <>
      <div className="bg-black py-4">
        <NavBar />
        <div className="flex justify-center items-center py-3">
          <div className="flex items-center bg-white md:w-1/3 w-2/3 px-3 rounded-md">
            <FaMagnifyingGlass />
            <input
              type="text"
              onChange={(e) => setSearchTerms(e.target.value)}
              placeholder="Search for a movie"
              className="p-2 rounded-md  bg-transparent w-full border-0 outline-0"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          {Movies.map(({ title, id, vote_average, release_date, poster_path }) => (
            <Link to={`/movie/${title}/${id}`} key={id}>
              <SwiperCard
                title={title}
                star={vote_average}
                date={release_date}
                image={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center my-3 text-white">
          <button className="px-6 py-2 bg-gray-800 rounded-md" onClick={handlePage}>See more</button>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Movies;
