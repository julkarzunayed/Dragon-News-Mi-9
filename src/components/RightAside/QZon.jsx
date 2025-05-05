import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playGroundImg from "../../assets/playground.png"
import bgImg from "../../assets/bg.png"

const QZon = () => {
    return (
        <div className='mt-10 bg-base-300'>
            <h2 className='font-semibold text-neutral text-xl'>
                Q-Zone
            </h2>
            <div className="p-1 *:mt-3">
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playGroundImg} alt="" />
            </div>
            <div className="mt-10">
                <img src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default QZon;