/* eslint-disable prettier/prettier */
import React from 'react';
import Hero from '../../components/recommendation/Hero';
import StockSnipe from './../../components/recommendation/Stock';

const Stock = () => {
  const stockSnipe = {
      name: "Access",
      company: "Access Holding PLC",
      price: "$ 282.75",
      health: "89",
      verdict: "Very safe"
    }

    const { name, company,price, health, verdict } = stockSnipe;
  return (
    <div>
      <Hero />
      <div className='flex justify-center items-center flex-col px-4'>
        <div className='my-14 w-full max-w-screen-xl flex justify-start items-center gap-8'>
          <p>
            Stocks to Invest in Today
          </p>
          <p>
            Updated on Nov 11th 2022  1:23 PM 
          </p>
        </div>
        <div className='w-full max-w-screen-xl'>
          <StockSnipe name={name} price ={price} company={company} health={health} verdict={verdict} />
        </div>
      </div>
    </div>
  )
}

export default Stock