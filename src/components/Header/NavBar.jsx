import React from 'react';
import { NavLink } from 'react-router';
import userLogo from "../../assets/user.png"

const NavBar = () => {
    return (
        <div className='flex justify-between items-center mt-6'>
            <div className=""></div>
            <div className="flex gap-3 text-info-content">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex  gap-3">
                <img className='w-14' src={userLogo} alt="" />
                <p className='bg-primary text-base-100 px-10 py-4 font-bold text-[20px]'>Login</p>
            </div>
        </div>
    );
};

export default NavBar;