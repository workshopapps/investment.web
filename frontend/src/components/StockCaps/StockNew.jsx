/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react'

const StockNew = ({img, source, title, time}) => {
  return (
    <div className='w-full flex gap-[10px] justify-start items-start w-full border-1 border-[#E0E2E5] p-[10px]' style={{borderBottom: '1px solid #E0E2E5'}}>
        <div className='h-[87px] md:h-[233px] rounded max-w-6xl min-w-[72px] md:max-w-[288px] md:min-w-[288px] ' style={{backgroundImage: `url('${img}')`, backgroundSize: 'cover', overflow:'hidden'}}>
            
        </div>
        <div className='flex flex-col justify-between items-start gap-[5px]'>
            <div className='text-[#66717E] md:text-[32px] md:font-normal md:font-sm font-bold text-[12px]  flex gap-[18px] justify-start items-center mb-[#1B1105]'>
                <span>{source}</span>
                <span >{time}</span>
            </div>
            <div className='text-[#1B1105] text-[12] md:text-[40px] '>
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
};

export default StockNew;