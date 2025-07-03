import { FaCheckDouble, FaLongArrowAltRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils/index";

const OrderList = ({ order }) => {
  return (
    <div className="flex items-center gap-5 mb-3 p-3 bg-retroHover hover:bg-retroBgTertiary rounded-lg border border-retroBorder transition-all duration-300">
      <button className="bg-gradient-to-r from-retroOrange to-retroYellow p-3 text-xl font-bold rounded-lg text-retroBg">
        {getAvatarName(order.customerDetails.name)}
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-retroPrimary text-lg font-semibold tracking-wide">
            {order.customerDetails.name}
          </h1>
          <p className="text-retroSecondary text-sm">{order.items.length} Items</p>
        </div>

        <h1 className="text-retroOrange font-semibold border border-retroOrange rounded-lg p-1 px-2">
          Table <FaLongArrowAltRight className="text-retroSecondary ml-2 inline" />{" "}
          {order.table.tableNo}
        </h1>

        <div className="flex flex-col items-end gap-2">
          {order.orderStatus === "Ready" ? (
            <>
              <p className="text-retroGreen bg-green-900/30 border border-green-700 px-2 py-1 rounded-lg">
                <FaCheckDouble className="inline mr-2" /> {order.orderStatus}
              </p>
            </>
          ) : (
            <>
              <p className="text-retroYellow bg-yellow-900/30 border border-yellow-700 px-2 py-1 rounded-lg">
                <FaCircle className="inline mr-2" /> {order.orderStatus}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
