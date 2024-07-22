import { useState } from 'react';
import axios from 'axios';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [accountNo, setAccountNo] = useState("");

  const fetchTransactions = async () => {
    if (!accountNo) {
      setError("Account number is required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:4000/public/transaction/${accountNo}`);
      setTransactions(response.data);
    } catch (error) {
      console.error("Fetch error:", error); // Log error for debugging
      setError("Failed to fetch transactions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTransactions();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            placeholder="Enter account number"
            className="p-2 border border-gray-300 rounded mr-2 flex-grow"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded"
          >
            Fetch
          </button>
        </div>
      </form>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {transactions.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Date</th>
                <th className="py-2 px-4 bg-gray-200">Time</th>
                <th className="py-2 px-4 bg-gray-200">Type</th>
                <th className="py-2 px-4 bg-gray-200">Amount</th>
                <th className="py-2 px-4 bg-gray-200">Account No</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td className="border px-4 py-2">{transaction.datetime.date}</td>
                  <td className="border px-4 py-2">{transaction.datetime.time}</td>
                  <td className="border px-4 py-2">{transaction.transType}</td>
                  <td className="border px-4 py-2">{transaction.amount}</td>
                  <td className="border px-4 py-2">{transaction.accountNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
