import { useState } from "react";
import {  BsPersonWorkspace } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function ForTalents() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleFreelancerClick = () => {
    setSelectedSection("freelancer");
  };

  const handleStudentClick = () => {
    setSelectedSection("student");
  };

  const sectionClassName = (section) => {
    return `border p-6 shadow-lg rounded-md ${
      selectedSection === section ? "bg-purple-700 text-white" : "bg-purple-50"
    }`;
  };

  const iconClassName = (section) => {
    return selectedSection === section ? "text-white" : "text-purple-700";
  };

  return (
    <div className="h-screen max-w-[800px] mx-auto">
      <h1 className="text-center font-bold text-3xl my-8 px-4">
        Join as a freelancer or student?
      </h1>
      <div className="px-4 mx-auto flex flex-col justify-between md:flex-row gap-8">
        <div onClick={handleFreelancerClick} className={sectionClassName("freelancer")}>
          <div className="flex justify-between mx-4">
            <span className={`text-4xl text-center font-bold ${iconClassName("freelancer")}`}>
              <BsPersonWorkspace />
            </span>
          </div>
          <p className={`mx-4 m-8 text-2xl`}>
            I am a freelancer, looking for work.
          </p>
        </div>
        <div onClick={handleStudentClick} className={sectionClassName("student")}>
          <div className="flex justify-between mx-4">
            <span className={`text-4xl text-center font-bold ${iconClassName("student")}`}>
              <PiStudentFill />
            </span>
          </div>
          <p className={`mx-4 m-8 text-2xl`}>
            I am a student, looking to learn.
          </p>
        </div>
      </div>
      <Link to={selectedSection === "freelancer" ? "/freelancer-signup" : "/student-signup"}>
        <button className="text-center mx-auto bg-purple-700 text-white px-4 py-2 rounded-md flex items-center justify-center mt-8">
          Sign up as {selectedSection === "freelancer" ? "a freelancer" : "a student"}
        </button>
      </Link>
    </div>
  );
}

export default ForTalents;
