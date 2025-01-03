import axios from "axios";
import { useEffect, useState } from "react";
import SwiperCard from "../Swipers/SwiperCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Fetchmovie = () => {
  const [dataa, setData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // State to handle errors

  const MovieDetails = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            params: {
              api_key: "5f7eda380c1a398c55e16a580e4395dd",
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

  return (
    <div className="relative container mx-auto">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4} // Default slides per view
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {dataa.map(({ id, title, poster_path, release_date, vote_average }) => (
          <SwiperSlide key={id}>
            <Link to={`/movie/${title}/${id}`}>
              <SwiperCard
                title={title}
                star={vote_average}
                date={release_date}
                image={`https://image.tmdb.org/t/p/w500${poster_path}`} // Add base URL
                det={() => MovieDetails(id)}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev z-50 absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-red-500">
        <FaArrowLeft />
      </button>
      <button className="custom-next z-50 absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-red-500">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Fetchmovie;
