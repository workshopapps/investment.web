import React from 'react';
import Form from '../../../components/careers/Form/Form';

export default function Section7() {
    return (
        <div className="block md:grid sm:grid lg:grid grid-cols-2 bg-shade500 p-10  place-content-center">
            <div className="mt-4 sm:mb-2 md:mb-2">
                <p className="text-primary101 py-2 text-5xl">Connect With Us</p>
                <p className="text-primary101 text-2xl py-2 w-3/4">
                    We love to Connect with People who want to make an impact
                </p>
                <p className="text-primaryGray py-6 text-xl">Don&apos;t see a role you fit in?</p>
                <p className="text-primaryGray w-3/4">
                    Get in touch by completing the form and we will contact you if a role you fit in
                    becomes available
                </p>
            </div>
            <div className="bg-white border-inherit p-10 md:mt-4 sm:mt-4">
                <Form />
            </div>
        </div>
    );
}
