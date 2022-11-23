import React from 'react';
import Button from '../../../components/careers/Buttons/Button';

export default function OpenPositions() {
    return (
        <div className="mt-7 mb-4 mx-6" data-testid="open-positions">
            <p className="text-primary102 px-2 text-2xl">
                {' '}
                <span className="w-3 h-3 p-2 mx-2 bg-primary102"></span> All Open Postions
            </p>

            <form className="flex justify-center content-center gap-4 mt-3">
                <input
                    type="text"
                    placeholder="Search positions,category"
                    className="bg-white border-solid border border-shade100  w-5/6 h-10 rounded-sm px-2 outline-none mt-5"
                />
                <Button title="Search" />
            </form>
        </div>
    );
}
