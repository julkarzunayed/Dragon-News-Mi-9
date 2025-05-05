import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className="card bg-base-100 w-[90vw] sm:w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-4xl font-bold text-neutral text-center'>Please Register</h2>
                    <form className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name='name'
                            className="input w-full"
                            placeholder="Your Name" />
                        {/* Phot URL */}
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            name='photoURL'
                            className="input w-full"
                            placeholder="Your Phot URL:" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input w-full"
                            placeholder="user@email.com" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input w-full"
                            placeholder="Password" />
                        {/* Button */}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className="text-center font-semibold text-info-content mt-2">Already Have An Account ? <Link
                        to="/login"
                        className='text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;