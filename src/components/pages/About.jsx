import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/assignmentAboutImg.png";

const About = () => {
  
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "#d32f40",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="mt-20 md:mt-40 w-full px-6 md:px-14 lg:px-56"
      style={{
        background:
          "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center py-12 md:py-0">
        {/* Left side image */}
        <motion.div
          className="hidden md:block md:h-[467px] md:w-[384px]"
          variants={fadeInLeft}
        >
          <img
            src={AboutImg}
            className="h-full w-full object-cover"
            alt="About us illustration"
          />
        </motion.div>

        {/* Right side content */}
        <motion.div
          className="md:h-[467px] md:w-[447px] py-14 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-[#0E2368] text-3xl md:text-[45px] leading-normal md:leading-[27px] font-semibold uppercase font-poppins"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-[#444957] mt-6 font-normal leading-[27px] max-w-md"
            variants={fadeInUp}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </motion.p>
          <motion.button
            className="w-[138px] h-[42px] mt-8 rounded-[21px] bg-[#E23744] text-white text-[16px] md:text-[18px] leading-[27px] font-semibold transition-all duration-300 ease-in-out transform hover:shadow-lg"
            whileHover="hover"
            variants={buttonHover}
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
