import React from 'react';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <h2 className='font-semibold text-neutral text-xl'>
                Dragon News Home
            </h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;