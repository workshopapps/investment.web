/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unreachable */
import React from 'react';
import Button from '../../utilis/Button';
import Saturn from './../../assets/error/saturn.png';

const ErrorPage = () => {
    const errorbtns = [
        {
            text: 'Go Home',
            url: '/',
            color: '#E5F1FF',
            background: '#1BD47B',
            border: '2px solid #1BD47B'
        },
        {
            text: 'Contact Us',
            url: 'contact',
            color: '#1BD47B',
            background: 'white',
            border: '2px solid #1BD47B'
        }
    ]
    return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <div className='mb-24'>
                <img src={Saturn} alt="" />
            </div>
            <h1 className='text-4xl mb-8'>Whoops!!</h1>
            <p className='text-2xl mb-14'>You seem to have stumbled on a wrong page</p>
            <div className="error-btns flex justify gap-4">
                {
                    errorbtns.map((btn, index) => {
                        const {text, url, color, background, border} = btn;
                        return (
                            <Button key={index} text={text} url={url} color={color} background={background} border={border} />
                        )
                    })
                }
            </div>
        </div>
    </div>
    );
};

export default ErrorPage;
