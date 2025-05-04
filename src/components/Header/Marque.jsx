import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='flex mt-8 p-4 pr-8 bg-base-200 gap-4'>
            <p className='bg-secondary px-6 py-4 font-medium text-base-100 text-lg'>Latest</p>
            <Marquee>
                <p className='font-semibold text-neutral text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laborum reprehenderit voluptate ullam sit blanditiis aliquam illo laboriosam quis magni repellendus beatae iusto doloribus error unde veritatis a esse eaque?</p>
            </Marquee>
        </div>
    );
};

export default Marque;