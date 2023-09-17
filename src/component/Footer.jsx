import {Link} from 'react-scroll'
import Logo from '../images/FooterLogo.svg'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

  return (

    <div className='bg-primary-300 py-7 mt-28'>
      <div className="w-11/12 md:w-10/12 mx-auto text-sm sm:text-base ">
        <Link to="home" activeClass="current" smooth={ true } offset={ -150 } className='cursor-pointer'>
          <img className='py-3 w-20 md:w-28' src={ Logo } alt="" />
        </Link>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-12 border-t-[1px] border-b-[1px] py-5 mt-8 border-primary-400/30  md:flex-row  md:justify-between">
            <div className="flex flex-col font-light gap-4 ">
              <p className=" font-poppins text-primary-400">Unlock the Power of Seamless School Management Solutions! </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 font-poppins  text-primary-400">
                  <FaPhone />
                  <p className="">+251908555657</p>
                </div>
                <div className="flex items-center gap-1 font-poppins  text-primary-400">
                  <FaMailBulk />
                  <p className="">support@bluelabs.net</p>
                </div>
                <div className="flex items-center gap-1 font-poppins  text-primary-400">
                  <FaPhone />
                  <p className="">Bole, sub city, 22 Festival 22 Building, #401</p>
                </div>
              </div>
            </div>
            <div className="flex font-light  text-primary-400 flex-col font-poppins items-start  text-base lg:text-lg gap-4">
              <Link to="home" offset={ -150 } activeClass="currently" smooth={ true } className="hover:font-semibold   transition-all duration-500 cursor-pointer">Home</Link>
              <Link  to="about" offset={-150} activeClass="currently" smooth={ true }   className=" hover:font-semibold  transition-all duration-500  cursor-pointer">About Us</Link>
              <Link  to="services"offset={-150}  activeClass="currently" smooth={ true }   className=" hover:font-semibold  transition-all duration-500  cursor-pointer">Services</Link>
              <Link  to="contact" offset={-150} smooth={ true }   className=" transition-all duration-500  bg-primary-400  hover:animate-wiggle cursor-pointer py-2 px-6 text-primary-200 text-lg  font-poppins rounded-br-2xl rounded-tl-2xl">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 justify-center mx-auto ">
            <p className="font-light text-primary-400 font-poppins ">&copy; Copy rights Reserved 2023</p>
          {/* add social medial links  
        <div className="flex gap-4  text-primary-400">
            <a href="#" className="hover:text-primary-100 transition-all duration-300"><FaFacebook  size={25}/></a>
            <a href="#" className="hover:text-primary-100 transition-all duration-300"><FaInstagram  size={25}/></a>
            <a href="#" className="hover:text-primary-100 transition-all duration-300"><FaLinkedin  size={25}/></a>
          </div> */}
            
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
