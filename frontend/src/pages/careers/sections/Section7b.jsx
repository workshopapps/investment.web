import React from 'react';
import Form from '../../../components/careers/Form/Form';

export default function Section7b() {
    return (
        <div
            className="block md:grid sm:grid lg:grid grid-cols-2 bg-shade500 p-10  place-content-center"
            data-testid="section7b">
            <div className="flex flex-col content-center justify-start">
                <div className="mt-8 sm:mb-2 md:mb-2">
                    <p className="text-primary101 py-2 text-3xl">
                        {' '}
                        <span className="w-3 h-2 p-2 mx-2 bg-primary102"></span> Come Work With Us
                    </p>
                    <p className="text-primary101 text-2xl py-2 w-3/4">Fit the requirements?</p>
                    <p className="text-primaryGray py-6 text-xl">
                        Don&apos;t see a role you fit in?
                    </p>
                    <p className="text-primaryGray w-3/4">
                        Complete the form to apply for the role of a product designer
                    </p>
                </div>
            </div>

            <div className="bg-white border-inherit p-10 md:mt-4 sm:mt-4 mt-4 ">
                <Form />
            </div>
        </div>
    );
}
