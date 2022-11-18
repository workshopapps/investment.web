import React from 'react';
import searchIcon from './search.svg';

function Help() {
    return (
        <div className="pt-8 px-4 flex flex-col w-full">
            <h1 className="font-bold text-xl mb-4">How Can We Help You?</h1>
            <div className="flex h-14 border px-3 focus-within:border-black border-[#A3AAB2] rounded">
                <input
                    className="placeholder:text-xs fl placeholder:font-normal placeholder:text-[#A3AAB2] w-full focus:outline-0 "
                    type="text"
                    placeholder="Ask Your Question"
                />
                <button>
                    <img src={searchIcon} alt="search" />
                </button>
            </div>
        </div>
    );
}

export default Help;
