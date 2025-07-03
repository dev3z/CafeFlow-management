import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-retroCard border border-retroBorder w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-retroPrimary text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="#" className="text-retroBlue hover:text-blue-400 text-sm font-semibold transition-colors duration-200">
            View all
          </a>
        </div>

        <div className="overflow-y-scroll h-[680px] scrollbar-hide">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-retroHover hover:bg-retroBgTertiary rounded-[15px] px-6 py-4 mt-4 mx-6 transition-all duration-300 border border-retroBorder"
              >
                <h1 className="text-retroOrange font-bold text-xl mr-4">{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[50px] h-[50px] rounded-full ring-2 ring-retroOrange"
                />
                <div>
                  <h1 className="text-retroPrimary font-semibold tracking-wide">{dish.name}</h1>
                  <p className="text-retroSecondary text-sm font-semibold mt-1">
                    <span className="text-retroSecondary">Orders: </span>
                    <span className="text-retroGreen">{dish.numberOfOrders}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
