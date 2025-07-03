import { useState, useEffect } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../https/index";
import { enqueueSnackbar } from "notistack"

const Orders = () => {

  const [status, setStatus] = useState("all");

    useEffect(() => {
      document.title = "CafeFlow | Orders"
    }, [])

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData
  })

  if(isError) {
    enqueueSnackbar("Something went wrong!", {variant: "error"})
  }

  return (
    <section className="bg-retroBg h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-retroPrimary text-2xl font-bold tracking-wider">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button 
            onClick={() => setStatus("all")} 
            className={`text-retroSecondary hover:text-retroPrimary text-lg font-semibold transition-all duration-300 ${
              status === "all" ? "bg-retroAccent text-retroPrimary" : "hover:bg-retroHover"
            } rounded-lg px-5 py-2`}
          >
            All
          </button>
          <button 
            onClick={() => setStatus("progress")} 
            className={`text-retroSecondary hover:text-retroPrimary text-lg font-semibold transition-all duration-300 ${
              status === "progress" ? "bg-retroAccent text-retroPrimary" : "hover:bg-retroHover"
            } rounded-lg px-5 py-2`}
          >
            In Progress
          </button>
          <button 
            onClick={() => setStatus("ready")} 
            className={`text-retroSecondary hover:text-retroPrimary text-lg font-semibold transition-all duration-300 ${
              status === "ready" ? "bg-retroAccent text-retroPrimary" : "hover:bg-retroHover"
            } rounded-lg px-5 py-2`}
          >
            Ready
          </button>
          <button 
            onClick={() => setStatus("completed")} 
            className={`text-retroSecondary hover:text-retroPrimary text-lg font-semibold transition-all duration-300 ${
              status === "completed" ? "bg-retroAccent text-retroPrimary" : "hover:bg-retroHover"
            } rounded-lg px-5 py-2`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-16 py-4 overflow-y-scroll scrollbar-hide">
        {
          resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderCard key={order._id} order={order} />
            })
          ) : <p className="col-span-3 text-retroSecondary text-center">No orders available</p>
        }
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
