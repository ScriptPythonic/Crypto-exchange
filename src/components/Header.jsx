import Logo from '../assets/image.png';
import { useState, useEffect, useRef } from 'react';
import IconWrapper from '../assets/icon-wrapper.png';
import IconWrapper2 from '../assets/icon-wrapper2.png';
import IconWrapper3 from '../assets/vftr.png';
import IconWrapper4 from '../assets/icon-wrapper4.png';
import IconWrapper5 from '../assets/icon-wrapper5.png';
import clsx from 'clsx';
import Vector from '../assets/vector.png';

function Header() {
  const [isMintingClicked, setIsMintingClicked] = useState(false);
  const [isDeveloperClicked, setIsDeveloperClicked] = useState(false);

  const mintingRef = useRef(null);
  const developerRef = useRef(null);

  // Toggle Minting dropdown
  const toggleMinting = () => {
    setIsMintingClicked(!isMintingClicked);
    setIsDeveloperClicked(false); // Close Developer dropdown when Minting is toggled
  };

  // Toggle Developer dropdown
  const toggleDeveloper = () => {
    setIsDeveloperClicked(!isDeveloperClicked);
    setIsMintingClicked(false); // Close Minting dropdown when Developer is toggled
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mintingRef.current && !mintingRef.current.contains(event.target) &&
        developerRef.current && !developerRef.current.contains(event.target)
      ) {
        setIsMintingClicked(false);
        setIsDeveloperClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-4 items-center justify-evenly max-w-[500px]">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" width={50} height={50} />
        <h2 className="text-2xl font-bold">KIBA</h2>
      </div>
      <div className="space-x-5 relative">
        <a href="#" className="hover:text-gray-500">Stake</a>
        <a href="#" className="hover:text-gray-500">Liquidity</a>
        <div className="inline-block" ref={mintingRef}>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMinting}
              className={clsx(
                'relative hover:text-gray-500',
                { 'text-[#E33319]': isMintingClicked }
              )}
            >
              Minting
            </button>
            {!isMintingClicked ? (
              <span>
                <img src={Vector} alt="Vector Logo" className="w-3 h-3" />
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={isMintingClicked ? '#E33319' : 'currentColor'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            )}
          </div>
          {isMintingClicked && (
            <div className="absolute mt-2 w-full bg-[#23242F] py-4 rounded-[16px] shadow-lg border-none text-white">
              <ul className="py-2 flex flex-col gap-3 w-full">
                <li className="px-4 py-2 hover:bg-gray-700 w-full">
                  <a href="#">
                    <div className="flex gap-3 w-full">
                      <img src={IconWrapper} alt="logo" className="w-[32px] h-[32px] object-contain" />
                      <div className="flex flex-col gap-2 w-full">
                        <p className="text-sm text-white">Liquidity Minting</p>
                        <h1 className="text-sm text-[#8B8CA7]">Earn FTR rewards by staking assets for market making</h1>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 w-full">
                  <a href="#">
                    <div className="flex gap-3 w-full">
                      <img src={IconWrapper2} alt="logo" className="w-[32px] h-[32px] object-contain" />
                      <div className="flex flex-col gap-2 w-full">
                        <p className="text-sm text-white">Trading Minting</p>
                        <h1 className="text-sm text-[#8B8CA7]">Successfully complete a trade to get a FTR airdrop</h1>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 w-full">
                  <a href="#">
                    <div className="flex gap-3 w-full">
                      <img src={IconWrapper3} alt="logo" className="w-[32px] h-[32px] object-contain" />
                      <div className="flex flex-col gap-2 w-full">
                        <p className="text-sm text-white">vFTR</p>
                        <h1 className="text-sm text-[#8B8CA7]">Mint vFTR to earn more DoDo</h1>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="inline-block" ref={developerRef}>
          <div className="flex gap-2 items-center">
            <button
              onClick={toggleDeveloper}
              className={clsx(
                'relative hover:text-gray-500',
                { 'text-[#E33319]': isDeveloperClicked }
              )}
            >
              Developer
            </button>
            {!isDeveloperClicked ? (
              <span>
                <img src={Vector} alt="Vector Logo" className="w-3 h-3" />
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={isDeveloperClicked ? '#E33319' : 'currentColor'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            )}
          </div>
          {isDeveloperClicked && (
            <div className="absolute mt-2 w-full bg-[#23242F] py-4 rounded-[16px] shadow-lg border-none text-white">
              <ul className="py-2 flex flex-col gap-3 w-full">
                <li className="px-4 py-2 hover:bg-gray-700 w-full">
                  <a href="#">
                    <div className="flex gap-3 w-full">
                      <img src={IconWrapper4} alt="logo" className="w-8 h-8 object-contain" />
                      <div className="flex flex-col gap-2 w-full">
                        <p className="text-sm text-white">Create a Token</p>
                        <h1 className="text-sm text-[#8B8CA7]">Create your own tokens with one click. No coding required!</h1>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 w-full">
                  <a href="#">
                    <div className="flex gap-3 w-full">
                      <img src={IconWrapper5} alt="logo" className="w-[32px] h-[32px] object-contain" />
                      <div className="flex flex-col gap-2 w-full">
                        <p className="text-sm text-white">Create A Pool</p>
                        <h1 className="text-sm text-[#8B8CA7]">Create liquidity markets for free and customize your market-making strategies</h1>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
