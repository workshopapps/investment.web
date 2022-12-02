import React, { useState, useEffect } from 'react';
import eyeIcon from './../../assets/signup/eye-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import PageLayout from '../layout';

const Signup = () => {
    const baseUrl = 'https://api.yieldvest.hng.tech/auth/signup';
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState('password');
    const [signupForm, setSignUpForm] = useState({
        email: '',
        name: '',
        password: ''
    });
    const [googleUserToken, setGoogleUserToken] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    //tracking form changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignUpForm((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setisSubmit(true);
        setFormErrors(validate(signupForm));
    };

    //post to the backend
    const post = () => {
        axios
            .post(baseUrl, {
                email: signupForm.email,
                name: signupForm.name,
                password: signupForm.password
            })
            .then(function (response) {
                if (response.status === 200) {
                    toast.success('Signed up successful');
                    setInterval(() => {
                        navigate('/login');
                    }, 1000);
                } else {
                    toast.error('Signup failed');
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    //handle google OAUTH
    const handleGoogleSignIn = async (tokenResponse) => {
        setGoogleUserToken(tokenResponse);
        console.log(googleUserToken);

        axios
            .get(`/auth?token=${tokenResponse.credential}`)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Login successful');
                    setInterval(() => {
                        navigate('/');
                    }, 1500);
                } else {
                    toast.error('Authentication failed');
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error('Authentication failed');
            });
    };

    const handleGoogleSignInError = (err) => {
        console.log(err);
    };

    //toggle password
    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    };

    //getting the manual inputs
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit === true) {
            setSignUpForm((prevState) => {
                return {
                    ...prevState,
                    name: '',
                    email: '',
                    password: ''
                };
            });
            post();
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^@]+@[^@]+\.[^@]{2,}$/i;

        if (!signupForm.name) {
            errors.fullname = 'Required';
        }

        if (!signupForm.email) {
            errors.email = 'Required';
        }

        if (!signupForm.password) {
            errors.password = 'Required';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format';
        }
        return errors;
    };

    return (
        <PageLayout>
            <div className="mb-12 md:overflow-hidden md:mb-0 md:bg-desk-signup md:flex md:flex-col md:justify-center md:items-center md:gap-4 md:pb-12">
                <ToastContainer />
                <h1 className="hidden md:flex text-center text-white text-xl tracking-wide md:mt-10">
                    Buy stocks and grow your business
                </h1>
                <div className="flex flex-col justify-center items-center md:flex-row-reverse md:items-start md:bg-white md:w-520 md:rounded-md md:pb-10">
                    <div className="w-5/6 mt-8 flex flex-col gap-3 md:px-4 md:gap-2 lg:px-8 lg:gap-3 lg:w-full xl:px-20">
                        <h1 className="font-HauoraBold text-xl text-center tracking-wide">
                            Create Account
                        </h1>
                        <p className="text-sm text-center mb-3 sm:text-base">
                            Welcome to Yieldvest professional stock brokerage
                        </p>

                        {/* <div className="flex flex-row gap-3 items-center">
                            <div className="w-full h-0.5 bg-gray-400 rounded-sm"></div>
                            <p className="text-sm font-HauoraBold">or</p>
                            <div className="w-full h-0.5 bg-gray-400 rounded-sm"></div>
                        </div> */}
                        <form
                            className="flex flex-col gap-3 w-full md:justify-center md:place-self-center"
                            onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-0.5">
                                <label className="font-HauoraBold text-sm">Name</label>
                                <input
                                    type={'text'}
                                    placeholder={'Full Name'}
                                    className={
                                        formErrors?.fullname
                                            ? 'border border-red-500 px-3 h-11 rounded-md text-base focus:outline-red-400 focus:shadow'
                                            : 'border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow'
                                    }
                                    value={signupForm.name}
                                    name={'name'}
                                    onChange={handleChange}
                                />
                                {formErrors && (
                                    <p className="text-red-500 text-sm ">{formErrors?.name}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <label className="font-HauoraBold text-sm">Email</label>
                                <input
                                    type={'email'}
                                    placeholder={'Email Address'}
                                    className={
                                        formErrors?.email
                                            ? 'border border-red-500 px-3 h-11 rounded-md text-base focus:outline-red-400 focus:shadow'
                                            : 'border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow'
                                    }
                                    value={signupForm.email}
                                    name={'email'}
                                    onChange={handleChange}
                                />
                                {formErrors && (
                                    <p className="text-red-500 text-sm ">{formErrors?.email}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-0.5 relative">
                                <label className="font-HauoraBold text-sm">Password</label>
                                <input
                                    type={passwordType}
                                    placeholder={'Password'}
                                    className={
                                        formErrors?.password
                                            ? 'border border-red-500 px-3 h-11 rounded-md text-base focus:outline-red-400 focus:shadow'
                                            : 'border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow'
                                    }
                                    value={signupForm.password}
                                    name={'password'}
                                    onChange={handleChange}
                                />
                                <div
                                    className={
                                        formErrors?.email === null
                                            ? 'absolute right-5 bottom-8 cursor-pointer'
                                            : 'absolute right-5 bottom-4 cursor-pointer'
                                    }
                                    onClick={togglePassword}>
                                    {' '}
                                    <img src={eyeIcon} />
                                </div>
                                {formErrors && (
                                    <p className="text-red-500 text-sm ">{formErrors?.password}</p>
                                )}
                            </div>
                            <button className="capitalize bg-green-500 text-white h-11 rounded-md mt-2 hover:bg-green-600 transition ease-in-out delay-100">
                                create account
                            </button>
                        </form>

                        <div className="flex w-full justify-center text-gray-500">
                            <p>Or create an account with</p>
                        </div>

                        <div className="flex justify-center">
                            <GoogleLogin
                                onSuccess={handleGoogleSignIn}
                                onError={handleGoogleSignInError}
                            />
                        </div>

                        <div className="flex justify-center text-sm md:place-self-start md:text-base md:place-self-center">
                            <p className="text-gray-500">
                                Already have an account?{' '}
                                <span className="text-green-500 font-HauoraBold cursor-pointer ml-1">
                                    <Link to={'/login'}>Log in</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Signup;
