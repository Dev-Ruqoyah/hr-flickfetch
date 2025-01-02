import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperCard from './SwiperCard';

export default () => {
  return (
    <div className="relative my-12 bg-black">

  
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={4} // Default slides per view
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
    //   pagination={{ clickable: true }}
      breakpoints={{
        // Screen width ≥ 320px
        320: {
          slidesPerView: 1, // Show 1 slide on small screens
          spaceBetween: 10,
        },
        // Screen width ≥ 768px
        768: {
          slidesPerView: 2, // Show 2 slides on tablets
          spaceBetween: 20,
        },
        // Screen width ≥ 1024px
        1024: {
          slidesPerView: 4, // Show 3 slides on medium devices
          spaceBetween: 30,
        },
        // Screen width ≥ 1440px
        1440: {
          slidesPerView: 4, // Show 4 slides on large screens
          spaceBetween: 40,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
    </Swiper>
      {/* Custom Navigation Icons */}
      <button className="custom-prev z-50 absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-red-500">
        <FaArrowLeft />
      </button>
      <button className="custom-next z-50 absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-red-500">
        <FaArrowRight />
      </button>
    </div>
  );
};
