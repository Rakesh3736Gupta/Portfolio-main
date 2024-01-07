// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import HighlightText from '../data/HighlightText';
// import Forname from '../data/Forname';
// import Rak from '../assets/Rak.png'
// import About from './About';
// import Skills from './Skills';
// import Work from './Work';
// import Contact from './Contact';



// const Home = () => {

//   return (
//     <div name='home' className='w-full  bg-[#0a192f]  h-screen '>
//       {/* Container */}

//       <div className='max-w-[1200px] flex flex-row  h-full gap-6'>

//         <div className='max-w-[800px]   flex flex-col justify-center h-full gap-6 mx-20  my-9'>
//           <div>
//             <h1 className='text-3xl sm:text-7xl font-bold '>
//               <HighlightText text={"Hi! Rakesh Gupta"} />

//             </h1>
//           </div>


//           {/* Running the name  */}
//           <div className=" flex flex-row text-3xl sm:text-2xl font-bold  gap-4">
//             <div>
//               <h2 className="  text-yellow-50"> I'm a </h2>
//             </div>
//             <div>
//               <Forname />
//             </div>
//           </div>

//           {/* section--3 */}
//           <div>
//             <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
//               View Work
//               <span className='group-hover:rotate-90 duration-300'>
//                 <HiArrowNarrowRight className='ml-3 ' />
//               </span>
//             </button>
//           </div>

//         </div>
//         <div  className='bg-[#0a192f] w-[400px]  my-48    rounded-full   pl-32'>
//         <img src={Rak} alt='Main_photo'  className='bg-[#0a192f] rounded-full' />
//          </div>

//         {/* photo section */}
    

//       </div>

//    <About/>
//    <Skills/>
//    <Work/>
//    <Contact/>

//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import HighlightText from '../data/HighlightText';
import Forname from '../data/Forname';
import Rak from '../assets/Rak.png';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigate to a specific route
    navigate('/Work');
  }
  return (
    <div name='home' className='w-full bg-[#0a192f] h-screen'>
      {/* Container */}
      <div className='max-w-[1200px] flex flex-col md:flex-row mx-auto h-full gap-6 p-6'>
        {/* Left Section */}
        <div className='flex flex-col justify-center gap-6 md:w-2/3'>
          <h1 className='text-3xl sm:text-7xl font-bold'>
            <HighlightText text={"Hi! Rakesh Gupta"} />
          </h1>

          {/* Running the name */}
          <div className='flex flex-row text-3xl sm:text-2xl font-bold gap-4'>
            <div>
              <h2 className='text-yellow-50'> I'm a </h2>
            </div>
            <div>
              <Forname />
            </div>
          </div>

          {/* View Work button */}
          <div>
            <button onClick={handleNavigation} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>

            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='hidden md:block md:w-1/3  mt-24'>
          <img src={Rak} alt='Main_photo' className='rounded-full' />
        </div>
      </div>

      {/* Additional Sections */}
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home ;

