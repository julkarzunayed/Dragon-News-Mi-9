import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div className='mt-10'>
            <h2 className='font-semibold text-neutral text-xl'>
                Find Us On
            </h2>
            <div className="join w-full join-vertical mt-6">
                <button className="btn hover:bg-base-300 md:pl-9 justify-start bg-base-100 join-item"><FaFacebook/> Facebook</button>
                <button className="btn hover:bg-base-300 md:pl-9 justify-start bg-base-100 join-item"><FaTwitter/> Twitter</button>
                <button className="btn hover:bg-base-300 md:pl-9 justify-start bg-base-100 join-item"><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;