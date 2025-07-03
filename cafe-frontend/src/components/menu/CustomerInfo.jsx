import { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getAvatarName } from "../../utils";

const CustomerInfo = () => {
  const dateTime = useState(new Date())[0];
  const customerData = useSelector((state) => state.customer);

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-retroPrimary font-semibold tracking-wide">
          {customerData.customerName || "Customer Name"}
        </h1>
        <p className="text-xs text-retroSecondary font-medium mt-1">
          #{customerData.orderId || "N/A"} / Dine in
        </p>
        <p className="text-xs text-retroSecondary font-medium mt-2">
          {formatDate(dateTime)}
        </p>
      </div>
      <button className="bg-gradient-to-r from-retroOrange to-retroYellow p-3 text-xl font-bold rounded-lg text-retroBg">
        {getAvatarName(customerData.customerName) || "CN"}
      </button>
    </div>
  );
};

export default CustomerInfo;
