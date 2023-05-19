import React, { useState } from 'react'


const Login = () => {
   const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState(true);

   function handleClick() {
      setIsAlreadyLoggedIn(prev => !prev);
   }

   function handleSubmit(event) {
      event.preventDefault();
      console.log("form done");
   }

   return (
      <div className='h-screen flex flex-col items-center justify-center bg-gray-200'>
      <p className='text-3xl text-center mb-7'>{isAlreadyLoggedIn ? "Login" : "Signup"} to get into CoderBlog</p>
      <div className="w-80 relative">
         <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
               <p className='absolute inset-y-0 left-0 py-2 pl-2 text-gray-500'>email | </p>
               <input type="email" placeholder='enter your email' className='rounded-2xl w-full  pl-16 pr-3 py-2 outline-none border border-gray-400 focus:shadow-md'/>
            </div>
            <div className="mb-4 relative">
               <p className='absolute inset-y-0 left-0 py-2 pl-2 text-gray-500'>password | </p>
               <input type="password" placeholder='enter your password' className='rounded-2xl w-full  pl-24 pr-3 py-2 outline-none border border-gray-400 focus:shadow-md'/>
            </div>
            {
               !isAlreadyLoggedIn && (
                  <div className="mb-4 relative">
                        <p className='absolute inset-y-0 left-0 py-2 pl-2 text-gray-500'>re-password | </p>
                        <input type="password" placeholder='enter your password again' className='rounded-2xl w-full  pl-28 pr-3 py-2 outline-none border border-gray-400 focus:shadow-md'/>
                  </div>
               )
            }
            <div className="flex justify-between">
               <button className='mt-2 border border-gray-400 rounded-lg px-3 py-2 hover:border-green-400 hover:bg-green-400 hover:transition hover:ease-out hover:shadow-md'>Submit</button>
               <input type='button' value={!isAlreadyLoggedIn ? "Not registered yet? Click here__" : "Already registered? login here__"} className='mt-2 cursor-pointer' onClick={handleClick}/>
            </div>
            
         </form>
      </div>

      </div>
   )
}

export default Login;