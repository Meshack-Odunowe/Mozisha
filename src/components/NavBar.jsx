import { Link, useNavigate } from "react-router-dom";
import img from "../assets/mozishaweb.svg";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { LiaTimesSolid } from "react-icons/lia";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };
  const handleGetStartedClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  }; // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Define the CSS class based on the isNavbarFixed state
  const navbarClass = isNavbarFixed
    ? "fixed top-0 left-0 right-0  "
    : "sticky top-0 ";
  const navigate = useNavigate();
  const navigateToHome = () => {
    // Use the `navigate` function to redirect to the homepage
    navigate("/");
    window.scrollTo(0, 0);

  };
  return (
    <>
      <div>
        <header className={`${navbarClass} bg-white z-30`}>
          <nav className="flex relative md:hidden py-8  mx-4 justify-between items-center ">
            <Link to="/">
              <img className="w-40 " src={img} alt="" />
            </Link>
            <ul
              className={`h-screen text-purple-700   top-8 z-20 justify-center items-center absolute bg-white underline cursor-pointer w-full flex flex-col leading-[80px] font-semibold text-xl ${
                menuOpen ? "block" : "hidden"
              }`}>
              <li onClick={closeMenu} className="  cursor-pointer">
                <Link to="/">Home</Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="about" className="  cursor-pointer">
                  About Us
                </Link>
              </li>

              <li onClick={closeMenu} className="  cursor-pointer">
                <Link to="business"> Businesses</Link>
              </li>
              <li onClick={closeMenu} className="  cursor-pointer">
                <Link to="fortalents"> Talents</Link>
              </li>
              <li onClick={closeMenu} className="  cursor-pointer">
                <Link to="blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <div>
            <FcMenu
              className={`absolute top-6 right-4 text-3xl z-30 md:hidden ${
                menuOpen ? "hidden" : "block"
              }`}
              onClick={toggleMenu}
            />
            {menuOpen && (
              <LiaTimesSolid
                className={`absolute md:hidden top-6 right-4 text-3xl z-30`}
                onClick={closeMenu}
              />
            )}
          </div>
        </header>
      </div>

      {/* ********************************************* DESKTOP VERSION *******************************************/}

      <div
        className={`md:flex hidden justify-between items-center  py-8 mx-auto   ${navbarClass} px-24 bg-white z-30`}>
        <div>
          <img src={img} alt="logo" className="w-48" />
        </div>
        <div>
          <ul className="flex justify-between gap-8 font-extrabold ">
            <li className="px-4 py-4">
              <Link onClick={navigateToHome} to="/">
                Home
              </Link>
            </li>

            <li onClick={handleGetStartedClick} className="px-4 py-4 ">
              <Link to="about">About Us</Link>
            </li>
            <li onClick={handleGetStartedClick} className="px-4 py-4">
              <Link to="business"> Businesses</Link>
            </li>

            <li onClick={handleGetStartedClick} className="px-4 py-4">
              <Link to="fortalents"> Talents</Link>
            </li>
            <li className="px-4 py-4">
              <Link to="workinprogress">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
