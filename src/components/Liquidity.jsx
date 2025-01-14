import avatar1 from '../assets/avatars/avatar1.png';
import liquidityPools from '../liquidity-database';
import Copy from '../assets/copy-icon.png';

function Liquidity() {
  return (
    <div className="px-4">
      <h1 className="my-6 text-xl font-bold">My Liquidity</h1>

      {/* Header Row */}
      <div className="bg-[#23242F] py-4 rounded-md px-6 mb-4 ">
        <div className="grid grid-cols-3 gap-4 w-[85%]">
          <h1 className="text-sm font-medium text-left">Pool</h1>
          <h1 className="text-sm font-medium text-center">My Liquidity</h1>
          <h1 className="text-sm font-medium text-right">Action</h1>
        </div>
      </div>

      {/* Content Row */}
      {
         liquidityPools.map((pool, index) => (
               <div key={pool.tokenImage} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 mb-4 py-4 px-6 rounded-md">
               {/* Pool */}
               <div className="flex items-center gap-3">
                  <img src={pool.tokenImage} alt="blockchain" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <p className="text-sm sm:text-base truncate">{pool.walletAddress}</p>
                  <img src={Copy} alt="copy-text" className="w-4 h-4 sm:w-5 sm:h-5" />
               </div>

               {/* My Liquidity */}
               <div className="flex items-center justify-startgit  text-sm sm:text-base">
                  {`${pool.inputAmount} ${pool.inputToken} / ${pool.outputAmount} ${pool.outputToken}`}
               </div>

               {/* Action */}
               <div className="flex justify-end gap-2">
                  <button className="text-[#E33319] rounded-lg text-sm sm:text-base font-bold py-1 px-4 border border-[#E33319] hover:bg-[#E33319] hover:text-white transition">
                     Manage
                  </button>
                  <button className="text-[#E33319] rounded-lg text-sm sm:text-base font-bold py-1 px-4 border border-[#E33319] hover:bg-[#E33319] hover:text-white transition">
                     Details
                  </button>
               </div>
            </div>
         ))
      }
      

    </div>
  );
}

export default Liquidity;
