import { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaFolder,
  FaWallet,
  FaUserCircle,
  FaBars,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex"> 
      {/* Sidebar */}
      <div
        className={`bg-white shadow-md transition-transform transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 w-64 fixed lg:static z-50
        h-full lg:h-screen`} 
      >
        {/* Brand Name and Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-2xl font-bold text-[#2269a1]">Viralfluencer</div>
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-4">
          <NavItem icon={<FaHome />} label="Overview" />
          <NavItem icon={<FaChartBar />} label="Analytics" />
          <NavItem icon={<FaFolder />} label="Campaigns" />
          <NavItem icon={<FaWallet />} label="Earnings" />
        </nav>

        {/* User Info */}
        <div className="absolute bottom-0 w-full p-4 border-t flex items-center">
          <FaUserCircle className="text-4xl text-gray-500" />
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">user@example.com</p>
            <button className="text-xs text-red-500 flex items-center hover:underline">
              <FaSignOutAlt className="mr-1" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1">
        {/* Hamburger Button for Mobile */}
        <button
          className="lg:hidden p-4 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="text-2xl" />
        </button>
        {/* Placeholder for Main Content */}
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div
    className="flex items-center p-4 mx-4 rounded-lg hover:bg-[#eaf4fb] text-gray-700 cursor-pointer"
  >
    <span className="text-xl mr-3">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;