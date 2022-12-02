import React from 'react';

const index = ({ children, passedFunc, setPassedFunc }) => {
    return (
        <div
            className="w-screen fixed top-0 right-0 h-screen bg-[#00000030] flex justify-center items-center p-4"
            onClick={() => setPassedFunc(!passedFunc)}>
            <div className="bg-white max-w-[379px] w-full max-h-[424px] h-1/2 text-4xl rounded-[10px] p-7">
                {' '}
                {children}{' '}
            </div>
        </div>
    );
};

export default index;
