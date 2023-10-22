// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import img from "../assets/group.jpg";
// function TalentSignUp() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Client-side validation: Check if any input field is empty
//     if (!firstName || !lastName || !email || !password) {
//       alert("Please fill in all the fields");
//       return;
//     }

//     // Client-side validation: Check if the password meets the criteria
//     if (
//       password.length < 8 ||
//       !/[a-zA-Z]/.test(password) ||
//       !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)
//     ) {
//       setPasswordError(
//         "Password must be at least 8 characters long and contain at least one alphabet character and one special character"
//       );
//       return;
//     } else {
//       // Clear the password error message if it was previously displayed
//       setPasswordError("");
//     }

//     // Handle form submission here if all fields are filled and password criteria met
//     console.log("Form submitted with data:", {
//       firstName,
//       lastName,
//       email,
//       password,
//     });

//     // Navigate to the login page when signup is clicked
//     navigate("/login");
//   };

//   return (
//     <div className=" mx-auto  my-10 p-8 bg-white rounded-lg shadow-md">
//       <div className="flex flex-col md:flex-row gap-8  md:h-screen">
//         <div className="md:w-1/2 ">
//           <img src={img} alt="image" className="md:h-screen w-full object-cover rounded-md "/>
//         </div>
//         <div  className="md:w-1/2">
//           <h2 className="text-2xl font-semibold mb-4"> Sign Up</h2>
//           <p className="mb-8">
//             Discover exciting remote roles at the world's best companies, join a
//             vibrant community, and access exclusive learning opportunities and
//             benefits.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="firstName"
//                 className="block text-gray-700 font-medium">
//                 First Name:
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="lastName"
//                 className="block text-gray-700 font-medium">
//                 Last Name:
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-medium">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-medium">
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
//                 required
//               />
//               {passwordError && <p className="text-red-500">{passwordError}</p>}
//             </div>
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 focus:outline-none">
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TalentSignUp;

function TalentSignUp() {
  return (
    <div>
      
    </div>
  )
}

export default TalentSignUp

