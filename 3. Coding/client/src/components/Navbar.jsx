import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faComments, faUser } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {
   return (
      <nav className='list-none px-5 py-3 text-gray-700'>
         <div className="flex container justify-between border-b-2 border-gray-700 pb-2">
            <div className='text-xl font-bold '>
               <Link to="/">CoderBlog</Link>
            </div>
            <div className='flex space-x-5 items-center'>
               <li className='relative'>
                  <input type="text" className='relative text-right pr-7 bg-transparent w-40 border rounded-full cursor-pointer outline-none
                                                focus:border-gray-400 focus:cursor-text focus:py-0.5'/>
                  <FontAwesomeIcon icon={faMagnifyingGlass}  className='absolute inset-y-0 my-auto right-0 pr-2'/>
               </li>
               <li>
                  <Link to="/createpost"><FontAwesomeIcon icon={faPaperPlane} /></Link>
               </li>
               <li>
                  <Link to="/chatbot"><FontAwesomeIcon icon={faComments} /></Link>
               </li>
               <li>
                  <Link to="/login"><FontAwesomeIcon icon={faUser} /></Link>
               </li>
            </div>
         </div>
      </nav>
   )
}

export default Navbar;