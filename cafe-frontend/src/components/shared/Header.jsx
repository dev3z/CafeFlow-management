import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-dark-900 to-dark-800 border-b border-dark-700 shadow-dark">
      {/* LOGO */}
      <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <img src={logo} className="h-10 w-10 rounded-lg transition-transform group-hover:scale-110" alt="cafeflow logo" />
          <div className="absolute inset-0 bg-gradient-retro opacity-20 rounded-lg"></div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">
            CafeFlow
          </h1>
          <p className="text-xs text-retro-orange font-medium">Indian Cafe</p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-dark-800 border border-dark-700 rounded-2xl px-6 py-3 w-[500px] shadow-dark hover:border-retro-orange transition-all duration-300">
        <FaSearch className="text-retro-orange" />
        <input
          type="text"
          placeholder="Search dishes, orders, tables..."
          className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        {userData.role === "Admin" && (
          <div onClick={() => navigate("/dashboard")} className="bg-dark-800 border border-dark-700 rounded-xl p-3 cursor-pointer hover:bg-gradient-retro hover:border-retro-orange transition-all duration-300 group">
            <MdDashboard className="text-white group-hover:text-white text-xl" />
          </div>
        )}
        <div className="bg-dark-800 border border-dark-700 rounded-xl p-3 cursor-pointer hover:bg-gradient-retro hover:border-retro-orange transition-all duration-300 group relative">
          <FaBell className="text-white group-hover:text-white text-xl" />
          <div className="absolute -top-1 -right-1 bg-retro-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer bg-dark-800 border border-dark-700 rounded-xl px-4 py-2 hover:border-retro-orange transition-all duration-300">
          <div className="relative">
            <FaUserCircle className="text-retro-orange text-3xl" />
            <div className="absolute bottom-0 right-0 bg-retro-mint h-3 w-3 rounded-full border-2 border-dark-800"></div>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-sm text-white font-semibold tracking-wide">
              {userData.name || "TEST USER"}
            </h1>
            <p className="text-xs text-retro-orange font-medium">
              {userData.role || "Manager"}
            </p>
          </div>
          <div 
            onClick={handleLogout}
            className="ml-3 p-2 rounded-lg hover:bg-retro-red hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
          >
            <IoLogOut className="text-gray-400 hover:text-retro-red text-lg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
