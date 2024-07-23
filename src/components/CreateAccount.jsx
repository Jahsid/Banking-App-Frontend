import { useState } from "react";
import axios from "axios";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [initBalance, setInitBalance] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        setMessage("You must be logged in to create an account.");
        return;
      }

      const response = await axios.post("http://localhost:4000/admin/create-acc", {
        name,
        email,
        initBalance: parseFloat(initBalance),
      },
    {
      headers: {
            Authorization: `Bearer ${token}`,
      },
    });
      console.log("Account created:", response.data);
      setMessage("Account created successfully.");
      setName("");
      setEmail("");
      setInitBalance("");
    } catch (err) {
      console.error("Error creating account:", err);
      setError("Failed to create account.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Initial Balance</label>
          <input
            type="number"
            value={initBalance}
            onChange={(e) => setInitBalance(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">
          Create Account
        </button>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default CreateAccount;
