import ServicesOne from "../images/Services_1.svg"
import ServicesTwo from "../images/Services_2.svg"
import ServicesThree from "../images/Services_3.svg"
import { motion } from "framer-motion"

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
     transition :{ 
       duration: .5,
    }
  }
}
  
const Services = () => {

  return (

    <div id='services' className='my-48 '>
      <div className="w-10/12 mx-auto mb-10">
        <h1 className="font-nunito text-3xl font-bold text-primary-100">Services We Provide</h1>
      </div>
      <div className="flex flex-col gap-16">
        <motion.div
          transition={ { staggerChildren: 0.1 } }
          initial={ "offScreen" }
          whileInView={ "onScreen" }
          viewport={ {
            once: true, amount: .2
          } }
          className="bg-white shadow-3xl rounded-2xl lg:justify-between gap-12 flex flex-col items-center    sm:w-3/4  lg:w-10/12 w-10/12 mx-auto px-8 py-8 lg:flex-row-reverse  md:px-20">
          <motion.img
            variants={ rightCardAnimate }
            className="md:w-1/2"
            src={ ServicesOne }
            alt="svg"
          />
          
          <motion.div
            variants={ leftCardAnimate }
            className="flex flex-col gap-4 items-center justify-center mx-auto  lg:items-start">
            <h1 className="font-bold text-2xl text-center  text-primary-100  font-nunito lg:text-left sm:text-3xl lg:text-3xl">
              Avoid The Tiring Paperworks
            </h1>
            <p className="font-poppins text-sm md:text-base text-center text-primary-100/80 lg:text-left">
              Our system is mobile-friendly, so you can access it from your phone or computer, wherever you are.
              You can share information with your team members, clients, or anyone else you need to,
              no matter where you are. Our system is designed to make sharing information easy and convenient
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          transition={ { staggerChildren: 0.1 } }
          initial={ "offScreen" }
          whileInView={ "onScreen" }
          viewport={ {
            once: true, amount: .2
          } }
          className="bg-white shadow-3xl rounded-2xl lg:justify-between gap-12 flex flex-col items-center   w-10/12 sm:w-3/4  lg:w-10/12 mx-auto px-8 py-8 lg:flex-row md:px-20">
          <motion.img
            variants={ leftCardAnimate }
            className="md:w-1/2"
            src={ ServicesTwo }
            alt="svg"
          />
          
          <motion.div
            variants={ rightCardAnimate }
            className="flex flex-col gap-4 items-center justify-center mx-auto lg:items-start">
            <h1 className="font-bold text-2xl text-center  text-primary-100  font-nunito lg:text-left sm:text-3xl lg:text-3xl">
              Organized Data In Few Clicks
            </h1>
            <p className="font-poppins text-sm md:text-base text-center text-primary-100/80 lg:text-left">
              Our system uses state-of-the-art data visualization techniques
              to present information in a clear and concise way.
              Our charts and graphs are easy to understand and can be used to make informed decisions
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          transition={ { staggerChildren: 0.1 } }
          initial={ "offScreen" }
          whileInView={ "onScreen" }
          viewport={ {
            once: true, amount: .2
          } }
          className="bg-white shadow-3xl rounded-2xl lg:justify-between gap-12  flex flex-col items-center  w-10/12 sm:w-3/4  lg:w-10/12 mx-auto px-8 py-8 lg:flex-row-reverse  md:px-20">
          <motion.img
            variants={ rightCardAnimate }
            className="md:w-1/2"
            src={ ServicesThree }
            alt="svg"
          />
          <motion.div
            variants={ leftCardAnimate }
            className="flex flex-col gap-4 items-center justify-center mx-auto  lg:items-start"
          >
          <h1 className="font-bold text-2xl text-center  text-primary-100  font-nunito lg:text-left sm:text-3xl lg:text-3xl">
              Send Notification To Any Group
            </h1>
            <p className="font-poppins text-sm md:text-base text-center text-primary-100/80 lg:text-left">
              Sending notifications is now as easy as clicking a button. With our new system, you
              can quickly and easily send notifications to everyone in your organization,
              or to specific groups or individuals. This is a great way to keep everyone informed about
              important updates and announcements.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
