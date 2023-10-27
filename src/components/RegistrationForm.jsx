import { useState,useRef } from "react";
import { GoogleLogin } from "react-oauth-google";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

import "react-toastify/dist/ReactToastify.css";
const RegistrationForm = () => {
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

      if (response.ok) {setIsLoading(false);

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
    <div className="max-w-sm mx-auto h-screen mt-8 px-4 my-8">
      <h2 className="text-2xl font-semibold mb-4">sign uo to find dignified work</h2>
      <form ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center mt-8">
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
    <div className="text-center">
      <RingLoader color={"#7e22ce"} loading={isLoading} size={50} />
    </div>
  ) : (
    <button
      type="submit"
      className="w-full bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-purple-700  mb-4  transition duration-300"
    >
      Create My Account
    </button>
  )}
      </form>
      {/* 
      /> */}
    </div>
  );
};

export default RegistrationForm;
