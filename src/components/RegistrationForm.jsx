import { useState } from "react";
import { GoogleLogin } from "react-oauth-google";
import emailjs from "@emailjs/browser";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendEmail = async (data) => {
    try {
      await emailjs.send(
        "service_1kjbpag",
        "template_81k3zcp",
        data,
        "oCtQ4YXyDy5Xm4BQm"
      );
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending error:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      to_email: formData.email,
      from_name: "Your Name",
      // Add other email content as needed
    };

    // Send the email
    sendEmail(emailData);

    // Handle form submission, e.g., sending data to your server and sending an email.
    // You can use email.js or any other library to send an email here.
  };

  return (
    <div className="max-w-sm mx-auto h-screen mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
      <form
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
            className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
            className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
            className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
            className="w-full border py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-purple-700  mb-4  transition duration-300">
          Create My Account
        </button>
      </form>
      <p className="text-gray-600 text-sm mb-8 mt-2">
        Already have an account?{" "}
        <a href="/login" className="text-purple-500 font-bold  hover:underline">
          Login
        </a>
      </p>

      {/* Google Authentication Component */}
      <GoogleLogin
        onSuccess={(user) => {
          console.log("Google authentication successful:", user);
          // Handle the Google authentication response (e.g., log in the user).
        }}
        onError={(error) => {
          console.error("Google authentication error:", error);
          // Handle any authentication errors.
        }}
      />
    </div>
  );
};

export default RegistrationForm;
