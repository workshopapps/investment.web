/* eslint-disable prettier/prettier */
import React from 'react';
import Data from './../../store/capsData/capsData';
import StockNew from './StockNew';

const CapList = () => {
  return (
    <div className=''>
        <div>
            {
                Data.map((item, index) => {
                    const {img, source, title, time} = item;
                    return (<StockNew img={img} source={source} title={title} time={time} key={index} />);
                })
            }
        </div>
    </div>
  )
}

export default CapList