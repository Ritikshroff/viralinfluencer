// components/Signup/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Join Us</h1>
      <div className="grid grid-cols-2 gap-4">
        {["Brand", "Influencer", "Agency", "Partner"].map((role) => (
          <button
            key={role}
            onClick={() => navigate(`/signup/${role.toLowerCase()}`)}
            className="bg-[#2269a1] hover:bg-[#2e70a1] text-white font-bold py-2 px-4 rounded"
            {...role === "Agency"  ? { disabled: true } : {}}  {...role === "Partner"  ? { disabled: true } : {}}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
