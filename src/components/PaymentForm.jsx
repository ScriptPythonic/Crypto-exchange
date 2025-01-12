import { useState } from 'react';
import Vector from '../assets/vector.png';

function PaymentForm() {
  const [selected, setSelected] = useState('BUSD');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['BUSD', 'ETH', 'BNB'];

  const handleSubmit = (e) => {
    e.preventDefault()
    const {value} = e.target
    console.log(value)
  }

  return (
    <div className="mt-4">
      <form action="" className="space-y-2" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center px-5">
          <label htmlFor="pay" className="text-lg font-semibold">
            Pay
          </label>
          <p className="text-sm underline text-gray-600">
            Available: 500
          </p>
        </div>
        <div className="relative max-w-[400px] mx-5">
          <div
            className="border w-full bg-inherit h-14 rounded-2xl p-2 flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center space-x-2">
              {/* Vector logo */}
              <img src={Vector} alt="Vector Logo" className="w-6 h-6" />
              {/* Selected Option */}
              <span>{selected}</span>
              {/* Dropdown Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Input Field */}
            <input
              type="text"
              placeholder="0"
              className="text-right w-16 bg-transparent border-none focus:outline-none pr-2 placeholder-gray-400"
            />
          </div>
          {isOpen && (
            <ul className="absolute z-10 w-[100px] bg-transparent border rounded-lg mt-1 shadow-lg">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="p-2 bg-transparent text-white rounded-lg hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
