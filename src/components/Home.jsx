/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mainimage2 from "../assets/group.jpg";
import { useEffect } from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import { Link, useNavigate } from "react-router-dom";
import Video from "./Video";
import { FaWhatsapp } from "react-icons/fa";
function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleGetStartedClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const navigate = useNavigate();
  const wip = () => {
    navigate("/workinprogress");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          className="flex justify-between items-center gap-16 leading-8  max-w-[1240px] mx-auto flex-col lg:flex-row px-4">
          <div data-aos-duration="2000" data-aos="fade-up">
            <h1 className="md:text-6xl text-4xl leading-[60px] font-bold md:leading-[80px] flex items-center justify-center  text-gray-700   md:text-start  ">
              Unlocking African Talents for Global Success
            </h1>
            <p className=" mt-8 text-[18px] text-gray-500 md:text-start ">
              Welcome to Mozisha, Your Gateway to Premium Talents to Supercharge
              Business Growth.
            </p>
            <div className="flex flex-col lg:flex-row mt-16   md:gap-8">
              {" "}
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold w-full">
                  <Link to={"/business"}> For Businesses</Link>
                </button>
                <p className="text-sm text-center mb-16">
                  Boost your Business with Top Talents
                </p>
              </div>
              <div>
                <button  className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold w-full">
                  <Link to={"/fortalents"} onClick={handleGetStartedClick}>For Talents</Link>{" "}
                </button>
                <p className="text-sm text-center mb-16">
                  Access In-Demand Skills and Jobs
                </p>
              </div>
              <div>
                <button className="bg-purple-700 text-white rounded-md md:px-4 md:py-2 py-2 hover:bg-purple-100 mb-4 hover:text-purple-800 hover:font-bold md:w-full justify-center items-center w-full">
                  <Link to={"/workinprogress"}> For Mentors</Link>
                </button>
                <p className="text-sm text-center mb-16">
                  Guide Emerging Talents to Success
                </p>
              </div>
            </div>
            <div
              className="fixed top-[80%] md:right-16 right-4 z-40"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <a href="https://wa.me/+27824277902" target="_blank">
                <div className="relative">
                  <FaWhatsapp
                    data-aos="zoom-in"
                    className="hover:text-green-500 w-8 h-8 text-green-600 font-extrabold cursor-pointer"
                  />
                  {isHovered && (
                    <div className="absolute text-[10px] text-black mb-4 rounded-md  bottom-full">
                      Contact us now!
                    </div>
                  )}
                </div>
              </a>
            </div>
          </div>
          <div
            data-aos-duration="2000"
            data-aos="fade-up"
            className="h-[600px] ">
            <img
              data-aos-duration="2000"
              data-aos="zoom-in"
              src={mainimage2}
              alt="main photo"
              className="rounded-lg h-[400px] md:h-full    object-cover "
            />
          </div>
        </div>
        <p className="mx-auto max-w-[1240px] text-gray-500 ml-28 mb-8 md:my-8">
        </p>
      </div>
      <Hero />
      <HowItWorks />
      <Testimonial />
      <Video />
      <FrequentlyAskedQuestions />
    </>
  );
}

export default Home;
