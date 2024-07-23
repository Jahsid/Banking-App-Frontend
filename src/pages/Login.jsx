import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/public/login', { username, password });
      localStorage.setItem("token", response.data.token);
      console.log('Login successful:', response.data);
      navigate('/home');
      setMessage("Login successful!");
    } catch (err) {
      setMessage("Login failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-yellow-200">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block">Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {message && <p>{message}</p>}
        <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;