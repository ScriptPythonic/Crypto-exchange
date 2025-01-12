import Logo from '../assets/image.png' 


function Header(){
   return(
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
   )
}

export default Header;