import React from 'react';
import Button from '../Buttons/Button';
import useForm from './useForm';
import validate from './LoginRules';

export default function Form() {
    const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

    function login() {
        console.log('No errors, submit callback called!');
    }
    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Full Name
                </label>
                <br />
                <input
                    type="text"
                    value={values.fullName || ''}
                    name="fullName"
                    required
                    placeholder="Enter your full name"
                    className="{`' '${errors.fullName && 'border-red-200'}`}bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm"
                    onChange={handleChange}
                />
                {errors.fullName && <p className="text-red text-xs">{errors.fullName}</p>}
            </div>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Email Address
                </label>
                <br />
                <input
                    type="text"
                    required
                    name="email"
                    value={values.email || ''}
                    placeholder="Enter your email address"
                    className="{`' '${errors.email && 'border-red-200'}`}bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm"
                    onChange={handleChange}
                />
                {errors.email && <p className="text-red text-xs">{errors.email}</p>}
            </div>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Tell us about yourself(100 words or less)
                </label>
                <br />
                <textarea
                    type="text"
                    rows="10"
                    name="message"
                    required
                    placeholder="Tell us about yourself"
                    className="{`' '${errors.fullName && 'border-red-200'}` bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm"
                    value={values.message || ''}
                    onChange={handleChange}
                />
                {errors.message && <p className="text-red text-xs">{errors.message}</p>}
            </div>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Attach your CV
                </label>
                <br />
                <div className="flex content-center gap-x-2">
                    <input
                        type="text"
                        required
                        className="bg-white border-solid border-2 h-12 border-shade100 px-2 w-5/6 rounded-sm mt-3 "
                    />
                    <Button title="Upload" />
                </div>
                <span className="text-xs text-shade100 p-0 m-0">
                    Max. 10MB limit. pdf, docx, jpeg
                </span>
            </div>
            <button className="my-4 pointer text-white text-center bg-primary102 font-bold py-4 px-4 rounded-lg text-base">
                Submit Application
            </button>
        </form>
    );
}
