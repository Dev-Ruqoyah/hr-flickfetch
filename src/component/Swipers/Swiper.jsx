import SwiperCard from "../Swipers/SwiperCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ dataa }) => {
  return (
    <>
      <div className="relative container mx-auto">
        {/* Swiper Carousel */}
        <Swiper
          className="w-[85%]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4} // Default slides per view
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {dataa.map(({ id, title, poster_path, release_date, vote_average }) => (
            <SwiperSlide key={id}>
              <Link to={`/movie/${title}/${id}`}>
                <SwiperCard
                  title={title}
                  star={vote_average}
                  date={release_date}
                  image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="custom-prev z-50 absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-red-500"
          aria-label="Previous Slide"
        >
          <FaArrowLeft />
        </button>
        <button
          className="custom-next z-50 absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-red-500"
          aria-label="Next Slide"
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default Carousel;
