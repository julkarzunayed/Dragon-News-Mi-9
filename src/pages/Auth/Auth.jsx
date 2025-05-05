import React from 'react';
import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200 border border-base-200 min-h-screen'>
            <nav className='max-w-[1200px] mx-auto mt-10'>
                <NavBar></NavBar>
            </nav>
            <div className=" min-h-[90vh] flex items-center justify-center">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Auth;