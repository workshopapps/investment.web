import React, { useState } from 'react';
import Button from '../Buttons/Button';

export default function Form() {
    const [selectedFile, setSelectedFile] = useState();
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const fileHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setValues({ fullName: '', email: '', message: '' });
    };
    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Full Name
                </label>
                <br />
                <input
                    type="text"
                    name="fullName"
                    required
                    value={values.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm"
                />
            </div>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Email Address
                </label>
                <br />
                <input
                    type="text"
                    required
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email address"
                    className="bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm"
                />
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
                    value={values.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about yourself"
                    className=" bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm"
                />
            </div>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Attach your CV
                </label>
                <br />
                <div className="flex content-center gap-x-2">
                    <input
                        type="file"
                        required
                        name="file"
                        onChange={fileHandler}
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
