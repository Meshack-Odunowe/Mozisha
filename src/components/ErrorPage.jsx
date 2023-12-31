import { NavLink, useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  return (
      <>
        <div className="flex flex-col my-24" >
        <li className="bg-purple-200 py-24 text-center font-bold text-2xl  list-none"> Error! Go Back to Home Page! ‼️</li>
        <NavLink to='/home' className='font-bold bg-purple-800 text-white py-4 px-8 rounded-md text-center' onClick={goHome}>Go Home</NavLink>
        </div>
      </>
      
    
  );
}

export default ErrorPage;
