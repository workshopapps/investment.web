import React from 'react';
import PageLayout from '../layout';
import mobileImage from './../../assets/login/login-mobile.png';
import eyeIcon from './../../assets/login/eye-icon.png';
import desktopImage from './../../assets/login/login-desktop.png';

const Login = () => {
    return (
        <PageLayout>
            <div className="flex flex-col items-center justify-center w-full pb-5">
                <div className="w-full flex flex-col items-center gap-4 md:flex-row">
                    <div className="flex flex-col w-full md:hidden">
                        <img src={mobileImage} />
                    </div>
                    <div className="hidden flex-col w-full md:flex">
                        <img src={desktopImage} />
                    </div>
                </div>
                <div className="w-full p-5">
                    <div className="flex flex-col text-center px-10">
                        <h1 className="font-HauoraBold text-xl mb-5">Welcome back</h1>
                        <p>Log in to your account - enjoy exclusive features and more</p>
                    </div>
                    <form className="flex flex-col gap-3 mt-4">
                        <div className="flex flex-col gap-1">
                            <label className="font-HauoraBold">Email</label>
                            <input
                                type={'text'}
                                placeholder={'Enter your email...'}
                                className="border border-gray-400 px-3 h-12 rounded-md text-base"
                            />
                        </div>
                        <div className="flex flex-col gap-1 relative">
                            <label className="font-HauoraBold">Password</label>
                            <input
                                type={'password'}
                                placeholder={'Enter your password...'}
                                className="border border-gray-400 px-3 h-12 rounded-md text-base"
                            />
                            <div className="absolute right-5 bottom-3 cursor-pointer">
                                {' '}
                                <img src={eyeIcon} />
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-row gap-1 items-center">
                                <input type={'checkbox'} />
                                <p className="text-sm">Remember me</p>
                            </div>
                            <p className="text-sm">Forgot password?</p>
                        </div>
                        <button className="bg-green-500 text-white h-11 rounded-md mt-2 hover:bg-green-600 transition ease-in-out delay-100">
                            Log in
                        </button>
                    </form>

                    <p className="text-sm mt-3">
                        Don&apos;t have an account?{' '}
                        <span className="text-green-500 font-HauoraBold cursor-pointer">
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};

export default Login;
