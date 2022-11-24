import React, { useState } from 'react';
import signupimg from './../../assets/signup/signup-img.png';
import signupdesk from './../../assets/signup/signup-desk-img.png';
import googleicon from './../../assets/signup/googleicon.png';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase';
import { auth } from '../../firebase';

const Signup = () => {
    const [passwordType] = useState('password');
    const [signupForm, setSignUpForm] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    const [googleUserToken, setGoogleUserToken] = useState(false);
    console.log(googleUserToken);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignUpForm((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
    };

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setGoogleUserToken(currentUser.accessToken);
            // console.log(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="mb-12 md:h-screen md:overflow-hidden md:mb-0">
            <div className="flex flex-col justify-center items-center md:flex-row-reverse lg:items-start">
                <div className="w-full">
                    <img src={signupimg} className="w-full md:hidden" />
                    <img src={signupdesk} className="hidden md:flex" />
                </div>
                <div className="w-5/6 mt-8 flex flex-col gap-3 md:px-4 md:gap-2 lg:px-10 lg:mt-16 lg:gap-3 lg:w-3/4 xl:px-20">
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
                        <h2 className="text-sm font-HauoraBold">Sign Up with Google</h2>
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
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label className="font-HauoraBold text-sm">Password</label>
                            <input
                                type={passwordType}
                                placeholder={'Password'}
                                className="border border-gray-400 px-3 h-11 rounded-md text-base focus:outline-green-400 focus:shadow"
                                value={signupForm.password}
                                name={'password'}
                                onChange={handleChange}
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
