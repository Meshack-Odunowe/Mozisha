import { signInWithPopup } from "firebase/auth";
import {auth, provider} from '../firebase/firebase'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import img from "../assets/group.jpg"
function Login( ){
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      navigate("/blog");
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 h-screen px-4 ">
      <div className="bg-purple-100 relative md:rounded-e-full ">
        <img src={img} alt="image" className=" overflow-hidden  h-[700px] object-cover md:rounded-e-full shadow-2xl rounded-md" />
      </div>

      <div className=" flex flex-col justify-center items-center " >
        <div className="shadow-2xl border p-8 rounded-md">

      <p className="text-center font-bold  my-8">Sign In With Google to Continue</p>
      <button className="py-2 flex items-center w-fit gap-4 px-6 bg-purple-700 rounded-md text-white" onClick={signInWithGoogle} >
        <span className="text-2xl"><FcGoogle/></span>
        Sign in with Google
      </button>
        </div>
    </div>
    </div>
  );
}

export default Login;
