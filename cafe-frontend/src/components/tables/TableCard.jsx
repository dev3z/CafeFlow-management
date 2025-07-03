import { useNavigate } from "react-router-dom";
import { getAvatarName, getBgColor } from "../../utils"
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa";

const TableCard = ({id, name, status, initials, seats}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (name) => {
    if(status === "Booked") return;

    const table = { tableId: id, tableNo: name }
    dispatch(updateTable({table}))
    navigate(`/menu`);
  };

  return (
    <div onClick={() => handleClick(name)} key={id} className="w-[300px] hover:bg-retroHover bg-retroCard border border-retroBorder p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-retroPrimary text-xl font-semibold">Table <FaLongArrowAltRight className="text-retroSecondary ml-2 inline" /> {name}</h1>
        <p className={`${status === "Booked" ? "text-retroGreen bg-green-900/30 border border-green-700" : "bg-retroAccent text-retroBg border border-retroOrange"} px-2 py-1 rounded-lg font-semibold`}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-8">
        <h1 className={`text-retroPrimary rounded-full p-5 text-xl font-bold`} style={{backgroundColor : initials ? getBgColor() : "var(--bg-tertiary)"}} >{getAvatarName(initials) || "N/A"}</h1>
      </div>
      <p className="text-retroSecondary text-xs">Seats: <span className="text-retroOrange font-semibold">{seats}</span></p>
    </div>
  );
};

export default TableCard;
