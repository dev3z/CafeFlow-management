import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { formatDateAndTime, getAvatarName } from "../../utils/index";

const OrderCard = ({ key, order }) => {
  console.log(order);
  return (
    <div key={key} className="w-[500px] bg-retroCard border border-retroBorder p-4 rounded-lg mb-4 hover:bg-retroHover transition-all duration-300">
      <div className="flex items-center gap-5">
        <button className="bg-gradient-to-r from-retroOrange to-retroYellow p-3 text-xl font-bold rounded-lg text-retroBg">
          {getAvatarName(order.customerDetails.name)}
        </button>
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-retroPrimary text-lg font-semibold tracking-wide">
              {order.customerDetails.name}
            </h1>
            <p className="text-retroSecondary text-sm">#{Math.floor(new Date(order.orderDate).getTime())} / Dine in</p>
            <p className="text-retroSecondary text-sm">Table <FaLongArrowAltRight className="text-retroSecondary ml-2 inline" /> {order.table.tableNo}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {order.orderStatus === "Ready" ? (
              <>
                <p className="text-retroGreen bg-green-900/30 border border-green-700 px-2 py-1 rounded-lg">
                  <FaCheckDouble className="inline mr-2" /> {order.orderStatus}
                </p>
                <p className="text-retroSecondary text-sm">
                  <FaCircle className="inline mr-2 text-retroGreen" /> Ready to serve
                </p>
              </>
            ) : (
              <>
                <p className="text-retroYellow bg-yellow-900/30 border border-yellow-700 px-2 py-1 rounded-lg">
                  <FaCircle className="inline mr-2" /> {order.orderStatus}
                </p>
                <p className="text-retroSecondary text-sm">
                  <FaCircle className="inline mr-2 text-retroYellow" /> Preparing your order
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-retroSecondary">
        <p>{formatDateAndTime(order.orderDate)}</p>
        <p>{order.items.length} Items</p>
      </div>
      <hr className="w-full mt-4 border-t-1 border-retroBorder" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-retroPrimary text-lg font-semibold">Total</h1>
        <p className="text-retroOrange text-lg font-semibold">₹{order.bills.totalWithTax.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderCard;
