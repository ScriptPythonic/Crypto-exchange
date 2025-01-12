import './App.css'
import Logo from './assets/image.png' 
import Vector from './assets/vector.png'
import coin2x from './assets/coin@2x.svg'
import Arrow from './assets/arrow-exchange-swap.png'
import CryptoChart from './components/chart';
import PaymentForm from './components/PaymentForm';
import Sidebar from './components/Sidebar'



function App (){
  return (
    <div className='flex w-full h-screen  bg-gray-900'>
      {/* This is the main part*/}
      <div className=' lg:flex-1 flex-none  py-4'>
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

      <Sidebar/>
      

    </div>

  )
}

export default App