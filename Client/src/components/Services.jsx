"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

const services = [
  {
    icon: "/Mobile.png",
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/Mobile.png",
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/Tag.png",
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/Dashboard.png",
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/Dashboard.png",
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export default function Services() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <section className="py-14 px-4 md:px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "Inter",
            fontWeight: 800,
            fontSize: "35px",
            lineHeight: "55px",
            color: "#1A202C",
          }}
        >
          Services we offer
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          navigation
          pagination={{ clickable: true, el: ".swiper-pagination" }} // Pagination customization
          className="w-full"
          onSwiper={setSwiperInstance}
          onSlideChange={({ realIndex }) => setActiveIndex(realIndex)}
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center h-full pb-20"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`border-2 p-6 h-full max-w-[90%] transition-all duration-300 ease-in-out border-gray-200 shadow-lg hover:shadow-xl rounded-xl ${
                  activeIndex === index ? "border-red-500 transform translate-y-4" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-red-500">
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>
                <h3
                  className={`mb-2 text-lg font-semibold ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-[#F76680] to-[#57007B] text-transparent bg-clip-text"
                      : "text-gray-800"
                  }`}
                >
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots outside the card section */}
        {/* <div className="swiper-pagination justify-center mt-2"></div> */}
      </div>
    </section>
  );
}
