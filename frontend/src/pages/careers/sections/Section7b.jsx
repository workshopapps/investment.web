import React from 'react';
import Form from '../../../components/careers/Form/Form';

export default function Section7b() {
    return (
        <div className="grid grid-cols-2 bg-shade500 p-10 md:grid-cols-1 sm:grid-cols-1 sm:place-content-center md:place-content-center">
            <div className="mt-4 sm:mb-2 md:mb-2">
                <p className="text-primary101 py-2 text-5xl">
                    {' '}
                    <span className="w-3 h-3 p-2 mx-1 bg-primary102"></span> Come Work With Us
                </p>
                <p className="text-primary101 text-2xl py-2 w-3/4">Fit the requirements?</p>
                <p className="text-primaryGray py-6 text-xl">Don&aspo;t see a role you fit in?</p>
                <p className="text-primaryGray w-3/4">
                    Complete the form to apply for the role of a product designer
                </p>
            </div>
            <div className="bg-white border-inherit p-10 md:mt-4 sm:mt-4">
                <Form />
            </div>
        </div>
    );
}
