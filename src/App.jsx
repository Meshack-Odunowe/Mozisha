import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import About from "./components/About";

import Testimonial from "./components/Testimonial";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

import TalentSignUp from "./components/TalentSignUp";
import Dashboard from "./components/Dashboard";
import WorkInProgress from "./components/WorkInProgress";
import Business from "./components/Business";
import SuccessPage from "./components/SuccessPage";
import { ToastContainer } from "react-toastify";
import ForTalents from "./components/ForTalents";
import Students from "./components/Students";
import RegistrationForm from "./components/RegistrationForm";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Homes from "./pages/Homes";
import EditPost from "./pages/EditPost";
import FullPost from './pages/FullPost'
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));







  return (
    <div>
      <Router>
        <NavBar />
       
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/testimonials" element={<Testimonial />} />
            {/* <Route path="/login" element={<TalentLogin />} /> */}
            <Route path="/signup" element={<TalentSignUp />} />
            <Route path="/business" element={<Business />} />
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            <Route path="/students" element={<Students />} />
            {/* <Route path="/freelancer-signup" element={<FreelancerSignUp />} /> */}
            <Route path="/workinprogress" element={<WorkInProgress />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/fortalents" element={<ForTalents />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/blog" element={<Homes isAuth={isAuth} />} />
            <Route
              path="/createpost"
              element={<CreatePost isAuth={isAuth} />}
            />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/edit-post/:postId" element={<EditPost />} />
          </Route>
           {/* Add a new route for displaying full posts */}
           <Route path="/full-post/:postId" element={<FullPost isAuth={isAuth}/>} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <ToastContainer autoClose={5000} />
      </Router>{" "}
    </div>
  );
}

export default App;