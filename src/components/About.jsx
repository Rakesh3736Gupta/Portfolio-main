// import React from 'react';
// import AutoType from './AutoType';
// import HighlightText from '../data/HighlightText';


// const About = () => {

 
//   return (
//     <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//       <div className='flex flex-col justify-center items-center w-full h-full'>
        
//         <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
//           <div className='sm:text-right pb-8 pl-4'>
//             <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
//              <HighlightText text={" About"}/> 
            
             
//             </p>
//           </div>
//           <div></div>
//           </div>
//           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
//             <div className=' text-2xl font-bold  text-white'>
//               <p>
//               {/* <HighlightText text={"."}/> */}
//               Hi! My name is Rakesh Gupta, and I am an IT student at REC Bijnor. I am proficient in various programming languages such as C, C++, and JavaScript. I also have experience working with frameworks and libraries such as ReactJS and ExpressJs. Whenever possible, I apply my passion for developing products using modern JavaScript libraries and frameworks. In my free time, I enjoy learning new technologies and building innovative web products
     
//           </p>
//             </div>
//             <div className=' text-3xl'>
//               {/* <p>I am passionate about building excellent software that improves
//               the lives of those around me. I specialize in creating software
//               for clients ranging from individuals and small-businesses all the
//               way to large enterprise corporations. What would you do if you had
//               a software expert available at your fingertips?</p>   */}
             
//               {/* <HighlightText text={ <AutoType/>}/> */}
//               <AutoType />
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// // AboutPage.js
// import React from 'react';
// import AutoType from './AutoType';
// import HighlightText from '../data/HighlightText';

// const AboutPage = () => {
//   return (
//     <div className='w-full min-h-screen bg-[#0a192f] text-white  pt-[85px]'>
//       <div className=' mx-auto w-full flex-wrap'>
//         {/* Heading */}
//         <h1 className='text-4xl font-bold mb-6  flex justify-center '>
//           <HighlightText text="About" />
//         </h1>

//         {/* Grid layout for two main divs */}
//         <div className='flex flex-row gap-8'>
//           {/* Left column */}
//           <div>
          
//             <p className='text-xl mb-4'>
//             Hi! My name is Rakesh Gupta, and I am an IT student at REC Bijnor. 
//             <HighlightText text="I am proficient in various programming languages such as C, C++, and JavaScript. I also have experience working with frameworks and libraries such as ReactJS and ExpressJs." />
//              Whenever possible, I apply my passion for developing products using modern JavaScript libraries and frameworks. In my free time, I enjoy learning new technologies and building innovative web products
//             </p>
//           </div>

//           {/* Right column */}
//           <div className=' '>
//             <AutoType />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


import React from 'react';
import AutoType from './AutoType';
import HighlightText from '../data/HighlightText';

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen bg-[#0a192f] text-white pt-[85px] flex-wrap'>
    {/* <h1 className='text-4xl font-bold mb-6 flex justify-center '>
          <HighlightText text="About" />
        </h1> */}
      <div className='mx-auto w-full flex-wrap'>
        {/* Heading */}
        <h1 className='text-4xl font-bold mb-6 flex justify-center '>
          <HighlightText text="About" />
        </h1>

        {/* Grid layout for two main divs */}
        <div className='flex flex-row gap-8'>
          {/* Left column */}
          <div className='w-1/2'>
            <p className='text-xl mb-4  ml-32  '>
              Hi! My name is Rakesh Gupta,
               and I am an IT student at REC Bijnor.
               <br/>
              <HighlightText text="I am proficient in various programming languages such as C, C++, and JavaScript. I also have experience working with frameworks and libraries such as ReactJS and ExpressJs." />
              <br/>
              Whenever possible, I apply my passion for developing products using modern JavaScript libraries and frameworks. In my free time,
               <HighlightText text="I enjoy learning new technologies and building innovative web products " />
            </p>
          </div>

          {/* Right column */}
          <div className='w-1/2  p-4       mr-20 '>
            <AutoType />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
