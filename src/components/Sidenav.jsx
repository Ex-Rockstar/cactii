import React, {useState} from 'react'
import {AiOutlineMenu, AiFillHome} from 'react-icons/ai'
import {GiCactusPot} from 'react-icons/gi'
import {BsFillPeopleFill} from 'react-icons/bs';
const Sidenav = () => {

    const [nav,setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav);
    }
  return (

    <div className=''>      
        <AiOutlineMenu
        onClick={handleNav}
        className="icon absolute top-4 right-4 z-[99] md:hidden" //add md:hidden -_-
        
        
        color="#E87B67"
        />
        { 
        nav ?(
            <div className="bg-[#FFD166] h-screen fixed flex flex-col z-20 w-full justify-center items-center">
                <a href="#main" className='border-2  border-dotted flex border-black  justify-center bg-[#E87B67]  w-[75%] rounded-md items-center m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300  '>
                    <AiFillHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                <a href="#about" className='border-2 border-dotted flex border-black  justify-center bg-[#E87B67]  w-[75%] rounded-md items-center m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300  '>
                    <GiCactusPot size={20}/>
                    <span className='pl-4'>See Me</span>
                </a>
                <a href="#contact" className='border-2 border-dotted flex border-black  justify-center bg-[#E87B67]  w-[75%] rounded-md items-center m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300  '>
                    <BsFillPeopleFill size={20}/>
                    <span className='pl-4'>Contact Me</span>
                </a>

            </div>

        ):(
            <div className=""></div>
        )
        }
        
        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                <a href="#main" className='rounded-full shadow-lg bg-[#FFD166] hover:bg-white m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <AiFillHome/>
                </a>
                <a href="#main" className='rounded-full shadow-lg bg-[#FFD166] hover:bg-white m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <GiCactusPot/>
                </a>
                <a href="#main" className='rounded-full shadow-lg bg-[#FFD166] hover:bg-white m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                    <BsFillPeopleFill/>
                </a>

            </div>
        </div>
        
    </div>
  )
}

export default Sidenav