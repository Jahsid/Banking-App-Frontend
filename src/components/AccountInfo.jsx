import { useState } from 'react';
import axios from 'axios';

const AccountInfo = () => {
  const [accountNo, setAccountNo] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);

  const fetchAccountInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/public/acc-info/${accountNo}`);
      setAccountInfo(response.data);
    } catch (error) {
      alert('Failed to fetch account info: ' + error.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Account Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block">Account Number</label>
          <input type="text" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button onClick={fetchAccountInfo} className="bg-teal-500 text-white py-2 px-4 rounded">Fetch Account Info</button>
      </div>
      {accountInfo && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Account Details</h3>
          <p><strong>Holder Name:</strong> {accountInfo.holderName}</p>
          <p><strong>Holder Email:</strong> {accountInfo.holderEmail}</p>
          <p><strong>Balance:</strong> ${accountInfo.balance}</p>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;