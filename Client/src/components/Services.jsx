"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

const services = [
  {
    icon: "/icons/Mobile.png",
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/icons/Mobile.png",
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/icons/Tag.png",
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/icons/Dashboard.png",
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/icons/Dashboard.png",
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "/icons/Tag.png",
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-pagination .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        background-color: #cbd5e0; /* Gray-400 */
        opacity: 1;
      }
      .custom-pagination .swiper-pagination-bullet-active {
        background-color: #48bb78; /* Green-500 */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          className="w-full"
          onSlideChange={({ realIndex }) => setActiveIndex(realIndex)}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="flex justify-center h-full pb-20">
              <div
                className={`border-2 p-6 h-full max-w-[90%] transition-all duration-300 ease-in-out border-gray-200 shadow-lg hover:shadow-xl rounded-xl ${
                  activeIndex === index ? "border-green-500 transform translate-y-4" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-green-500">
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>
                <h3
                  className={`mb-2 text-lg font-semibold ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] text-transparent bg-clip-text"
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

        {/* Pagination Dots */}
        <div className="custom-pagination mt-6 flex justify-center space-x-2"></div>
      </div>
    </section>
  );
}
