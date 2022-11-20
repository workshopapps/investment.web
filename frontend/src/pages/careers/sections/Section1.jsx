import React from 'react';
import Frame1 from '../../../assets/careers/frame1.png';
import { Link } from 'react-router-dom';
import Button from '../../../components/careers/Buttons/Button';

export default function Section1() {
    return (
        <div className=" container bg-center mx-auto my-10 md:p-4 grid grid-cols-2 w-full p-2 flex-col ">
            <div className="h-1/2 px-2 py-20 w-full">
                <span className="text-primary101 py-2 text-sm font-bold">Careers</span>
                <h1 className="text-bold text-3xl tracking-widest leading-7">
                    Become a <span className="text-5xl text-primary102">PLUGGER</span>
                </h1>
                <p className="text-primaryGray text-left py-2 w-3/6 text-sm tracking-widest leading-6">
                    {' '}
                    If you love working smart, taking on big challenges and making impacts, then
                    join amazing people at mystockplug.
                </p>
                <Link to="/position">
                    <Button title="View Positions" />
                </Link>
            </div>
            <div className="w-full">
                <img src={Frame1} alt="frame1" className="w-full h-full object-cover rounded-lg" />
            </div>
        </div>
    );
}
