import React from 'react';
// import PageLayout from '../layout';
import saturn from './../../assets/error/saturn.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <span className="align-center justify-center font-HauoraBold text-center text-8xl">
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full">
                    <img src={saturn} alt="error-pic" className="w-2/3 md:w-1/2" />
                    <div className="flex flex-col gap-4 mt-12 w-full px-5">
                        <h1 className="mt-3 text-4xl">Whoops!</h1>
                        <p className="text-base font-normal font-HauoraLight tracking-wide mb-3 md:text-lg">
                            You seem to have stumbled on a wrong page
                        </p>
                        <div className="flex flex-col w-full gap-4 md:flex-row md:justify-center">
                            <button className="bg-green-500 text-base h-12 rounded-md text-white font-HauoraLight md:w-56">
                                <Link to={'/'}>Go home</Link>
                            </button>
                            <button className="bg-text text-base h-12 rounded-md text-green-500 font-HauoraLight border border-1 border-green-500 md:w-56">
                                <Link to={'/'}>Contact us</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
};

export default ErrorPage;
