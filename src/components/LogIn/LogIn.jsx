import React from 'react';
import { Link } from 'react-router';

const LogIn = () => {
    return (
        <div>
            <div className="card bg-base-100 w-[90vw] sm:w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-4xl font-bold text-neutral text-center'>Please LogIn</h2>
                    <form className="fieldset">
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
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className="text-center font-semibold text-info-content mt-2">Dont’t Have An Account ? <Link
                        to="/register"
                        className='text-secondary'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;