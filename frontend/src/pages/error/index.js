/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unreachable */
import React from 'react';
import { Link } from 'react-router-dom';
import saturn from './../../components/assets/error/saturn.png'
import './../../pages/error/error.css';


const ErrorPage = () => {
    // return <span>Errorpage</span>;
    return (
        <div className='h-screen flex'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <img 
                    src={saturn}
                    alt='error-img'
                    className='w-72 lg:w-1/3'
                />
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='mt-16 font-bold text-3xl'>Whoops!!</h1>
                    <p>You seem to have stumbled on a wrong page</p>
                    <div className='flex gap-3 mt-4'>
                        <button className='w-44 bg-primarygreen h-10 text-white lg:w-72'>
                            <Link to={'/'}>
                                Go Home
                            </Link>
                        </button>
                        <button className='w-44 bg-white text-primarygreen h-10 border border-primarygreen lg:w-72'>
                            <Link to={'/contact'}>
                                Contact us
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorPage;
