import React from 'react';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import PageLayout from '../layout';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <PageLayout>
            <section className="block  min-h-fit justify-around p-5 md:flex md:12">
                <div className="basis-[40%] ">
                    <aside className="mb-4">
                        <h1 className="font-bold">Contact us</h1>
                        <p>Got any concerns you want us to sort out for you?</p>
                    </aside>
                    <aside className="mb-4">
                        <h2>For general Enquiries</h2>
                        <p>support@yieldvest.com</p>
                    </aside>
                    <aside className="mb-4">
                        <h2 className="font-bold">Mailing Address</h2>
                        <p>
                            Plot 1b, industrial avenue, Apapa. Lagos +2348100123456
                            enquiries@yieldvest.com
                        </p>
                    </aside>
                    <aside className="mb-4">
                        <h2 className="font-bold">
                            For Media, Business development and partnerships:
                        </h2>
                        <p>business@yieldvest.com</p>
                    </aside>
                    <aside className="mb-4">
                        <h2 className="font-bold">Follow us on all our social pages</h2>
                        <p>business@yieldvest.com</p>
                    </aside>
                    <aside className="flex">
                        <BsFacebook />
                        <AiFillInstagram className="mx-4" />
                        <BsTwitter />
                    </aside>
                </div>
                <div className="basis-[50%] ">
                    <ContactForm />
                </div>
            </section>
        </PageLayout>
    );
};

export default Contact;
