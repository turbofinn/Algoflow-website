"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    title: "Engineering-First Mindset",
    description:
      "We prioritize software architecture and clean code from the beginning. Our engineering-first approach ensures that performance, scalability, and maintainability are baked into every project.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
    color: "bg-black",
  },
  {
    title: "Clear Project Alignment",
    description:
      "We focus on building a shared understanding between product managers, developers, and stakeholders, ensuring everyone is aligned on goals, timelines, and expectations.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: "bg-blue-500",
  },
  {
    title: "Proven Technical Expertise",
    description:
      "Our team brings deep knowledge of modern frameworks, cloud platforms, and DevOps practices to deliver robust and reliable software solutions.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "bg-pink-500",
  },
  {
    title: "Security & IP Protection",
    description:
      "We follow industry best practices for security and ensure that intellectual property and data are always protected through strong encryption and NDA policies.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    color: "bg-emerald-500",
  },
  {
    title: "Code Reviews & Best Practices",
    description:
      "All code is peer-reviewed to maintain quality, identify bugs early, and ensure adherence to industry standards and internal best practices.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    color: "bg-orange-500",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Rigorous QA and automated testing pipelines help us catch issues before production, ensuring stable and high-performing releases every time.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "bg-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

const iconHover = {
  rotate: [0, 10, -10, 0],
  transition: { duration: 0.8 },
};

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 ${className}`}
    animate={{
      y: [0, 20, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

export default function DevelopmentApproach() {
  return (
    <motion.div
      className="relative w-full mx-auto px-4 py-12 md:py-16 sm:px-6 lg:px-8 bg-[#F7F7FA] flex justify-center items-center flex-col font-inter"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8 md:mb-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, margin: "0px 0px -50px 0px" }}
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
          },
        }}
      >
        <motion.div
          className="flex items-center justify-center mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.8, delay: 0.2 },
            },
          }}
        >
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]" />
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
          Our software development
        </h2>
        <div className="text-2xl md:text-3xl font-bold relative text-black">
          approach
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4">
        {approaches.map((approach, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 md:p-9 border-[1px] border-[#E7DAED] w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, margin: "0px 0px -50px 0px" }}
            variants={itemVariants}
            whileHover={hoverVariants}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className={`flex-shrink-0 w-12 h-12 ${approach.color} rounded-lg flex items-center justify-center`}
                whileHover={iconHover}
              >
                {approach.icon}
              </motion.div>
              <div>
                <motion.h3
                  className="text-lg md:text-xl font-semibold mb-2 text-black"
                  whileHover={{ color: "#4ed35e" }}
                  transition={{ duration: 0.2 }}
                >
                  {approach.title}
                </motion.h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {approach.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating decorative elements - hidden on mobile */}
      <FloatingOrb className="hidden md:block left-1/4 top-1/3 w-4 h-4 bg-[#4ed35e]" />
      <FloatingOrb
        className="hidden md:block right-1/4 bottom-1/4 w-6 h-6 bg-blue-500"
        delay={0.5}
      />
    </motion.div>
  );
}
