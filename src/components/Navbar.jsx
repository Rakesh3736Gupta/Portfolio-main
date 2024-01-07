// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
//       <div>
//         <img src={Logo} alt="Logo Image" style={{ width: '200px' }} />
//       </div>

//       {/* Menu for laptops */}
//       <ul className='hidden md:flex space-x-4'>
//         <li>
//           <Link to="/" className="text-white">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="text-white">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/skills" className="text-white">
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link to="/work" className="text-white">
//             Work
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="text-white">
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Hamburger for mobile */}
//       <div onClick={handleClick} className='md:hidden z-10'>
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>

//       {/* Mobile menu */}
//       <ul
//         className={
//           !nav
//             ? 'hidden'
//             : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden'
//         }
//       >
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to='home' className="text-white">
//             Home
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to='about' className="text-white">
//             About
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to='skills' className="text-white">
//             Skills
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to='work' className="text-white">
//             Work
//           </Link>
//         </li>
//         <li className='py-6 text-4xl'>
//           <Link onClick={handleClick} to='contact' className="text-white">
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Social icons */}
//        {/* Social icons */}
//       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
//         <ul>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='https://www.linkedin.com/in/rakesh-gupta-88aa76221/'
//             >
//               Linkedin <FaLinkedin size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href=' https://github.com/Rakesh3736Gupta?tab=repositories'
//             >
//               Github <FaGithub size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='mailto:rakeshgupta3736@gmail.com'
//             >
//               Email <HiOutlineMail size={30} />
//             </a>
//           </li>
//           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
//             <a
//               className='flex justify-between items-center w-full text-gray-300'
//               href='https://drive.google.com/file/d/1f8MCJtJGtEfG8XwE2H0KClnmLI_1E8y3/view?usp=drivesdk'>
//               Resume <BsFillPersonLinesFill size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleClick = () => setNav(!nav);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
    setNav(false);
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '200px' }} />
      </div>

      {/* Menu for laptops */}
      <ul className='hidden md:flex space-x-4'>
        <li>
          <Link
            to="/"
            className={`text-white ${
              selectedLink === 0 ? 'border-b-2 border-yellow-500' : ''
            } ${selectedLink === 0 ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick(0)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`text-white ${
              selectedLink === 1 ? 'border-b-2 border-yellow-500' : ''
            } ${selectedLink === 1 ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick(1)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={`text-white ${
              selectedLink === 2 ? 'border-b-2 border-yellow-500' : ''
            } ${selectedLink === 2 ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick(2)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className={`text-white ${
              selectedLink === 3 ? 'border-b-2 border-yellow-500' : ''
            } ${selectedLink === 3 ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick(3)}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`text-white ${
              selectedLink === 4 ? 'border-b-2 border-yellow-500' : ''
            } ${selectedLink === 4 ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick(4)}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger for mobile */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden'
        }
      >
        <li className='py-6 text-4xl'>
          <Link
            onClick={() => handleLinkClick(0)}
            to='home'
            className={`text-white ${
              selectedLink === 0 ? 'font-bold scale-105' : ''
            }`}
          >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={() => handleLinkClick(1)}
            to='about'
            className={`text-white ${
              selectedLink === 1 ? 'font-bold scale-105' : ''
            }`}
          >
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={() => handleLinkClick(2)}
            to='skills'
            className={`text-white ${
              selectedLink === 2 ? 'font-bold scale-105' : ''
            }`}
          >
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={() => handleLinkClick(3)}
            to='work'
            className={`text-white ${
              selectedLink === 3 ? 'font-bold scale-105' : ''
            }`}
          >
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={() => handleLinkClick(4)}
            to='contact'
            className={`text-white ${
              selectedLink === 4 ? 'font-bold scale-105' : ''
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
     {/* Social icons */}
     <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/rakesh-gupta-88aa76221/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=' https://github.com/Rakesh3736Gupta?tab=repositories'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:rakeshgupta3736@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1f8MCJtJGtEfG8XwE2H0KClnmLI_1E8y3/view?usp=drivesdk'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

