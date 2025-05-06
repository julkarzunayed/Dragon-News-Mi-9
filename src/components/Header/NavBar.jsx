import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from "../../assets/user.png"
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        console.log("logout clicked")
        signOutUser()
            .then(() => {

            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className='flex justify-center p-4  items-center mt-6 relative'>
            <div className=""></div>
            <div className="flex gap-3 text-info-content">
                <NavLink to="/category/0">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="absolute right-0 flex  gap-3">
                <img className='w-14' src={userLogo} alt="" />
                {
                    user ? <button
                        onClick={handleLogOut}
                        className='bg-primary text-base-100 px-10 py-4 font-bold text-[20px]'>Logout</button> : <Link to="/login" className='bg-primary text-base-100 px-10 py-4 font-bold text-[20px]'>Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;