/* eslint-disable react/jsx-no-target-blank */
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import img from "../assets/mozishapurple.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleGetStartedClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="p-8 md:px-28 md:justify-center  flex flex-col md:flex-row bg-purple-700 text-white gap-[5rem] leading-10 md:items-center">
      <div className="md:w-1/2">
        <img src={img} alt="" />
      </div>{" "}
      <div data-aos-duration="1000" data-aos="fade-up">
        <p className="font-semibold ">
          {" "}
          <Link onClick={handleGetStartedClick} to={"/about"}> About Mozisha</Link>
        </p>
        <p className="">
          <Link onClick={handleGetStartedClick} to="business"> Businesses</Link>
        </p>
        <p className="">
          <Link onClick={handleGetStartedClick} to="fortalents"> Talents</Link>
        </p>
        <p className="">
          <Link onClick={handleGetStartedClick} to="blog"> Blog</Link>
        </p>

        <p className="mt-8">Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
      <div data-aos-duration="1000" data-aos="fade-up">
        <h6
          data-aos-duration="1000"
          data-aos="fade-up"
          className="font-semibold ">
         <a href="tel:+27824277902">Contact Us
</a>
        </h6>
        <a href="mailto:info@mozisha.com">info@mozisha.com</a>
        <div className="text-3xl flex gap-4 mt-36">
          <a href="https://www.instagram.com/mozishaorg/" target="_blank">
            <FaInstagram data-aos="zoom-in" className="hover:text-purple-500" />
          </a>
          <a
            href="https://web.facebook.com/mozishaafrica/?_rdc=1&_rdr"
            target="_blank">
            <FaFacebook data-aos="zoom-in" className="hover:text-purple-500" />
          </a>
          <a
            href="https://www.linkedin.com/company/mozisha/?originalSubdomain=ng"
            target="_blank">
            <FaLinkedin data-aos="zoom-in" className="hover:text-purple-500" />
          </a>
          <a href="https://wa.me/+27824277902" target="_blank">
  <FaWhatsapp data-aos="zoom-in" className="hover:text-purple-500" />
</a>          <a href="https://twitter.com/MozishaOrg" target="_blank">
            <FaTwitter data-aos="zoom-in" className="hover:text-purple-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
