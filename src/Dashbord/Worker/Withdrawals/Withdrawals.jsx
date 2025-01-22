import React from "react";
import useCoins from "./../../../Hooks/UseCoins/UseCoins";
import { FaCoins } from "react-icons/fa";
import { DollarSign } from "lucide-react";
import Marquee from "react-fast-marquee";

const Withdrawals = () => {
  const [coin] = useCoins();
  console.log(coin);
  const dolar = (coin || 0) / 20;
  console.log(dolar);
  return (
    <div>
      <div className=" container">
        {/* text section  */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-xl md:3xl font-bold sm:text-2xl text-center mb-3">
            Payment Dashboard
          </h3>
          {/* total coin  */}
          <div className="flex justify-center items-center gap-2">
            <FaCoins className="text-yellow-300" />
            <p className="font-semibold text-lg">
              My total coins :
              <span className="text-secondary ml-2"> {coin}</span>{" "}
            </p>
          </div>
          {/* amount calculation  */}
          <div className="flex justify-center items-center gap-2">
            <DollarSign className="text-green-500" />
            <p className="font-semibold text-lg">
              Withdrawal Amount:
              <span className="text-green-500 ml-2">{dolar} $</span>{" "}
            </p>
          </div>
          {/* marquee section  */}
          <div className="w-full sm:w-1/2 mx-auto md:1/2 lg:1/2">
            <Marquee
              gradient={false}
              speed={10}
              className="bg-gray-300 rounded-sm"
            >
              <p className="">
                Minimum withdraw amount is 10$ which is equivalent to 200 coins
              </p>
            </Marquee>
          </div>
          {/* Withdrawl form  */}
          <div className="mt-6 shadow-lg sm:p-4 border-2 rounded-md mx-auto">
            <h3 className="text-xl md:3xl font-bold sm:text-2xl text-center mb-3">
              WithDrawal Form
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
