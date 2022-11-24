import React from 'react';
import signupimg from './../../assets/signup/signup-img.png';
import googleicon from './../../assets/signup/googleicon.png';

const Signup = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                    <img src={signupimg} className="w-full" />
                </div>
                <div className="bg-green-200 w-5/6 mt-8">
                    <h1 className="font-HauoraBold text-lg">Create Account</h1>
                    <p className="text-sm">Welcome to MyStockPlug professional stock brokerage</p>
                    <button className="bg-yellow-100 flex items-center w-full p-2 gap-2 justify-center">
                        <img src={googleicon} width={'20px'} />
                        <h2 className="text-xs font-HauoraBold">Sign Up with Google</h2>
                    </button>

                    <div className="flex flex-row gap-3 items-center">
                        <div className="w-full h-0.5 bg-gray-100 rounded-sm"></div>
                        <p className="text-sm font-HauoraBold">or</p>
                        <div className="w-full h-0.5 bg-gray-100 rounded-sm"></div>
                    </div>

                    <form></form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
