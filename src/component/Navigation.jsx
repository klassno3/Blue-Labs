import {Link} from 'react-scroll'
import { useEffect, useState } from 'react'
import Logo from '../images/Logo.png'

const Navigation = () => {

  const [ isOpen, setIsOpen ] = useState( false );
  const [ active, setActive ] = useState( false );
  const genericHamburgerLine = `h-[3px]  w-7 md:w-10 my-[3px] rounded-full bg-primary-100 transition ease transform duration-300`;
 
  const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
  }
  useEffect( () => {
    window.addEventListener( "scroll", isActive )
  }, [] );

 
  return (
  

    <div  className={ `w-full ${ active ? "bg-primary-400  z-50 shadow-xl font-lato fixed top-0 left-0  " :
      "bg-primary-400 z-50 fixed top-0 left-0  " }` }>
      <div className="w-11/12 md:w-10/12  mx-auto flex justify-between items-center">
        <Link to="home" smooth={ true } spy={ true } offset={ -150 } className='cursor-pointer'>
          <img className='py-3 w-20 md:w-28' src={ Logo } alt="" />
        </Link>
        <div className="hidden lg:flex font-poppins items-center text-lg gap-12">
          <Link to="home" activeClass="current" smooth={ true } spy={ true } offset={ -150 } className="transition-all duration-500 cursor-pointer">Home</Link>
          <Link to="about" activeClass="current"  smooth={ true } spy={ true }  offset={-150}  className="transition-all duration-500 cursor-pointer">About Us</Link>
          <Link  to="services"  activeClass="current" smooth={ true } spy={ true }  offset={-150}  className="transition-all duration-500 cursor-pointer ">Services</Link>
          <Link to="contact"  smooth={ true }  offset={ -150 } className=" bg-primary-200  hover:animate-wiggle cursor-pointer py-2 px-6 text-primary-400 text-lg  font-poppins rounded-br-2xl rounded-tl-2xl">Contact Us</Link>
        </div>
        <div className={ `flex relative bg-primay-200 lg:hidden ${ isOpen ? "" : "" }` }>
          {/* mobile menu */ }
        <button className="flex flex-col h-12 w-z  rounded justify-center items-center group" onClick={() => setIsOpen(!isOpen)}  >
            <div className={ ` transition-all duration-500 ${ genericHamburgerLine }
           ${isOpen
              ? "rotate-[405deg] translate-y-[6px]   group-hover:scale-105"
              : " group-hover:-translate-y-[3px]"
              }` } />
            <div className={ `${ genericHamburgerLine } ${ isOpen ? "opacity-0" : "" }` } />
            <div className={ ` transition-all duration-500 ${ genericHamburgerLine } ${ isOpen ? "-rotate-[45deg]  -translate-y-[12px]  group-hover:scale-105" : " group-hover:translate-y-[2px]" }` } />
          </button>
        </div>
      </div>
      <div className={ `transition-all duration-500 flex justify-center items-center absolute overflow-x-hidden h-screen translate-x-0  w-3/4  top-[63px]  bg-primary-400/95 ${ isOpen ? "lg:hidden right-0 " : "-right-full" }` }>
        <div className="flex flex-col font-poppins items-center text-lg gap-10">
          <Link to="home" activeClass="currently" smooth={ true } className="hover:font-bold hover:text-primary-200  transition-all duration-500 cursor-pointer">Home</Link>
          <Link  to="about"  activeClass="currently" smooth={ true }   className=" hover:font-bold hover:text-primary-200 transition-all duration-500  cursor-pointer">About Us</Link>
          <Link  to="services"  activeClass="currently" smooth={ true }   className=" hover:font-bold hover:text-primary-200 transition-all duration-500  cursor-pointer">Services</Link>
          <Link  to="contact"  smooth={ true }   className=" transition-all duration-500  bg-primary-200  hover:animate-wiggle cursor-pointer py-2 px-6 text-primary-400 text-lg  font-poppins rounded-br-2xl rounded-tl-2xl">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
