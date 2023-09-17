import React from 'react'
import { useFormik } from 'formik';
 import * as Yup from 'yup';
const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },

    validationSchema: Yup.object( {
      firstName: Yup.string()
        .required( 'Enter a value for this field.' ),
      lastName: Yup.string()
        .required( 'Enter a value for this field.' ),
      email: Yup.string().email( 'Invalid email address' ).required( 'Enter a value for this field.' ),
    } ),

    onSubmit: values => {
      // values is user input 
    },
  } );
  
  return (
    <div id='contact' className=''>
      <h1 className="font-nunito flex justify-center font-bold  text-primary-100  text-3xl">Contact Us</h1>
      <div className="bg-white w-11/12 md:w-7/12 sm:3/4 mx-auto  px-12 py-8 rounded shadow-lg mt-8">
        <form onSubmit={formik.handleSubmit } action="">
          <div className="flex  flex-col justify-between gap-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
              <div className='font-poppins w-full flex flex-col gap-3'>
                <label htmlFor="firstName" className=''>First Name:</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder='First Name'
                  onChange={ formik.handleChange }
                  onBlur={ formik.handleBlur }
                  value={ formik.values.firstName }
                  className=' border-[1px] rounded px-4 py-1.5 border-primary-100/40 focus:ring-0 focus:outline-none focus:shadow-lg focus:-translate-y-[1px]' />
                <p className={ `transition-all duration-300  font-poppins text-[13px] text-red-400 ${ formik.touched.firstName && formik.errors.lastName ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{formik.errors.firstName}</p>
              </div>
              <div className='font-poppins w-full  flex flex-col gap-3'>
                <label htmlFor="lastName" className=''>Last Name:</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder='Last Name'
                  onChange={ formik.handleChange }
                  onBlur={ formik.handleBlur }
                  value={ formik.values.lastName }
                  className=' border-[1px] rounded px-4 py-1.5 border-primary-100/40 focus:ring-0 focus:outline-none focus:shadow-lg focus:-translate-y-[1px]' />
                <p className={ `transition-all duration-300 font-poppins text-[13px] text-red-400 ${ formik.touched.lastName && formik.errors.lastName ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ formik.errors.lastName }</p>
              </div>
            </div>
            <div className='font-poppins flex flex-col gap-3'>
              <label htmlFor="email" className=''>Email:</label>
              <input
                id="email"
                type="text"
                placeholder='example@gmail.com'
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.email }
                className='border-[1px] rounded px-4 py-1.5 border-primary-100/40 focus:ring-0 focus:outline-none focus:shadow-lg focus:-translate-y-[1px]' />
              <p className={ `transition-all duration-300 font-poppins text-[13px] text-red-400 ${ formik.touched.email && formik.errors.email ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ formik.errors.email }</p>
            </div>
            <button type='submit' className="rounded bg-primary-200  hover:bg-primary-200/90 cursor-pointer py-2 px-6 text-primary-400 text-lg  font-poppins w-full ">Submit</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ContactUs
