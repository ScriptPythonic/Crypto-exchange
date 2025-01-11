import './app.css'
import Logo from './assets/image.png'
import { FaRegUserCircle } from "react-icons/fa";

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

      </div>
      {/* end of the main part */}
      <div className='lg:w-[500px] w-0'>
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
      </div>

    </div>
  )
}

export default App