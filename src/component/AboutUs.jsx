import { motion } from "framer-motion"
import { RiChatSmile3Line } from 'react-icons/ri'
import { BiCustomize } from 'react-icons/bi'
import { BsShieldLock } from 'react-icons/bs'

const AboutUs = () => {
  
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
  
  const middleCardAnimate = {
    offScreen: {
      y: 100,
      opacity: 0
    },
    onScreen: {
      y: 0,
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
        once: true, amount: .2
      } }
      id='about' className=' bg-no-repeat bg-cover w-full skew-y-[3deg] bg-hero-pattern'>
      <div className="-skew-y-[3deg] w-11/12 md:w-10/12 mx-auto flex py-28 ">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <motion.div
            variants={ leftCardAnimate }
            className="flex flex-col gap-1 lg:w-1/3 sm:w-3/5 mx-auto items-center  px-5 py-8 rounded-lg  bg-white/95 text-primary-100 ">
            <RiChatSmile3Line className='text-primary-100' size={ 50 } />
            <div className="flex flex-col gap-3">
              <p className="text-center text-primary-100/90 font-nunito text-base md:text-lg font-bold">CLEAN & SIMPLE</p>
              <p className="text-center text-sm  text-primary-100/80 font-poppins">
                Our easy-to-use school management system makes it simple to keep track of your students,
                teachers, and classes. With our clean interface, you'll be able to find the information
                you need quickly and easily.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={ middleCardAnimate }
            className="flex flex-col gap-1 lg:w-1/3 sm:w-3/5 mx-auto items-center px-5 py-8 rounded-lg bg-white/95 text-primary-100 ">
              <BiCustomize className='text-primary-100' size={ 50 } />
            <div className="flex flex-col gap-3">
              <p className="text-center text-primary-100/90 font-nunito text-base md:text-lg font-bold">FEATUREFUL & FLEXIBLE</p>
              <p className="text-center text-sm  text-primary-100/80 font-poppins">
                Our school management system is full of features that can be customized
                to meet the needs of your school.
                With our easy-to-use interface, you can create custom reports,
                track student progress, and manage your school's finances.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={ rightCardAnimate }
            className="flex flex-col gap-1 lg:w-1/3 sm:w-3/5 mx-auto items-center px-5 py-8 rounded-lg bg-white/95 text-primary-100 ">
            <BsShieldLock size={ 50 } />
            <div className="flex flex-col gap-3">
              <p className="text-center text-primary-100/90 font-nunito text-base md:text-lg font-bold">FAST & SECURE</p>
              <p className="text-center text-sm  text-primary-100/80 font-poppins">
                Process your data with lightning speed while we worry about its security!
                Our state-of-the-art technology can process your data in minutes,
                so you can focus on other things.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutUs