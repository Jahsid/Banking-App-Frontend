import { useNavigate } from "react-router-dom";
import AccountInfo from "../components/AccountInfo";
import TransactionForm from "../components/TransactionForm";
import TransactionHistory from "../components/TransactionHistory";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
}

  return (
    <div>
      <header className="bg-teal-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyBankApp</div>
          <div className="space-x-4">
            <button
              className="bg-white text-teal-500 px-4 py-2 rounded"
              onClick={() => navigate("/manage-acc")}
            >
              Manage Account
            </button>
            <button
              className="bg-white text-teal-500 px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
      <AccountInfo />
      <TransactionForm />
      <TransactionHistory />
    </div>
  );
};

export default Home;
