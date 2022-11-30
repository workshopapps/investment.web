import React from 'react';

const ContactForm = () => {
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
            <form action="" style={FormStyle} className="rounded-lg">
                <h2 className="text-left text-white">Send us a message</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-[100%] m-3 p-1 rounded-md outline-none  bg-transparent border-[1px] "
                />
                <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="w-[100%] m-3 p-1 rounded-md outline-none bg-transparent border-[1px]  "
                />
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="w-[100%] m-3 p-1 rounded-md outline-none bg-transparent border-[1px] "></textarea>
                <button className="w-[100%] m-3 p-1 rounded-md outline-none bg-[green] text-white">
                    send message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
