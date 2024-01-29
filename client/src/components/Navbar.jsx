import React from 'react';

const Navbar = () => {
    
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-white text-xl font-light">CoderBlog</a>
                <div className="flex space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
