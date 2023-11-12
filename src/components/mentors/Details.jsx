import { FaDesktop } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { SiCoinmarketcap } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineSell } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { Link } from "react-router-dom";
function Details() {
  function handleGetStartedClick() {
    window.scrollto(0, 0);
  }
  return (
    <div className="my-24">
      <h1 className="leading-8 font-bold  text-2xl  text-center">
        Acquire knowledge and advance your skills across various domains at no
        cost.
      </h1>
      <p className=" text-center leading-8 my-8">
        Discover mentors specializing in product fields worldwide.
      </p>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
        <div className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <FaDesktop className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-purple-500">Design</h2>
            <p className="text-teal-700 font-bold">Creative problem-solving</p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-green-100 shadow-md  px-4 py-4 rounded-md w-full">
          <div>
            <SiCoinmarketcap className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-purple-500">
              Marketing
            </h2>
            <p className="text-teal-700 font-bold">
              Strategically promoting products
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <BsPencilSquare className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-purple-700">
              Content Writing
            </h2>
            <p className="text-teal-700 font-bold">
              Crafting compelling narratives
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <GrTechnology className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-purple-700">
              Technology
            </h2>
            <p className="text-teal-700 font-bold">
              Advancing innovation and progress{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <MdOutlineSell className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-purple-700">Sales</h2>
            <p className="text-teal-700 font-bold">Driving business growth</p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-green-100 shadow-md w-full  px-4 py-4 rounded-md ">
          <div>
            <ImStatsBars className="text-3xl text-teal-700" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-purple-700">
              Data science
            </h2>
            <p className="text-teal-700 font-bold">
              Extracting valuable insights and knowledge from data .
            </p>
          </div>
        </div>
      </div>
      <button className=" text-center font-bold my-8 bg-purple-700 text-white px-6 py-2 rounded-md cursor-pointer hover:underline">
        <Link to="explore" onClick={handleGetStartedClick}>Explore Mentors</Link>{" "}
      </button>
    </div>
  );
}

export default Details;
