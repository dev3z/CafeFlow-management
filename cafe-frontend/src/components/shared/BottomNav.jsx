import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../redux/slices/customerSlice";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if(guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  }
  const decrement = () => {
    if(guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  }

  const isActive = (path) => location.pathname === path;

  const handleCreateOrder = () => {
    // send the data to store
    dispatch(setCustomer({name, phone, guests: guestCount}));
    navigate("/tables");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-retroCard border-t border-retroBorder p-2 h-16 flex justify-around backdrop-blur-sm">
      <button
        onClick={() => navigate("/")}
        className={`flex items-center justify-center font-bold transition-all duration-300 ${
          isActive("/") ? "text-retroPrimary bg-retroAccent" : "text-retroSecondary hover:text-retroPrimary hover:bg-retroHover"
        } w-[300px] rounded-[20px]`}
      >
        <FaHome className="inline mr-2" size={20} /> <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className={`flex items-center justify-center font-bold transition-all duration-300 ${
          isActive("/orders") ? "text-retroPrimary bg-retroAccent" : "text-retroSecondary hover:text-retroPrimary hover:bg-retroHover"
        } w-[300px] rounded-[20px]`}
      >
        <MdOutlineReorder className="inline mr-2" size={20} /> <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className={`flex items-center justify-center font-bold transition-all duration-300 ${
          isActive("/tables") ? "text-retroPrimary bg-retroAccent" : "text-retroSecondary hover:text-retroPrimary hover:bg-retroHover"
        } w-[300px] rounded-[20px]`}
      >
        <MdTableBar className="inline mr-2" size={20} /> <p>Tables</p>
      </button>
      <button className="flex items-center justify-center font-bold text-retroSecondary hover:text-retroPrimary hover:bg-retroHover w-[300px] rounded-[20px] transition-all duration-300">
        <CiCircleMore className="inline mr-2" size={20} /> <p>More</p>
      </button>

      <button
        disabled={isActive("/tables") || isActive("/menu")}
        onClick={openModal}
        className="absolute bottom-6 bg-gradient-to-r from-retroOrange to-retroYellow hover:from-retroYellow hover:to-retroOrange disabled:opacity-50 disabled:cursor-not-allowed text-retroBg rounded-full p-4 items-center transition-all duration-300 transform hover:scale-105"
      >
        <BiSolidDish size={40} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-retroSecondary mb-2 text-sm font-medium">Customer Name</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-retroCard border border-retroBorder">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" placeholder="Enter customer name" id="" className="bg-transparent flex-1 text-retroPrimary focus:outline-none"  />
          </div>
        </div>
        <div>
          <label className="block text-retroSecondary mb-2 mt-3 text-sm font-medium">Customer Phone</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-retroCard border border-retroBorder">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" name="" placeholder="+91-9999999999" id="" className="bg-transparent flex-1 text-retroPrimary focus:outline-none"  />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-retroSecondary">Guest</label>
          <div className="flex items-center justify-between bg-retroCard border border-retroBorder px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-retroOrange hover:text-retroYellow text-2xl transition-colors duration-200">&minus;</button>
            <span className="text-retroPrimary font-semibold">{guestCount} Person</span>
            <button onClick={increment} className="text-retroOrange hover:text-retroYellow text-2xl transition-colors duration-200">&#43;</button>
          </div>
        </div>
        <button onClick={handleCreateOrder} className="w-full bg-gradient-to-r from-retroOrange to-retroYellow hover:from-retroYellow hover:to-retroOrange text-retroBg rounded-lg py-3 mt-8 font-semibold transition-all duration-300">
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
