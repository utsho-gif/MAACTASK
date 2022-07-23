import React from 'react';
import aven from '../../asset/Aven.png';
import amara from '../../asset/Amara.png';
import circle from '../../asset/Circle.png';
import kyan from '../../asset/Kyan.png';
import treva from '../../asset/Treva.png';

const Collabs = () => {
    return (
        <div className='flex justify-evenly my-64 gap-x-20 mx-32'>
            <img src={aven} alt="" />
            <img src={amara} alt="" />
            <img src={circle} alt="" />
            <img src={kyan} alt="" />
            <img src={treva} alt="" />
        </div>
    );
};

export default Collabs;