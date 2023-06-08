import React, { useState } from 'react';
import { BiPhoneOutgoing } from 'react-icons/bi';
const BKashFirst = () => {
  const [numberButton, setNumberButton] = useState(true);
  const [password, setPassword] = useState(false);
  const [passwordButton, setPasswordButton] = useState(false);
  const [vCode, setVCode] = useState(false);

  const handleNumber = () => {
    setPassword(true);
    setPasswordButton(true);
    setNumberButton(false);
  };
  const handlePasswordButton = () => {
    setPasswordButton(false);
    setVCode(true);
  };
  return (
    <div className="flex justify-center mt-5">
      <div>
        <div className="bg-pink-700 w-[500px] h-[650px]">
          <img
            className="pt-2"
            src="https://raw.githubusercontent.com/Shipu/bkash-example/master/bkash_payment_logo.png"
            alt=""
          />
          <div className="mx-[50px] w-[400] h-[150px] shadow-black shadow-md mt-5 text-white text-xl pt-8 pl-4">
            <h1>Merchant : BDSHOP.COM</h1>
            <h1>Invoice No : </h1>
            <h1>Amount : </h1>
          </div>
          <div className="text-center text-white mt-10 text-xl">
            <div>
              {' '}
              <h1>Enter Your bKash account number</h1>
              <input
                className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                placeholder="e.g 01XXXXXXXXX"
                type="number"
              />
              {numberButton && (
                <div className="flex justify-between mx-[150px] mt-3">
                  <button
                    onClick={handleNumber}
                    className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                  >
                    Process
                  </button>
                  <button className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800">
                    Cancel
                  </button>
                </div>
              )}
            </div>
            {/* password */}
            {password && (
              <div>
                <input
                  className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                  placeholder="Enter Your Password"
                  type="password"
                />
                {passwordButton && (
                  <div className="flex justify-between mx-[150px] mt-3">
                    <button
                      onClick={handlePasswordButton}
                      className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800"
                    >
                      Process
                    </button>
                    <button className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}
            {/* v code */}
            {vCode && (
              <div>
                <div className="mt-5">
                  <h1>Enter Your Verification Code</h1>
                  <input
                    className="p-1 pl-2 mt-2 text-black w-[300px] rounded-lg"
                    placeholder="Enter 4 Digit Code"
                    type="number"
                  />
                </div>

                <div className="flex justify-between mx-[150px] mt-3">
                  <button className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800">
                    Process
                  </button>
                  <button className="bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-800">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-pink-700 flex justify-center pb-3 text-white text-xl font-semibold">
          <BiPhoneOutgoing className="mt-1 mr-3" />
          <h1>16247</h1>
        </div>
      </div>
    </div>
  );
};

export default BKashFirst;
