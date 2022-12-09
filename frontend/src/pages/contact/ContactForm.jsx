import React from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
const ContactForm = () => {
    const url = 'https://api.yieldvest.hng.tech/user/contact_us';
    // url = 'https://jsonplaceholder.typicode.com/users';
    //const [reset, setReset] = React.useState('');
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = React.useState(false);
    function handleChange(event) {
        setFormData((initialData) => {
            return {
                ...initialData,
                [event.target.name]: event.target.value
            };
        });
    }
    function submit(e) {
        e.preventDefault();
        setIsLoading(true);
        axios
            .post(
                url,
                {
                    name: formData.name,
                    email: formData.email,
                    msg: formData.message
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
            .then((response) => {
                setIsLoading(false);
                if (response.status === 200) {
                    toast.success('Sent successfully');
                } else {
                    toast.error('Failed to send');
                }
                console.log(response);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    }

    const FormStyle = {
        background: '#000718',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '2rem'
    };
    return (
        <div>
            <ToastContainer />
            <form onSubmit={submit} action="" style={FormStyle} className="rounded-lg md:my-0 my-6">
                <h2 className="text-left text-white">Send us a message</h2>
                <input
                    name="name"
                    // id="name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Name"
                    className="w-[100%] m-3 p-2 rounded-md outline-none  bg-transparent border-[#333946] border-[1px]"
                    style={{ color: 'white' }}
                    required
                />
                <input
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-[100%] m-3 p-2 rounded-md outline-none bg-transparent border-[#333946]  border-[1px]"
                    style={{ color: 'white' }}
                    required
                />
                <textarea
                    value={formData.message}
                    type="text"
                    onChange={handleChange}
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="w-[100%] m-3 p-2 rounded-md outline-none bg-transparent border-[1px] border-[#333946] "
                    style={{ color: 'white' }}
                    required></textarea>
                <button
                    type="submit"
                    className="w-[100%] m-3 p-2 rounded-md outline-none bg-[#1bd47b] text-white">
                    {isLoading ? (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ThreeDots
                                height="30"
                                width="50"
                                radius="9"
                                color="#fff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                    ) : (
                        'Send message'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
