import React from 'react';
import PageLayout from '../layout';
import mobileImage from './../../assets/login/login-mobile.png';
import eyeIcon from './../../assets/login/eye-icon.png';
// import eyeIconOpen from './../../assets/login/eye-icon-2.png';
import desktopImage from './../../assets/login/login-desktop.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();

    //form
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
        checkbox: false
    });

    //password toggle
    // const [passwordToggle, setPasswordToggle] = useState(false);

    const [passwordType, setPasswordType] = useState('password');
    // console.log(passwordRef.current.type);

    //track changes in form
    const handleChange = (event) => {
        const { type, name, value, checked } = event.target;
        setLoginForm((prevState) => {
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginForm.email !== '' && loginForm.password !== '' && loginForm.checkbox === true) {
            setInterval(
                () => {
                    navigate('/landing');
                },
                1,
                500
            );
        }
    };

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    };

    return (
        <PageLayout>
            <div className="flex flex-col items-center justify-center w-full pb-5 md:flex-row-reverse lg:items-start">
                <div className="w-full flex flex-col items-center gap-4">
                    <div className="flex flex-col w-full md:hidden">
                        <img src={mobileImage} />
                    </div>
                    <div className="hidden flex-col w-full md:flex">
                        <img src={desktopImage} />
                    </div>
                </div>
                <div className="w-full p-5 md:flex md:flex-col md:justify-center md:items-center lg:mt-24">
                    <div className="flex flex-col text-center px-10 md:w-4/5 md:px-0 md:items-center">
                        <h1 className="font-HauoraBold text-xl mb-5 md:text-2xl">Welcome back</h1>
                        <p className="md:text-left">
                            Log in to your account - enjoy exclusive features and more
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 mt-7 md:w-4/5 md:justify-center">
                        <div className="flex flex-col gap-1">
                            <label className="font-HauoraBold">Email</label>
                            <input
                                type={'email'}
                                placeholder={'Enter your email...'}
                                className="border border-gray-400 px-3 h-12 rounded-md text-base focus:outline-green-400 focus:shadow"
                                onChange={handleChange}
                                value={loginForm.email}
                                name={'email'}
                            />
                        </div>
                        <div className="flex flex-col gap-1 relative">
                            <label className="font-HauoraBold">Password</label>
                            <input
                                type={passwordType}
                                placeholder={'Enter your password...'}
                                className="border border-gray-400 px-3 h-12 rounded-md text-base  focus:outline-green-400 focus:shadow"
                                onChange={handleChange}
                                value={loginForm.password}
                                name={'password'}
                            />
                            <div
                                className="absolute right-5 bottom-3 cursor-pointer"
                                onClick={togglePassword}>
                                {' '}
                                <img src={eyeIcon} />
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-row gap-1 items-center">
                                <input
                                    type={'checkbox'}
                                    onChange={handleChange}
                                    name={'checkbox'}
                                    value={loginForm.checkbox}
                                />
                                <p className="text-sm">Remember me</p>
                            </div>
                            <Link to={'/forgotpassword'} className="text-sm">
                                Forgot password?
                            </Link>
                        </div>
                        <button className="bg-green-500 text-white h-11 rounded-md mt-2 hover:bg-green-600 transition ease-in-out delay-100">
                            Log in
                        </button>
                    </form>

                    <div className="flex justify-center text-sm mt-3 md:place-self-start md:ml-12 md:mt-2 md:text-base lg:ml-14 xl:ml-16">
                        <p>
                            Don&apos;t have an account?{' '}
                            <span className="text-green-500 font-HauoraBold cursor-pointer ml-1">
                                <Link to={'/signup'}>Sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Login;
