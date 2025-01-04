import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import HeroButton from "../../component/Buttons/HeroButton";
import Carousel from "../../component/Swipers/Swiper";
import SubNavBar from "../../component/NavBar/SubNavBar";
import Loader from "../../component/Loader/Loader";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [related,setRelated] = useState([])
  let { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "5f7eda380c1a398c55e16a580e4395dd",
            },
          }
        );
        setMovie(data);
        // console.log(data);

        
          const relatedData = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`,{
            params:{
              api_key: "5f7eda380c1a398c55e16a580e4395dd",
          
            }
          })
          console.log(relatedData.data.results);
          setRelated(relatedData.data.results)
          
        
        
        // Fetch trailer
        const videoData = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          {
            params: {
              api_key: "5f7eda380c1a398c55e16a580e4395dd",
            },
          }
        );
        const trailer = videoData.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!movie) {
    return <div>
      <Loader/>
    </div>;
  }

  return (
    <div className="bg-black">
      {movie.backdrop_path && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[90vh] relative"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <NavBar />
          <div className="flex flex-col justify-end text-white items-start h-[90%] p-12">
            <h3 className="opacity-90 text-red-600 md:text-6xl text-4xl font-bold">
              {movie.title}
            </h3>
            <p className="opacity-90 text-xl font-semibold ">{movie.tagline}</p>
          </div>
        </div>
      )}

      <div className="content text-white flex divide-x-2 p-10">
        {movie.runtime && (
          <p>
            {Math.floor(movie.runtime / 60)} HR {movie.runtime % 60} MIN
          </p>
        )}
        <p>{movie.release_date}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 px-10">
        {trailerUrl && (
          <iframe
            width="100%"
            height="315"
            src={trailerUrl}
            title={movie.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
        <div>
          <h6 className="text-white font-bold text-xl my-2">Overview</h6>
          <p className="text-white">{movie.overview}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            {movie.genres.map((gen, id) => (
              <div key={id} className="text-rose-600  ">
                <div className="bg-white px-4 rounded-md"> {gen.name}</div>
              </div>
            ))}
          </div>

          <div className="my-3">
            <Link to={`${movie.homepage}`} target="_blank">
              <HeroButton text={"Watch"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="related py-12 ">
        <SubNavBar subNav={"You might also like"}/>
            <Carousel dataa={related}/>
      </div>
    </div>
  );
};

export default MoviePage;
