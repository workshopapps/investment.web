/* eslint-disable prettier/prettier */
import React from 'react';
import Logo from './../../assets/header/close.svg';

// eslint-disable-next-line react/prop-types
const Stock = ({name, company, price, health, verdict}) => {
    const healthStyle = {
        background: "#139757",
        width: "44px",
        color: "white"
    }
  return (
    <div className='w-96 shadow-xl p-6 rounded-lg'>
        <div className='mb-7 flex justify-start gap-5'>
            <div className='w-12 h-12 rounded-full'>
                <img src={Logo} alt="" className='w-full' />
            </div>
            <div className='flex flex-col justify-between items-center'>
                <h2>{name}</h2>
                <h3>{company}</h3>
            </div>
        </div>
        <div className='gap-1.5 text-gray-600'>
            <div className='flex justify-between items-center'>
                <p>Stock Price</p>
                <p>{price}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Health Score</p>
                <p style={healthStyle} className="flex justify-center items-center rounded-md text-bold">{health}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>Verdict</p>
                <p>{verdict}</p>
            </div>
        </div>
    </div>
  )
}

export default Stock