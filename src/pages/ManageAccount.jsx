import CreateAccount from "../components/CreateAccount";
import UpdateAccount from "../components/UpdateAccount";
import DeleteAccount from "../components/DeleteAccount";
import { useNavigate } from "react-router-dom";

const ManageAccount = () => {
    const navigate = useNavigate();
    
  return (
    <div>
      <header className="bg-teal-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyBankApp</div>
          <div className="space-x-4">
            <button
              className="bg-white text-teal-500 px-4 py-2 rounded"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
      <CreateAccount />
      <UpdateAccount />
      <DeleteAccount />
    </div>
  );
};

export default ManageAccount;
