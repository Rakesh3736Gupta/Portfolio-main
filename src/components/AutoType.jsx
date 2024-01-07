// import React from 'react'
// import CodeBlocks from '../data/CodeBlocks'
// // import HighlightText from '../data/HighlightText'

// const AutoType = () => {
//   return (
//     <div name='about' className='w-[100] h-screen bg-[#0a192f] text-gray-300 Text-3xl'>
//     <div>
//       {/* <div className='flex flex-col justify-center items-center w-full h-full'> */}
//       <CodeBlocks 
//                     position={"lg:flex-row-reverse"}
               

//                     codeblock={[`<!DOCTYPE html>`, `<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>`, `h1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`]}
//                     codeColor={"text-yellow-25 "}
//                     // backgroudGradient={elipseImage2}
//                     backgroudGradient={<div className="codeblock2 relative"></div>}
//                 />
//       </div>
//     </div>
//   )
// }

// export default AutoType

import React from 'react';
import CodeBlocks from '../data/CodeBlocks';

const AutoType = () => {
  return (
    <div name='about' className='w-full  bg-[#0a192f] text-gray-300 text-xl md:text-3xl lg:text-4xl'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <CodeBlocks
          position={'lg:flex-row-reverse'}
          codeblock={[
            `<!DOCTYPE html>`,
            `<html>\n<head><title>Example</title><link rel="stylesheet" href="styles.css">\n</head>\n<body>`,
            `<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`,
          ]}
          codeColor={'text-yellow-25 '}
          backgroudGradient={<div className='codeblock2 relative'></div>}
        />
      </div>
    </div>
  );
};

export default AutoType;
