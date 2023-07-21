import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import avatar from "../../assets/image/avatar.png";
import "./testimonial.css";
const Testimonials = () => {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="800"
        className="container w-11/12 lg:w-10/12 mx-auto rounded-3xl bg-purple-500 py-20 relative"
      >
        <h1 className="text-4xl font-bold text-white py-10 text-center">
          Testimonials
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              //   spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper pb-10"
        >
          <SwiperSlide>
            <div className="w-11/12 md:w-full mx-auto lg:flex justify-center gap-4 lg:p-16 p-3 text-center lg:text-start bg-white rounded-3xl ">
              <div>
                <img src={avatar} className="lg:w-[300px] mx-auto" alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[#212352]">John Fang</h1>
                <a href="#" className="text-purple-500 font-semibold">
                  wordfaang.com
                </a>
                <p className="pt-5 pb-5">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 md:w-full mx-auto lg:flex justify-center gap-4 lg:p-16 p-3 text-center lg:text-start bg-white rounded-3xl ">
              <div>
                <img src={avatar} className="lg:w-[300px] mx-auto" alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[#212352]">John Fang</h1>
                <a href="#" className="text-purple-500 font-semibold">
                  wordfaang.com
                </a>
                <p className="pt-5 pb-5">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-11/12 md:w-full mx-auto lg:flex justify-center gap-4 lg:p-16 p-3 text-center lg:text-start bg-white rounded-3xl ">
              <div>
                <img src={avatar} className="lg:w-[300px] mx-auto" alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[#212352]">John Fang</h1>
                <a href="#" className="text-purple-500 font-semibold">
                  wordfaang.com
                </a>
                <p className="pt-5 pb-5">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
