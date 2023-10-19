// TalentLogin.js
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TalentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform client-side validation (e.g., check if fields are not empty)
    if (!email || !password) {
      setLoginError('Please fill in both email and password.');
      return;
    }

    // You should make an API request to your server here to validate the credentials
    // Replace this with your actual server-side validation logic
    // For demonstration, we'll check hardcoded credentials.
    const validEmail = ''; // Replace with your registered email
    const validPassword = ''; // Replace with your registered password

    if (email === validEmail && password === validPassword) {
      // Successful login, clear any previous login error
      setLoginError('');

      // Redirect to the dashboard or any desired page
      navigate('/dashboard');
    } else {
      // Invalid credentials, display an error message
      setLoginError('Invalid email or password.');
    }
  };

  return (
    <div className="mx-auto h-screen mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TalentLogin;
