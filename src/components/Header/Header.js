import React from 'react';
import './Header.css'
import logo from '../../cybercraft-logo.png';

const Header = () => {
    return (
        <header className=" mb-2">
            <div className='container mx-auto px-6 flex items-center justify-between'>
                <div className="flex items-center ">
                    <img className="h-10 m-4" src={logo} alt="Logo" />
                </div>
                <div className="flex items-center">
                    <input
                        className="w-96 bg-gray-200 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                        type="text"
                        placeholder="Search.."
                    />
                </div>
            </div>
        </header >

    );
};

export default Header;