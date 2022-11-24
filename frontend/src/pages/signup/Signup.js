import React, { useState } from 'react';
import signupimg from './../../assets/signup/signup-img.png';
import signupdesk from './../../assets/signup/signup-desk-img.png';
import googleicon from './../../assets/signup/googleicon.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [passwordType] = useState('password');
    const [signupForm, setSignUpForm] = useState({
        fullname: '',
        email: '',
        password: ''
    });

    return (
        <div className="mb-12 md:h-screen md:overflow-hidden md:mb-0">
            <div className="flex flex-col justify-center items-center md:flex-row-reverse lg:gap-12 lg:pl-5 lg:items-start">
                <div className="w-full lg:overflow-hidden">
                    <img src={signupimg} className="w-full md:hidden" />
                    <img src={signupdesk} className="hidden md:flex" />
                </div>
                <div className="w-5/6 mt-8 flex flex-col gap-3 md:px-4 md:gap-2 lg:w-full lg:px-10 lg:mt-16 lg:gap-3">
                    <h1 className="font-HauoraBold text-xl text-center tracking-wide">
                        Create Account
                    </h1>
                    <p className="text-sm text-center mb-3 sm:text-base">
                        Welcome to MyStockPlug professional stock brokerage
                    </p>
                    <button className="bg-green-100 flex items-center w-full py-3 gap-2 justify-center rounded-sm">
                        <img src={googleicon} width={'20px'} />
                        <h2 className="text-sm font-HauoraBold">Sign Up with Google</h2>
                    </button>

                    <div className="flex flex-row gap-3 items-center">
                        <div className="w-full h-0.5 bg-gray-400 rounded-sm"></div>
                        <p className="text-sm font-HauoraBold">or</p>
                        <div className="w-full h-0.5 bg-gray-400 rounded-sm"></div>
                    </div>
                    <form className="flex flex-col gap-3 w-full md:justify-center md:place-self-center">
                        <div className="flex flex-col gap-0.5">
                            <label className="font-HauoraBold text-sm">Name</label>
                            <input
                                type={'text'}
                                placeholder={'Full Name'}
                                className="border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                                value={signupForm.fullname}
                                name={'fullname'}
                            />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label className="font-HauoraBold text-sm">Email</label>
                            <input
                                type={'email'}
                                placeholder={'Email Address'}
                                className="border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                                value={signupForm.email}
                                name={'email'}
                            />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label className="font-HauoraBold text-sm">Password</label>
                            <input
                                type={passwordType}
                                placeholder={'Password'}
                                className="border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                                value={signupForm.password}
                                name={'password'}
                            />
                        </div>
                        <button className="capitalize bg-green-500 text-white h-11 rounded-md mt-2 hover:bg-green-600 transition ease-in-out delay-100">
                            create account
                        </button>
                    </form>

                    <div className="flex justify-center text-sm md:place-self-start md:text-base">
                        <p>
                            Already have an account?{' '}
                            <span className="text-green-500 font-HauoraBold cursor-pointer ml-1">
                                <Link to={'/login'}>Log in</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
