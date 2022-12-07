import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Newsletter(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        reset();
    };

    // pop up form

    return props.trigger ? (
        <div className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0, 0, 0, 0.3)]">
            <div className="flex flex-col items-center justify-center  bg-[#ffffff] rounded-lg border-2 border-[#fffff]">
                <AiOutlineCloseCircle
                    className="flex w-8 h-8 m-2 items-center justify-center ml-auto  cursor-pointer border-2 border-[#fffff] rounded-full"
                    onClick={() => props.setTrigger(false)}
                />
                <div
                    className="flex md:px-[150px] pt-[10px] pb-10 items-center text-[#000718
] ">
                    <div className="flex flex-col justify-center items-center ">
                        <h1
                            className="flex pt-2 font-semibold text-2xl text-[#000718
]">
                            Don’t miss out !
                        </h1>

                        <p className="flex pt-4 text-center font-normal text-base md:w-[504px] md:px-8">
                            Subscribe to our weekly Email Newsletter to receive stock tips and
                            recommendation
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col md:flex-row md:w-[506px]  h-[110px] md:h-[56px] mt-4 border p-1 border-[#A3AAB2] rounded-lg">
                            <input
                                type="email"
                                className="flex w-full md:w-4/5 h-full px-2 text-base text-[#000718] border-none focus:outline-none focus:border-none bg-[#ffffff]"
                                placeholder="Enter email address"
                                {...register('email', { required: true })}
                            />

                            <button className="w-full  h-[60px] mt-1 md:mt-0 md:w-[160px] md:h-[48px]  text-sm font-normal text-black bg-[#1BD47B] border rounded-lg border-none focus:outline-none focus:border-none ml-auto">
                                Keep me updated
                            </button>
                        </form>
                        {errors.email && (
                            <span className="flex text-red-500">Email is required</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        ''
    );
}

//     return props.trigger ? (
//         <div className="flex items-center justify-center  bg-[#ffffff] rounded-lg">
//             <div className="flex md:px-[150px] py-[60px] items-center text-white ">
//                 <div className="flex flex-col justify-center items-center ">
//                     <h1 className="flex pt-2 font-semibold text-2xl text-[#E8FBF2]">
//                         Don’t miss out !
//                     </h1>

//                     <p className="flex pt-4 text-center font-normal text-base md:w-[504px] md:px-8">
//                         Subscribe to our weekly Email Newsletter to receive stock tips and
//                         recommendation
//                     </p>

//                     <form
//                         onSubmit={handleSubmit(onSubmit)}
//                         className="flex flex-col md:flex-row md:w-[506px]  h-[110px] md:h-[56px] mt-4 border p-1 border-[#A3AAB2] rounded-lg">
//                         <input
//                             type="email"
//                             className="flex w-full md:w-4/5 h-full px-2 text-base text-white border-none focus:outline-none focus:border-none bg-[#000718]"
//                             placeholder="Enter email address"
//                             {...register('email', { required: true })}
//                         />

//                         <button className="w-full  h-[60px] mt-1 md:mt-0 md:w-[160px] md:h-[48px]  text-sm font-normal text-black bg-[#1BD47B] border rounded-lg border-none focus:outline-none focus:border-none ml-auto">
//                             Keep me updated
//                         </button>
//                     </form>
//                     {errors.email && <span className="flex text-red-500">Email is required</span>}
//                 </div>
//             </div>
//         </div>
//     ) : (
//         ''
//     );
// }
