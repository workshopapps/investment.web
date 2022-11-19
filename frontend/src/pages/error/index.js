/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unreachable */
import React from 'react';
import { Link } from 'react-router-dom';
import saturn from './../../components/assets/error/saturn.png'


const ErrorPage = () => {
    // return <span>Errorpage</span>;
    return (
        <div className='h-screen flex'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <img 
                    src={saturn}
                    alt='error-img'
                    className='w-72 lg:w-510'
                />
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='mt-16 font-bold text-3xl lg:text-4xl'>Whoops!!</h1>
                    <p >You seem to have stumbled on a wrong page</p>
                    <div className='flex gap-3 mt-4 w-full'>
                        <Link className='w-full sm:w-44 flex justify-center items-center bg-primarygreen h-10 text-white rounded-sm lg:w-272' to={'/'}>
                            Go Home
                        </Link>
                    
                    
                        <Link className='w-full flex justify-center items-center sm:w-44 bg-white text-primarygreen h-10 border border-primarygreen rounded-sm lg:w-272' to={'/contact'}>
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorPage;
