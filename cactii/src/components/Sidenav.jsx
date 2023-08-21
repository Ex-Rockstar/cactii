import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'
const Sidenav = () => {

    const [nav,setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav);
    }
  return (

    <div className=''>      
        <AiOutlineMenu
        onClick={handleNav}
        className="icon absolute top-4 right-4 z-[99]" //add md:hidden -_-
        
        
        color="#F2E7E0"
        />
        { 
        nav ?(
            <div className="bg-[#FFD166] h-screen fixed flex flex-col z-20 w-full justify-center items-center">
                <a href="#main" className=' justify-center flex w-[75%] rounded-md items-center m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
            </div>

        ):(
            <div className=""></div>
        )
        }
        
            
        
    </div>
  )
}

export default Sidenav