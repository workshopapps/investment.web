import React from 'react';
import Button from '../Buttons/Button';

import useForm from './useForm';
import validate from './LoginRules';

export default function Form() {
    // const [selectedFile, setSelectedFile] = useState();
    const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

    // const fileHandler = (e) => {
    //     setSelectedFile(e.target.files[0]);
    // };
    function login() {
        return 'Callback Called!';
    }

    return (
        <form
            className="flex flex-col gap-y-4"
            onSubmit={handleSubmit}
            data-testid="form-component">
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Full Name
                </label>
                <br />
                <input
                    type="text"
                    name="fullName"
                    required
                    value={values.fullName || ''}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm ${
                        errors.fullName && 'border-red-500'
                    }`}
                    data-testid="input-fullName"
                />
                {errors.fullName && <p className="text-sm pt-2 text-red-500">{errors.fullName}</p>}
            </div>
            <div>
                <label className="font-bold text-base leading-7 text-primaryGray p-2">
                    Email Address
                </label>
                <br />
                <input
                    type="text"
                    required
                    value={values.email || ''}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email address"
                    className={`bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm ${
                        errors.email && 'border-red-500'
                    }`}
                    data-testid="input-email"
                />
                {errors.email && <p className="text-sm pt-2 text-red-500">{errors.email}</p>}
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
                    value={values.message || ''}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about yourself"
                    className={`bg-white border-solid border-2 border-shade100 py-3 px-2 w-full rounded-sm ${
                        errors.message && 'border-red-500'
                    }`}
                    data-testid="input-message"
                />
                {errors.message && <p className="text-sm pt-2 text-red-500">{errors.message}</p>}
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
                        // onChange={fileHandler}
                        className="bg-white border-solid border-2 h-12 border-shade100 px-2 w-5/6 rounded-sm mt-3 placeholder:py-2"
                    />
                    <Button title="Upload" />
                </div>
                <span className="text-sm text-shade100">Max. 10MB limit. pdf, docx, jpeg</span>
            </div>
            <button className="my-4 pointer text-white text-center bg-primary102 hover:bg-[#61eaa8] font-bold py-4 px-4 rounded-lg text-base">
                Submit Application
            </button>
        </form>
    );
}
