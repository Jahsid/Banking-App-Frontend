import { useState } from 'react';
import axios from 'axios';

const TransactionForm = () => {
  const [transactionData, setTransactionData] = useState({
    amount: '',
    accountNo: '',
    perior: '',
  });
  const [transactionType, setTransactionType] = useState('deposit');

  const handleChange = (e) => {
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = {
      deposit: 'deposit',
      withdraw: 'withdraw',
      // transfer: 'transfer',
    }[transactionType];

    try {
      const response = await axios.post(`http://localhost:4000/transaction/${endpoint}`, transactionData);
      alert('Transaction successful!');
      console.log('Transaction:', response.data);
    } catch (error) {
      alert('Transaction failed: ' + error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Amount</label>
          <input type="number" name="amount" value={transactionData.amount} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div>
          <label className="block">Account Number</label>
          <input type="text" name="accountNo" value={transactionData.accountNo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        {transactionType === 'transfer' && (
          <div>
            <label className="block">Recipient Account Number</label>
            <input type="text" name="perior" value={transactionData.perior} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
          </div>
        )}
        <div>
          <label className="block">Transaction Type</label>
          <select name="transactionType" value={transactionType} onChange={(e) => setTransactionType(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
            {/* <option value="transfer">Transfer</option> */}
          </select>
        </div>
        <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default TransactionForm;