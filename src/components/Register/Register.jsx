import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log({name, photoURL, email, password});

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message, error.code)
            })
    }

    

    return (
        <div>
            <div className="card bg-base-100 w-[90vw] sm:w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-4xl font-bold text-neutral text-center'>Please Register</h2>
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name='name'
                            required
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
                            required
                            className="input w-full"
                            placeholder="user@email.com" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            required
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