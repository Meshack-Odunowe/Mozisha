import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import About from "./components/About";

import Testimonial from "./components/Testimonial";

import Footer from "./components/Footer";

import TalentLogin from "./components/TalentLogin";
import TalentSignUp from "./components/TalentSignUp";
import Dashboard from "./components/Dashboard";
import WorkInProgress from "./components/WorkInProgress";
import Business from "./components/Business";
import SuccessPage from "./components/SuccessPage";
import { ToastContainer } from "react-toastify";
import ForTalents from "./components/ForTalents";
import FreelancerSignUp from "./components/FreelancerSignUp";
import StudentSignUp from "./components/StudentSignUp";
import RegistrationForm from "./components/RegistrationForm";

function App() {
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
            <Route path="/login" element={<TalentLogin />} />
            <Route path="/signup" element={<TalentSignUp />} />
            <Route path="/business" element={<Business />} />
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            <Route path="/student-signup" element={<StudentSignUp />} />
            <Route path="/freelancer-signup" element={<FreelancerSignUp />} />
            <Route path="/workinprogress" element={<WorkInProgress />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/fortalents" element={<ForTalents />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>{" "}
      <ToastContainer />
    </div>
  );
}

export default App;
