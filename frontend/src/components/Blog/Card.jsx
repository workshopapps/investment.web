/* eslint-disable react/prop-types */
import React from 'react';
import arrowright from '../../assets/blog/arrow-right.svg';
import circle from '../../assets/blog/Ellipse 1.svg';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <div className="card bg-[#F5F5F5] rounded flex flex-col lg:w-[30%] sm:w-[45%] ">
            <img src={item.img} alt="blog article image" />
            <div className="card-details p-4">
                <div className=" flex gap-2 text-xs lg:text-sm">
                    <span>{item.name}</span>
                    <img src={circle} alt="" />
                    <span>{item.date}</span>
                </div>
                <div className="card-details-large font-semibold text-xl lg:text-2xl">
                    {item.title}
                </div>
                <div className="card-details-main text-sm lg:text-base">{item.description}</div>
                <div className="read-article text-[#1BD47B] flex font-semibold mt-4 gap-2 items-center">
                    <Link to="/articles" className="flex gap-1">
                        <span>Read article</span> <img src={arrowright} alt="" className="mt-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
