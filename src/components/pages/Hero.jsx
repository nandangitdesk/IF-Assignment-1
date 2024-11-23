import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/assignmentPizzaImg.png";
import Logo from "../../assets/assinmentLogo.png";
import Vector from "../../assets/assignmentVector.png";

const Hero = () => {
 
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
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
      className="relative w-full min-h-screen overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left side content */}
        <motion.div
          className="w-full lg:w-1/2 p-6 lg:pl-[104px] mx-auto flex flex-col items-center md:items-start z-10"
          variants={containerVariants}
        >
          <motion.div
            className="h-[60px] w-[60px] lg:h-[107px] lg:w-[83px]"
            variants={fadeIn}
          >
            <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
          </motion.div>

          <motion.h1
            className="text-[38px] text-center md:text-left sm:text-4xl w-60 md:w-[345px] lg:text-[62px] leading-tight lg:leading-[69px] font-bold text-[#0E2368] mt-6 sm:mt-8 lg:mt-20 max-w-[300px] sm:max-w-[345px]"
            variants={fadeIn}
          >
            Discover the <span className="text-[#E23744]">best</span> Food and
            Drinks
          </motion.h1>

          <motion.p
            className="text-[#444957] text-center md:text-left max-w-[300px] sm:max-w-[345px] mt-3 sm:mt-4 lg:mt-[26px] text-sm lg:text-base"
            variants={fadeIn}
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </motion.p>

          <motion.button
            className="mt-4 sm:mt-6 lg:mt-[26px] w-[120px] sm:w-[140px] lg:w-[190px] h-[36px] sm:h-[40px] lg:h-[63px] px-3 sm:px-4 lg:px-[34px] py-1 sm:py-2 lg:py-[14px] bg-[#E23744] text-white rounded-[34px] font-bold text-xs sm:text-sm lg:text-[18px]"
            whileHover="hover"
            variants={buttonHover}
          >
            Explore Now!
          </motion.button>
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 relative"
          variants={fadeIn}
        >
          <motion.div
            className="aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 lg:aspect-none lg:h-screen lg:w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={heroImg}
              alt="heroImg"
              className="md:w-735 md:h-804 h-full w-full object-cover"
            />
            <img
              src={Vector}
              alt="vector"
              className="absolute md:top-0 md:right-0 top-0 right-0 md:h-839 md:w-752 h-full w-full"
            />
          </motion.div>

          <motion.button
            className="absolute top-4 right-4 lg:top-8 lg:right-8 w-[90px] sm:w-[100px] lg:w-[122px] h-[32px] sm:h-[36px] lg:h-[42px] border border-white rounded-[21px] text-white text-[10px] sm:text-xs lg:text-sm font-semibold"
            whileHover={buttonHover.hover}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
