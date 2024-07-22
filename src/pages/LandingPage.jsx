import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-teal-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyBankApp</div>
          <div className="space-x-4">
            <button
              className="bg-white text-teal-500 px-4 py-2 rounded"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="bg-white text-teal-500 px-4 py-2 rounded"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyBankApp</h1>
        <img
          src="https://imgs.search.brave.com/SK9j4o5_CGfRYrDdKO4OuFXgV2NEA080B77OLsn45Jc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI3/Njc0NzU0L3Bob3Rv/L2JhbmstY291bnRl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9TlNMbTYzYTUx/MjhLTkJQM05qVTFv/dlFSVklXSmtLUng3/bTBuMHczQnM5TT0"
          alt="Bank Counter"
          className="h-[450px] w-[500px] mx-auto mb-4"
        />
        <p className="text-lg">
          Your trusted partner in managing finances. Join us today to experience
          seamless banking.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 MyBankApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
