import { Coins } from "lucide-react";
const PurchaseCoins = () => {
  return (
    <div>
      <h3 className="text-xl md:3xl font-bold sm:text-2xl text-center mb-3">
        Payment Dashboard
      </h3>
      <div className="flex justify-center gap-2 flex-wrap  items-center ">
        {" "}
        <div className=" w-56  ">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Coins className="w-12 h-12 text-blue-600" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                10 Coins
              </h3>

              <div className="flex items-center justify-center mb-6">
                <span className="text-xl font-bold">1 $</span>
                <span className="ml-2 text-gray-500">USD</span>
              </div>

              <button className="w-full py-2 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-56 ">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Coins className="w-12 h-12 text-blue-600" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                150 coins
              </h3>

              <div className="flex items-center justify-center mb-6">
                <span className="text-xl font-bold">10 $</span>
                <span className="ml-2 text-gray-500">USD</span>
              </div>

              <button className="w-full py-2 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-56  ">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Coins className="w-12 h-12 text-blue-600" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                500 Coins
              </h3>

              <div className="flex items-center justify-center mb-6">
                <span className="text-xl font-bold">20 $</span>
                <span className="ml-2 text-gray-500">USD</span>
              </div>

              <button className="w-full py-2 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-56  ">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Coins className="w-12 h-12 text-blue-600" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                1000 Coins
              </h3>

              <div className="flex items-center justify-center mb-6">
                <span className="text-xl font-bold">35 $</span>
                <span className="ml-2 text-gray-500">USD</span>
              </div>

              <button className="w-full py-2 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoins;
