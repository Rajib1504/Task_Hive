import React, { useState } from "react";
import useCoins from "./../../../Hooks/UseCoins/UseCoins";
import { FaCoins } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { DollarSign, CreditCard, Wallet } from "lucide-react";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../Hooks/UseAxios/useAxiosPublic";
import UseAuth from "../../../Hooks/useAuth/UseAuth";
const Withdrawals = () => {
  const [amount, setAmount] = useState(0);
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [withdrawalCoins, setWithdrawalCoins] = useState();
  const [coin, , refetch] = useCoins();
  // console.log(coin);
  const dolar = (coin || 0) / 20;
  // console.log(dolar);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const withdrawalCoins = parseInt(form.withdrawalCoins.value);
    const withdrawAmount = parseInt(form.withdrawAmount.value);
    const method = form.method.value;
    const accountNumber = form.accountNumber.value;
    const status = "pending";
    const worker_email = user.email;
    const worker_name = user.displayName;
    const date = new Date();
    const withdrawalsData = {
      withdrawAmount,
      withdrawalCoins,
      method,
      accountNumber,
      status,
      worker_email,
      worker_name,
      date,
    };
    console.log(withdrawalsData);
    axiosPublic
      .post("/withdrawal", withdrawalsData)
      .then((res) => {
        const result = res.data;
        console.log(result);
        if (result.insertedId) {
          toast.success("Withdrawal request is submitted");
          form.reset();
          refetch();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // withdrawals form
  const handleChange = (e) => {
    let withdrawal = e.target.value;
    console.log(withdrawal);
    if (withdrawal > coin) {
      toast.error("withdrawalCoins can't be more then your available Coins");
      withdrawal = coin;
    }
    setWithdrawalCoins(withdrawal);
    setAmount(withdrawal / 20);
  };
  return (
    <div>
      <div className="">
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
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-md mx-auto transform transition-all duration-300 hover:shadow-3xl">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <h3 className="text-2xl font-bold text-center flex items-center justify-center">
                <Wallet className="mr-3 w-8 h-8" />
                Withdrawal Form
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="relative">
                <label
                  htmlFor="coinToWithdraw"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600"
                >
                  Coins To Withdraw
                </label>
                <div className="flex items-center border-2 rounded-lg overflow-hidden focus-within:border-blue-500 transition-all">
                  <span className="bg-gray-100 p-3">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                  </span>
                  <input
                    type="number"
                    name="withdrawalCoins"
                    onChange={handleChange}
                    value={withdrawalCoins}
                    className="w-full p-3 outline-none"
                    placeholder="Enter coins"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="withdrawAmount"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600"
                >
                  Withdrawal Amount
                </label>
                <div className="flex items-center border-2 rounded-lg overflow-hidden focus-within:border-blue-500 transition-all">
                  <span className="bg-gray-100 p-3">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                  </span>
                  <input
                    type="number"
                    name="withdrawAmount"
                    id="withdrawAmount"
                    value={amount}
                    className="w-full p-3 outline-none"
                    placeholder="Calculated amount"
                    readOnly
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="paymentSystem"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600"
                >
                  Payment System
                </label>
                <select
                  name="method"
                  className="w-full p-3 border-2 rounded-lg appearance-none focus:border-blue-500 transition-all"
                  defaultValue={"choose_method"}
                  required
                >
                  <option selected disabled value="Choose_method">
                    Select Payment Method
                  </option>
                  <option value="Bikash">Bikash</option>
                  <option value="Rocket">Rocket</option>
                  <option value="Nagad">Nagad</option>
                </select>
              </div>

              <div className="relative">
                <label
                  htmlFor="accountNumber"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600"
                >
                  Account Number
                </label>
                <input
                  type="number"
                  name="accountNumber"
                  className="w-full p-3 border-2 rounded-lg focus:border-blue-500 transition-all"
                  placeholder="Enter account number"
                  required
                />
              </div>

              {withdrawalCoins < 200 ? (
                <p className="text-red-500 text-center">Insufficient Coin</p>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-[1.02] active:scale-100"
                >
                  Submit Withdrawal
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
