import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faComments, faUser } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {

   const [isOpen, setIsOpen] = useState(true);
   const [isLoggedIn, isetIsLoggedIn] = useState(false);

   function handleClick() {
      setIsOpen(prev => !prev);
   }

   return (
      <nav className='list-none px-5 py-3 text-gray-700'>
         <div className="flex container justify-between border-b-2 border-gray-700 pb-2">
            <div className='text-xl font-bold '>
               <Link to="/">CoderBlog</Link>
            </div>
            <div className='flex space-x-5 items-center'>
               <li className='relative'>
                  <input type="text" className='relative text-right pr-7 py-0.5 bg-transparent w-40 border rounded-full cursor-pointer outline-none
                                                focus:border-gray-400 focus:cursor-text'/>
                  <FontAwesomeIcon icon={faMagnifyingGlass}  className='absolute inset-y-0 my-auto right-0 pr-2'/>
               </li>
               <li>
                  <Link to="/createpost" className='text-lg'><FontAwesomeIcon icon={faPaperPlane} /></Link>
               </li>
               <li>
                  <Link to="/chatbot" className='text-lg'><FontAwesomeIcon icon={faComments} /></Link>
               </li>
               <li>
                  {
                     isLoggedIn ? (
                        <Link to="/profile" className='text-lg'><FontAwesomeIcon className='text-lg' icon={faUser}/></Link>
                     ) : (
                        <Link to="/login" className='text-lg'><input type="button" value="login" className='cursor-pointer border border-gray-400 px-2 rounded hover:text-white hover:bg-gray-400 hover:transition hover:delay-75 hover:ease-in'/></Link>
                     )
                  }
               </li>
            </div>
         </div>
      </nav>
   )
}

export default Navbar;