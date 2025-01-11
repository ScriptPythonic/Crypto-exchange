import './app.css'
import Logo from './assets/image.png'

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
      <div className='flex-1  max-w-[500px]'>
        <div>

        </div>

      </div>
    </div>
  )
}

export default App