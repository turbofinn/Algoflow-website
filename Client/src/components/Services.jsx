"use client";

import { useEffect } from "react";

const services = [
  {
    image: "/images/appdev.jpg", // Full image for Mobile App Development
    title: "Mobile App Development",
    description:
      "We create intuitive, user-friendly mobile apps that engage your audience and drive results, leveraging the latest technologies.",
  },
  {
    image: "/images/webd.jpg", // Full image for Web Design & Development
    title: "Web Design & Development",
    description:
      "Your website is your number one marketing asset. We design and develop responsive websites that express your brand’s identity.",
  },
  {
    image: "/images/rnd.jpg", // Full image for Research & Development
    title: "Research & Development",
    description:
      "We push the boundaries of innovation with cutting-edge R&D, transforming ideas into reality through strategic and technical expertise.",
  },
  {
    image: "/images/vlm.png", // Full image for Video Analysis with AI & Computer Vision
    title: "Video Analysis with AI & Computer Vision",
    description:
      "Unlock insights from video data using AI and computer vision, enhancing decision-making, security, and customer experience.",
  },
  {
    image: "/images/wfa.webp", // Full image for Workflow Automation & AI in Industries
    title: "Workflow Automation & AI in Industries",
    description:
      "Streamline business operations and increase efficiency with AI-powered automation solutions tailored for your industry.",
  },
  {
    image: "/images/nlp.webp", // Full image for Natural Language Processing & LLMs
    title: "Natural Language Processing & LLMs",
    description:
      "Transform how you interact with data through advanced NLP and large language models (LLMs), enabling smarter decision-making and automation.",
  },
];

export default function Services() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .hover-text-gradient:hover {
        background: linear-gradient(to right, #4ed35e, #1b6f08);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-2 p-6 h-full border-gray-200 shadow-lg hover:shadow-xl rounded-xl transition-all duration-300"
            >
              {/* Full Image at the top */}
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-gray-800 hover-text-gradient transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
