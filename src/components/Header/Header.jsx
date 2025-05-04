import React from 'react';
import titleImage from "../../assets/logo.png"
import date from 'date-and-time';
// import { format } from 'date-and-time';

const Header = () => {
    const now = new Date();
    // const kjk = 
    return (
        <div className='flex flex-col items-center mt-6 gap-3'>
            <img className='max-w-[450px]' src={titleImage} alt="" />
            <p className="text-info-content text-lg">Journalism Without Fear or Favour</p>
            {/* <p className="">Sunday, November 27, 2025</p> */}
            <p className="font-semibold text-info-content text-lg">
                <span className='text-neutral'>{date.format(now, "dddd, ")}</span>
                {date.format(now, "MMMM, DD, YYYY")}
            </p>
        </div>
    );
};

export default Header;