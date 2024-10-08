import { useState } from "react";
import axios from "axios";

const DeleteAccount = () => {
  const [accNo, setAccNo] = useState("");
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

      const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/admin/delete-acc/${accNo}`,{
      headers: {
            Authorization: `Bearer ${token}`,
      },
    });
      console.log("Account deleted:", response.data);
      setMessage("Account deleted successfully.");
      setAccNo("");
    } catch (err) {
      setError("Failed to delete account.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Delete Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Account Number</label>
          <input
            type="text"
            value={accNo}
            onChange={(e) => setAccNo(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">
          Delete Account
        </button>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default DeleteAccount;
