import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const index = ({ children, passedFunc, setPassedFunc }) => {
    return (
        <div
            className="w-screen fixed top-0 right-0 h-screen bg-[#00000030] flex justify-center items-center p-4 shadow-2xl"
            onClick={() => setPassedFunc(!passedFunc)}>
            <div className="bg-white max-w-[379px] w-fit max-h-[424px] h-fit text-4xl rounded-[10px] p-7 z-3">
                <div className="flex justify-end">
                    <Tippy content={<span className="">Close</span>} placement="bottom">
                        <div
                            onClick={() => setPassedFunc(!passedFunc)}
                            className="w-7 h-7 flex justify-center items-center border-[#545964] text-[#545964] border rounded-full -mt-3 cursor-pointer">
                            &times;
                        </div>
                    </Tippy>
                </div>{' '}
                {children}{' '}
            </div>
        </div>
    );
};

export default index;
