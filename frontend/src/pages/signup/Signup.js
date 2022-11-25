import React, { useState } from 'react';
import signupimg from './../../assets/signup/signup-img.png';
import signupdesk from './../../assets/signup/signup-desk-img.png';
import googleicon from './../../assets/signup/googleicon.png';
import eyeIcon from './../../assets/signup/eye-icon.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [signupForm, setSignUpForm] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    // const [googleUserToken, setGoogleUserToken] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setisSubmit] = useState(false);

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
        console.log('Submitted');
        setFormErrors(validate(signupForm));
    };

    //handle google OAUTH
    const handleGoogleSignIn = async () => {};

    //toggle password
    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    };

    // useEffect(() => {
    //     if (Object.keys(formErrors).length === 0 && isSubmit === true) {
    //         setSignUpForm((prevState) => {
    //             return {
    //                 ...prevState,
    //                 fullname: '',
    //                 email: '',
    //                 password: ''
    //             };
    //         });
    //     }
    // }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^@]+@[^@]+\.[^@]{2,}$/i;

        if (!signupForm.fullname) {
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
        <div className="mb-12 md:h-screen md:overflow-hidden md:mb-0">
            <div className="flex flex-col justify-center items-center md:flex-row-reverse lg:items-start">
                <div className="w-full">
                    <img src={signupimg} className="w-full md:hidden" />
                    <img src={signupdesk} className="hidden md:flex" />
                </div>
                <div className="w-5/6 mt-8 flex flex-col gap-3 md:px-4 md:gap-2 lg:px-16 lg:mt-8 lg:gap-3 lg:w-full xl:px-20">
                    <h1 className="font-HauoraBold text-xl text-center tracking-wide">
                        Create Account
                    </h1>
                    <p className="text-sm text-center mb-3 sm:text-base">
                        Welcome to MyStockPlug professional stock brokerage
                    </p>
                    <button
                        className="bg-green-100 flex items-center w-full py-3 gap-2 justify-center rounded-sm"
                        onClick={handleGoogleSignIn}>
                        <img src={googleicon} width={'20px'} />
                        <h2 className="text-sm font-HauoraBold">Sign up with Google</h2>
                    </button>

                    <div className="flex flex-row gap-3 items-center">
                        <div className="w-full h-0.5 bg-gray-400 rounded-sm"></div>
                        <p className="text-sm font-HauoraBold">or</p>
                        <div className="w-full h-0.5 bg-gray-400 rounded-sm"></div>
                    </div>
                    <form
                        className="flex flex-col gap-3 w-full md:justify-center md:place-self-center"
                        onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-0.5">
                            <label className="font-HauoraBold text-sm">Name</label>
                            <input
                                type={'text'}
                                placeholder={'Full Name'}
                                className="border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                                value={signupForm.fullname}
                                name={'fullname'}
                                onChange={handleChange}
                            />
                            {formErrors && (
                                <p className="text-red-500 text-sm ">{formErrors?.fullname}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label className="font-HauoraBold text-sm">Email</label>
                            <input
                                type={'email'}
                                placeholder={'Email Address'}
                                className="border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
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
                                className="border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                                value={signupForm.password}
                                name={'password'}
                                onChange={handleChange}
                            />
                            <div
                                className={
                                    !formErrors
                                        ? 'absolute right-5 bottom-8 cursor-pointer'
                                        : 'absolute right-5 bottom-3 cursor-pointer'
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
