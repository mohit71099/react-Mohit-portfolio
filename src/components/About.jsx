/* eslint-disable no-unused-vars */
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import Resume from "../assets/Mohit_Resume.pdf";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className=" rounded-2xl " src={aboutImg} alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className=" w-full lg:w-1/2"
        >
          <div className=" flex justify-center lg:justify-start">
            <p className="my-2 ma-xw-xl py-5">{ABOUT_TEXT}</p>
          </div>

          <button className="  group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:scale-110 animate-gradient"></div>

            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-white blur-xl"></div>

            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="glitter-container">
                <div className="glitter"></div>
                <div className="glitter"></div>
                <div className="glitter"></div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-full border-2 border-white opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-300"></div>

            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="wave"></div>
            </div>

            <span className="relative z-10 flex items-center gap-2">
              <span className="tracking-wider">
                {" "}
                <a href={Resume} download="Download Resume!">
                  Download Resume!
                </a>{" "}
              </span>
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
