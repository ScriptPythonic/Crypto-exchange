import './app.css'
import Logo from './assets/image.png' 
import { FaRegUserCircle } from "react-icons/fa";
import Vector from './assets/vector.png'
import coin2x from './assets/coin@2x.svg'
import Arrow from './assets/arrow-exchange-swap.png'
import CryptoChart from './components/chart';
import PaymentForm from './components/PaymentForm';


function App (){
  return (
    <div className='flex h-screen bg-gray-900'>
      {/* This is the main part*/}
      <div className=' flex-1 border-white border-r py-4'>
        {/* the header */}
        <div className='flex gap-4 items-center justify-evenly max-w-[500px]'>
          <div className='flex items-center '>
            <img src={Logo} alt="Logo" width={50} height={50} />
            <h2 className='text-2xl font-bold'>KIBA</h2>
          </div>
          <div className=' space-x-5'>
            <a href="#">Stake</a>
            <a href="#">Liquidity</a>
            <a href="#">Minting</a>
            <a href="#">Developer</a>
          </div>
          
        </div>

        <div className=' mt-12 px-6'>
          <div className='flex items-center gap-1'>
            <img src={coin2x} alt="coin for crypto"/>
            <h2 className='text-xl font-bold'>BUSD/<span className='text-gray-500'>USDC</span></h2>
            <img src={Arrow} alt="arrow " width={25} height={25} />
          </div>
          <div className='mt-5'>
            <h2 className='text-4xl font-bold'>1.005 USDC</h2>
            <div className='flex justify-between'>
              <p className='text-[#53F3C3]'>+227.543364 USDC <span className='text-white'>Past 24 Hours</span></p>
              <div className='flex gap-5'>
                <div className='bg-[#3B3C4E] px-2 py-1 rounded-lg ring-1'><p>24H</p></div>
                <div className='bg-[#3B3C4E] px-2 py-1 rounded-lg'><p>1W</p></div>
                <div className='bg-[#3B3C4E] px-2 py-1 rounded-lg'><p>1M</p></div>
              </div>
            </div>
          </div>

          <CryptoChart className="mt-6"/>
        </div>

      </div>
      {/* end of the main part */}
      <div className='lg:w-[500px] w-0 flex flex-col '>
        <div className='mx-auto flex gap-6 items-center py-4 w-fit'>
          <FaRegUserCircle className='text-3xl text-white' />
          <div className='flex items-center bg-[#9aa6be] rounded-[25px] pl-2 gap-3'>
            <div className='flex items-center gap-[4px]'>
              <div className='w-2 h-2 bg-red-600 rounded-full'></div>
              <p>BSC</p>
            </div>
            <button className='px-3 py-2 bg-[#E33319] rounded-[25px]'>Connect to a wallet</button>
          </div>
          <div className='w-9 h-9 bg-[#9aa6be] rounded-[4px] flex justify-center items-center'>
            <div className='w-5 h-5 bg-white rounded-full'></div>
          </div>
        </div>
        <div className='bg-[#2C2D3A] w-[450px] h-[600px] mx-auto mt-4 pt-2 rounded-3xl'>
          <div className='flex items-center justify-center pl-2 gap-2 mt-4 '>
            <button className='bg-[#0177FB] py-2 rounded-xl px-4 text-white'>Primary</button>
            <button className='border-[#0177FB] rounded-xl py-2 px-4 ring-2 text-[#0177FB]'>Ghost</button>
            <button className='border-[#0177FB] rounded-xl py-2 px-4 ring-2 text-[#0177FB]'>Ghost</button>
            <button className='text-[#0177FB] rounded-xl py-2 px-4'>Text</button>
          </div>
          
            <PaymentForm/>

        </div>
      </div>

    </div>
    
  )
}

export default App