import {Link} from 'react-scroll'
import { motion } from "framer-motion"
import Hero from '../images/Hero.svg'

const Home = () => {
  
  const leftCardAnimate = {
    offScreen: {
      x: -100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: .5,
      }
    }
  }
    
  const rightCardAnimate = {
    offScreen: {
      x: 100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: .5,
      }
    }
  }
    
  return (
    <motion.div
      transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
      id='home' className=''>
      <div className="flex flex-col lg:flex-row pt-8 md:pt-16 mb-48  w-11/12 md:w-10/12 mx-auto  gap-12 lg:justify-between">
        
        <motion.div
          variants={leftCardAnimate}
          className="mt-36  lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
          <div className="flex flex-col items-center lg:items-start gap-5">

          <h1 className="text-3xl md:text-5xl font-nunito font-semibold text-primary-100">BLU LABS</h1>
            <p className="text-primary-100  text-center lg:text-left font-poppins text-sm md:text-lg ">
              Unlock the Power of Seamless School Management Solutions! Effortlessly navigate
              through administrative tasks and reclaim your time for what truly matters - teaching.
            Our cutting-edge system is mobile-friendly and accessible from any device, allowing
            you to effortlessly share essential information with everyone at the touch of a button.</p>
          </div>
             <Link to="contact" offset={-150}  smooth={ true } className="bg-primary-200 hover:animate-wiggle cursor-pointer py-2 px-6 md:py-4 md:px-12  text-primary-400 md:text-lg  font-poppins rounded-br-2xl rounded-tl-2xl">Contact Us</Link>
        </motion.div>

        <motion.div
        variants={rightCardAnimate}
          className="lg:w-1/2 flex items-center  justify-center lg:items-end lg:justify-end">
          <img src={ Hero } alt="" className="w-9/12" />
        </motion.div>  
      </div>
    </motion.div>

  )
}

export default Home
