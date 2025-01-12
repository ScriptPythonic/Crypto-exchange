import PaymentForm from "./PaymentForm"
import { FaRegUserCircle } from "react-icons/fa";


function Sidebar(){
   return(
      <div className='lg:w-[500px] lg:block hidden bg-gray-800'>
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
        <div className='bg-[#2C2D3A] w-[85%] mx-auto mt-12 pt-2 rounded-3xl'>
          
            <PaymentForm/>

        </div>
      </div>
   )
}

export default Sidebar;