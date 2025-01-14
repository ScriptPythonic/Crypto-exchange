import { useState,useEffect } from 'react';
import clsx from 'clsx'; // Importing clsx
import Vector from '../assets/vector.png';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Arrow from "../assets/arrow-exchange-swap.png";
import { VscQuestion } from "react-icons/vsc";

function PaymentForm() {
  const [selectedPaymentCurrency, setSelectedPaymentCurrency] = useState('');
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState('');
  const [isPayOpen, setIsPayOpen] = useState(false);
  const [isReceiveOpen, setIsReceiveOpen] = useState(false);
  const [payAmount, setPayAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');

  const [payOptions, setPayOptions] = useState(['BUSD', 'ETH', 'BNB']);
  const [receiveOptions, setReceiveOptions] = useState(['USDC', 'USDT', 'BTC']);

  useEffect(() => {
    // Automatically update selected currencies if options change
    setSelectedPaymentCurrency(payOptions[0]);
    setSelectedReceiveCurrency(receiveOptions[0]);
  }, [payOptions, receiveOptions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation for amounts
    if (isNaN(payAmount) || isNaN(receiveAmount)) {
      alert('Please enter valid amounts for both payment and receiving currencies.');
      return;
    }

    console.log(`Pay Amount: ${payAmount} ${selectedPaymentCurrency}`);
    console.log(`Receive Amount: ${receiveAmount} ${selectedReceiveCurrency}`);
  };

  const SwapCoin = () => {
    // Swap the payment and receive currencies
    setPayOptions(receiveOptions);
    setReceiveOptions(payOptions);

    // Swap the selected currencies as well
    setSelectedPaymentCurrency(receiveOptions[0]);
    setSelectedReceiveCurrency(payOptions[0]);
  };

  return (
  <>
   <div className='flex items-center justify-center pl-2 gap-2 mt-4 '>
   <button className='bg-[#0177FB] py-2 rounded-xl px-4 text-white'>Primary</button>
   <button className='border-[#0177FB] rounded-xl py-2 px-4 ring-2 text-[#0177FB]'>Ghost</button>
   <button className='border-[#0177FB] rounded-xl py-2 px-4 ring-2 text-[#0177FB]'>Ghost</button>
   <button className='text-[#0177FB] rounded-xl py-2 px-4'>Text</button>
 </div>
    <div className="mt-4">
      <form action="" className="space-y-2" onSubmit={handleSubmit}>
        {/* Pay Section */}
        <div className="flex justify-between items-center px-5">
          <label htmlFor="pay" className="text-gray-500">Pay</label>
          <p className="text-sm underline text-gray-600">Available: 500</p>
        </div>
        <div className="relative px-4">
          <div className="border w-full bg-inherit h-14 rounded-2xl p-2 flex justify-between items-center cursor-pointer">
            <div className="flex items-center space-x-2" onClick={() => setIsPayOpen(!isPayOpen)}>
              <img src={Vector} alt="Vector Logo" className="w-6 h-6" />
              <span>{selectedPaymentCurrency}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="0"
              className="text-right w-16 bg-transparent border-none focus:outline-none pr-2 placeholder-gray-400"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
            />
          </div>
          {isPayOpen && (
            <ul className="absolute z-10 w-[100px] bg-gray-700 border-none rounded-lg mt-1 shadow-lg">
              {payOptions.map((option, index) => (
                <li
                  key={index}
                  className="p-2 bg-transparent text-white rounded-lg hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelectedPaymentCurrency(option);
                    setIsPayOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Arrow Icon */}
        <div>
          <FaRegArrowAltCircleDown className="w-7 h-7 text-center mx-auto mt-4 hover:cursor-pointer" onClick={SwapCoin} />
        </div>

        {/* Receive Section */}
        <div className="flex justify-between items-center px-5 pt-4">
          <label htmlFor="receive" className="text-gray-500">Receive (Estimated)</label>
          <p className="text-sm underline text-gray-600">Available: 500</p>
        </div>
        <div className="relative px-4">
          <div className="border w-full bg-inherit h-14 rounded-2xl p-2 flex justify-between items-center cursor-pointer">
            <div className="flex items-center space-x-2" onClick={() => setIsReceiveOpen(!isReceiveOpen)}>
              <img src={Vector} alt="Vector Logo" className="w-6 h-6" />
              <span>{selectedReceiveCurrency}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="0"
              className="text-right w-16 bg-transparent border-none focus:outline-none pr-2 placeholder-gray-400"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
            />
          </div>
          {isReceiveOpen && (
            <ul className="absolute z-10 w-[100px] bg-gray-700 border-none rounded-lg mt-1 shadow-lg">
              {receiveOptions.map((option, index) => (
                <li
                  key={index}
                  className="p-2 text-white bg-transparent rounded-lg hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelectedReceiveCurrency(option);
                    setIsReceiveOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Exchange Rate Display */}
        <div className="flex gap-2 justify-center py-3">
          <p className="text-gray-500">{`1 ${selectedPaymentCurrency} = 1.005 ${selectedReceiveCurrency}`}</p>
          <img src={Arrow} alt="swap-arrow"  />
        </div>

        {/* Confirm Button with clsx */}
        <div className="px-4 space-y-2 pb-5">
          <button
            type="submit"
            className={clsx(
              'w-full py-[10px] rounded-[10px] text-[#4f5069]',
              {
                'bg-[#E33319] text-white': payAmount && receiveAmount, // Green if both inputs are filled
                'bg-[#3b3c4e]': !payAmount || !receiveAmount, // Default color if any input is empty
              }
            )}
          >
            Confirm Order
          </button>
          <p className="text-gray-500 text-sm text-center">
            Enter an amount to see more trading details
          </p>
          <hr className="border-gray-700 py-4" />
          <div className="flex items-center gap-3 text-sm justify-between">
            <div className="flex items-center gap-2">
              <p className="text-[#8B8CA7]">Trade Minting</p>
              <VscQuestion />
            </div>
            <p className="text-sm">
              Max Reward 5.04 DEX <span className="text-[#53F3C3]">$16.68</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  </>
  );
}

export default PaymentForm;
