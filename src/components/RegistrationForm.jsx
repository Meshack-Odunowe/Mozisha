import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import img from "../assets/howtoregister.jpg";
import "react-toastify/dist/ReactToastify.css";
import { FcSalesPerformance } from "react-icons/fc"
import { GrUserAdmin } from "react-icons/gr"
import { SiAltiumdesigner } from "react-icons/si"
import {BiNetworkChart} from "react-icons/bi"
import { TbSeo } from "react-icons/tb"
import {AiOutlineDatabase} from "react-icons/ai"
import {SiCoinmarketcap} from "react-icons/si"
// import { GiReceiveMoney } from "react-icons/gi";
// import {MdComputer} from "react-icons/md"
// import { HiOutlineComputerDesktop } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const RegistrationForm = () => {
  useEffect(() => {
   AOS.init();
   AOS.refresh();
 }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_f47hszb",
        "template_ond7ufa",
        form.current, // Use the ref to the form element
        "oCtQ4YXyDy5Xm4BQm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Check form validity before proceeding
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === ""
    ) {
      // Display a toast notification for form validation errors
      toast.error("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // Send the email
    sendEmail();

    const url =
      "https://mozisha-47b2f-default-rtdb.firebaseio.com/talents.json";

    const formDataToSave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSave),
      });

      if (response.ok) {
        setIsLoading(false);

        // Display a success toast notification
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 2000,
          onClose: () => {
            // Redirect to the success page after success
            navigate("/success");
          },
        });
      } else {
        // Display an error toast notification if data could not be saved
        toast.error("Data could not be saved.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      // Display an error toast notification for general errors
      toast.error("An error occurred.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Error:", error);
    }

    // Clear the form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div data-aos-duration="2000"
          data-aos="fade-up">
        <div data-aos-duration="2000"
          data-aos="fade-up" className="flex mx-auto h-screen max-w-[1240px] gap-8 justify-start items-center  leading-8 flex-col md:flex-row relative">
          <div data-aos-duration="2000"
          data-aos="fade-up" className="mx-4 md:w-1/2 ">
            <h1 className="text-center md:text-start">
              <span className="text-2xl md:text-8xl font-bold mb-16 text-purple-700">
                Monetize
              </span>{" "}
              <span className="text-red-500 text-2xl md:text-8xl font-bold">
                Your Skills
              </span>
            </h1>
            <div data-aos-duration="2000"
          data-aos="fade-up" className="mx-auto md:text-start text-center mt-8">
              <p>
                At Mozisha, we offer dignified and fulfilling employment
                opportunities to African talents through our partnerships with
                global businesses.
              </p>
            </div>
          </div>
          <div data-aos-duration="2000"
          data-aos="fade-up" className="rounded- pb-20">
            <img
              src={img}
              alt="group photo"
              className="max-h-[600px] px-4 md:px-0 md:w-[600px] rounded-lg object-cover mb-16"
            />
          </div>
        </div>
        <div data-aos-duration="2000"
          data-aos="fade-up" className=" max-w-[1240px] flex-col md:flex-row mx-auto gap-8 h-screen  px-4 w-fit hidden md:flex">
          <div data-aos-duration="2000"
          data-aos="fade-up" className=" bg-green-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center  mb-8">
            <p className="text-9xl font-extrabold text-red-500 text-center ">
              1
            </p>
            <h1 className="text-center leading-8 text-purple-500 text-sm ">
              Fill out the job application forms
            </h1>
          </div>
          <div data-aos-duration="2000"
          data-aos="fade-up" className="bg-blue-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center">
    <p className="text-9xl font-extrabold text-yellow-500 text-center pt-8">
        2
    </p>
    <h1 className="text-center leading-8 text-red-500 text-sm">Interview</h1>
</div>

<div data-aos-duration="2000"
          data-aos="fade-up" className="bg-red-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center">
    <p className="text-9xl font-extrabold text-yellow-900 text-center pt-8">
        3
    </p>
    <h1 className="text-center leading-8 text-blue-500 text-sm">
        Complete short skills assessments
    </h1>
</div>

<div data-aos-duration="2000"
          data-aos="fade-up" className="bg-purple-200 rounded-full w-[400px] h-[300px] flex flex-col items-center justify-center">
    <p className="text-9xl font-extrabold text-purple-500 text-center pt-8">
        4
    </p>
    <h1 className="text-center leading-8 text-red-500 text-sm">
        Final interview and job placement.
    </h1>
</div>
</div>
        <div data-aos-duration="2000"
          data-aos="fade-up" className="block md:hidden h-screen pt-16 text-center mx-4">
          <div data-aos-duration="2000"
          data-aos="fade-up" className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-purple-900 text-center ">
              1
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Fill out the job application forms
            </h1>
          </div>
        </div>
        <div data-aos-duration="2000"
          data-aos="fade-up" className="block md:hidden h-screen pt-16 text-center mx-4">
          <div data-aos-duration="2000"
          data-aos="fade-up" className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-red-600 text-center ">
              2
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Interview{" "}
            </h1>
          </div>
        </div>
        <div data-aos-duration="2000"
          data-aos="fade-up" className="block md:hidden h-screen pt-16 text-center mx-4">
          <div data-aos-duration="2000"
          data-aos="fade-up" className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-purple-700 text-center ">
              3
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Complete short skills assessment{" "}
            </h1>
          </div>
        </div>
        <div data-aos-duration="2000"
          data-aos="fade-up" className="block md:hidden h-screen pt-16 text-center mx-4">
          <div data-aos-duration="2000"
          data-aos="fade-up" className="bg-red-100 rounded-full h-[300px] w-[300px] mx-auto flex flex-col items-center justify-center">
            <p className="text-9xl font-extrabold text-purple-900 text-center ">
              4
            </p>
            <h1 className="text-center leading-8 text-purple-500">
              Final Interview and Job Placement{" "}
            </h1>
          </div>
        </div>

        <div data-aos-duration="2000"
          data-aos="fade-up" className="h-screen bg-purple-100 flex flex-col items-left py-16 mb-16">
          <h2 className="mx-auto text-left">
            Mozisha offers jobs in the following area:
          </h2>
          <ul className="text-center max-w-lg md:mx-auto h-screen mx-4">
              {/* <span className="flex flex-row md:items-center gap-4 mt-16">
              <FcSalesPerformance className="text-3xl text-left"/> 
              <li> Marketing (digital marketing, graphics
                designs, Sales )</li>
              </span> */}
              <span className="flex flex-row md:items-center gap-4 mt-16">
              <SiCoinmarketcap className="text-3xl text-left"/> 
              <li> Digital Marketing</li>
              </span>
              <span className="flex flex-row md:items-center gap-4 mt-8">
              <FcSalesPerformance className="text-3xl text-left"/> 
              <li> Sales and BD</li>
              </span>
              <span className="flex flex-row md:items-center gap-4 mt-8">
              <TbSeo className="text-3xl text-left"/> 
              <li> SEO</li>
              </span>
              <span className="flex flex-row md:items-center gap-4 mt-8">
              <AiOutlineDatabase className="text-3xl text-left"/> 
              <li> Data and Reporting</li>
              </span>
              <span className="flex flex-row md:items-center gap-4 mt-8">
              <SiAltiumdesigner className="text-3xl text-left"/> 
              <li> Designer</li>
              </span>
              <span className="flex flex-row md:items-center gap-4 mt-8">
              <BiNetworkChart className="text-3xl text-left"/> 
              <li> Operation</li>
              </span>
              <span className="flex flex-row md:items-center gap-4 mt-8">
              <GrUserAdmin className="text-3xl text-left"/> 
              <li> Executive Admin</li>
              </span>
             
              
            
          </ul>
        </div>

        <div data-aos-duration="2000"
          data-aos="fade-up" className="max-w-sm mx-auto h-screen mt-8 px-4 my-8">
          <h2 className="text-2xl font-semibold mb-4">
            Sign up to find dignified work.
          </h2>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 justify-center mt-8">
            <div  className="mb-4">
              <label
                htmlFor="firstName"
                className="block mb-4 text-gray-600 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
            </div>
            <div  className="mb-4">
              <label
                htmlFor="lastName"
                className="block  mb-4  text-gray-600 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce] outline-none"
              />
            </div>
            <div  className="mb-4">
              <label
                htmlFor="email"
                className="block  mb-4  text-gray-600 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block  mb-4  text-gray-600 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-[#7e22ce]"
              />
            </div>
            {/* Conditionally render the spinner */}
            {isLoading ? (
              <div >
                <RingLoader color={"#7e22ce"} loading={isLoading} size={50} />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-purple-700  mb-4  transition duration-300">
                Create My Account
              </button>
            )}
          </form>
          {/* 
      /> */}
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
