import React from 'react';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import PageLayout from '../layout';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <PageLayout>
            <section className="flex">
                <div>
                    <aside>
                        <h1>Contact us</h1>
                        <p>Got any concerns you want us to sort out for you?</p>
                    </aside>
                    <aside>
                        <h2>For general Enquiries</h2>
                        <p>support@yieldvest.com</p>
                    </aside>
                    <aside>
                        <h2>Mailing Address</h2>
                        <p>
                            Plot 1b, industrial avenue, Apapa. Lagos +2348100123456
                            enquiries@yieldvest.com
                        </p>
                    </aside>
                    <aside>
                        <h2>For Media, Business development and partnerships:</h2>
                        <p>business@yieldvest.com</p>
                    </aside>
                    <aside>
                        <h2>Follow us on all our social pages</h2>
                        <p>business@yieldvest.com</p>
                    </aside>
                    <aside>
                        <BsFacebook />
                        <AiFillInstagram />
                        <BsTwitter />
                    </aside>
                </div>
                <div>
                    <ContactForm />
                </div>
            </section>
        </PageLayout>
    );
};

export default Contact;
