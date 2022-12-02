/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../assets/help/search.svg';
const HeroSection = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value)=>{
            return value.question.toLowerCase().includes(searchWord)
        })
        if(searchWord == ''){
            setFilteredData([])
        } else{
            setFilteredData(newFilter)
        }
    };
    return (
        <div
            data-testid="hero-section"
            className='flex bg-[url("/src/assets/images/myhero.png")] relative bg-no-repeat bg-cover  items-center pl-5 md:pl-[50px] lg:pl-[100px] h-[160px] md:h-[360px]'>
            <div className="flex flex-col text-white gap-[6px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%]">
                <h1 className="font-bold text-center sm:text-3xl md:text-4xl text-xl lg:text-[40px]  text-white lg:font-semibold mb-10">
                    The Yieldvest Help Center
                </h1>
                <p className="text-white">How Can We Help You?</p>
                <div className="flex items-center h-12 lg:h-14 border pl-3 lg:pl-4 focus-within:border-black border-[#A3AAB2] bg-white rounded">
                    <input
                        className="placeholder:text-xs h-6 md:sm:placeholder:text-sm lg:placeholder:text-base placeholder:font-normal placeholder:text-[#A3AAB2] w-full focus:outline-0 text-[black]"
                        type="search"
                        placeholder="Ask Your Question"
                        onChange={handleFilter}
                    />
                    {filteredData.length != 0 && (
                        <div className="data__results absolute top-[100%] bg-white text-[black]  left-0">
                            {filteredData.map((value, index) => {
                                return (
                                    <div key={index} className="m-2 border-[2px] p-4  border-[black]">
                                        {value.question} <br />
                                        {value.answer}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <button className="w-12 lg:w-14 h-full flex items-center justify-center">
                        <img src={searchIcon} className="w-6 h-6" alt="search" />
                    </button>
                </div>
            </div>
        </div>
    );
};
HeroSection.propTypes = { data: PropTypes.array };
export default HeroSection;
