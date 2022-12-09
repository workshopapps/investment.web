import React from 'react';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import PageLayout from '../layout';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <PageLayout>
            <section className="  min-h-fit justify-around p-5 flex md:p-12 flex-col-reverse md:flex-row bg-[#F4F5F6] text-[#525A65]">
                <div className="basis-[30%] font-Hauora p-6 ">
                    <aside className="mb-4 hidden md:block">
                        <h1 className=" text-5xl">Contact us</h1>
                        <p className="">Got any concerns you want us to sort out for you?</p>
                    </aside>
                    <aside className="mb-4">
                        <h2 className="font-bold text-xl">For general Enquiries</h2>
                        <p>support@yieldvest.com</p>
                    </aside>
                    <aside className="mb-4">
                        <h2 className="font-bold text-xl">Mailing Address</h2>
                        <p className="text-[#545964]">
                            Plot 1b, industrial avenue, Apapa. Lagos +2348100123456
                            enquiries@yieldvest.com
                        </p>
                    </aside>
                    <aside className="mb-4">
                        <h2 className="font-bold text-xl">
                            For Media, Business development and partnerships:
                        </h2>
                        <p className="text-[#545964]">business@yieldvest.com</p>
                    </aside>
                    <aside className="mb-4">
                        <h2 className="font-bold text-xl">Follow us on all our social pages</h2>

                        <aside className="flex mt-6 gap-2">
                            <BsFacebook className="text-3xl" />
                            <AiFillInstagram className="mx-4 text-3xl" />
                            <BsTwitter className="text-3xl" />
                        </aside>
                    </aside>
                </div>
                <div className="basis-[50%] ">
                    <ContactForm />
                </div>
                <aside className="mb-4 block md:hidden">
                    <h1 className=" text-5xl">Contact us</h1>
                    <p className="text-[#545964]">
                        Got any concerns you want us to sort out for you?
                    </p>
                </aside>
            </section>
        </PageLayout>
    );
};

export default Contact;
