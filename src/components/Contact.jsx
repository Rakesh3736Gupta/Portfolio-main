import React from 'react';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import HighlightText from './../data/HighlightText';

const Contact = () => {
  return (
    <div className='bg-[#0a192f]    pt-[80px] text-black  h-screen' >
      <div className='max-w-md mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-center '>
       <HighlightText text="Contact "/>  </h1>
         <div className='flex  flex-row gap-24  justify-center pb-4'> 
         
        {/* Email */}
        <div className='flex items-center space-x-2  text-white'>
          <HiOutlineMail className='text-2xl' />
          <p className='text-sm font-medium'>   <HighlightText text=" rakeshgupta3736@gmail.com"/>  </p>
        </div>

        {/* Phone */}
        <div className='flex items-center space-x-2 mt-4 text-white' >
          <HiOutlinePhone className='text-2xl  ' />
          <p className='text-sm font-medium'><HighlightText text=" 9161603736"/></p>
        </div>
         </div>
        <form className='space-y-4'>
          {/* Name Input */}
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-white'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
              placeholder='Your Name'
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium  text-white'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
              placeholder='Your Email'
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium  text-white'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
              placeholder='Your Message'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
