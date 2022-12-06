/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { faqDatas } from './FaqContent';
import '../../assets/paymentpage/css/style.css';
import Shield from '../../assets/paymentpage/icons/shield-tick.png';
import Stripe from '../../assets/paymentpage/icons/stripe.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { loadStripe } from "@stripe/stripe-js";
import PageLayout from '../layout';
import AuthContext from '../../auth/AuthContext';
import AuthHooks from '../../auth/AuthHooks';

let stripeTestPromise

const getStripe = () => {
    if (!stripeTestPromise) {
        // stripeTestPromise = loadStripe("pk_test_51M6wW6CCH5YrTF3cFB5mOHycZK5b2HJL5mNzGMxSU1himwu50ZDq8dIFNCLVT3Rl8Br79wAQcSgRnCTB0hjrtakd00Yv8dAami");
        stripeTestPromise = loadStripe("pk_test_51M7m02E0pPf6mXoClZhuSDMtjB8OC3HktSYrMk07cxpwGSLWV5C115FfTifsMrA11U3TRKaXU3EdRGa9p8qEO9Co00wmCA5Uct");
    }

    return stripeTestPromise;
};




const Payment = () => {
    const { isLoggedIn, user, accessToken } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false)
    const [stripeError, setStripeError] = useState(null)
    const apiService = AuthHooks.useApiService();

    const navigate = useNavigate();

    const [customerId, setCustomerId] = useState("")

    let location = useLocation();

    const [clicked, setClicked] = useState(false);

    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    const fetchCustomerId = useCallback(async () => {
        await apiService(accessToken)
            .post(`/create-customer-object`)
            .then((res) => {
                const data = res.data
                setCustomerId(data['Customer_id']);
                return
            })
            .catch((err) => console.log(err));
    }, []);


    const item = {
        price: location.state.priceId,
        quantity: 1
    }


    const checkoutOptions = {
        lineItems: [item],
        // customer: customerId,
        clientReferenceId: customerId,
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
        customerEmail: user.email
    }
    const redirectToCheckout = async () => {

        setIsLoading(true)
        const stripe = await getStripe()
        console.log('customerId', customerId)
        const { error } = await stripe.redirectToCheckout(checkoutOptions)

        console.log("stripe checkout error", error)

        if (error) {
            setStripeError(error.message)
        }

        //then set it back to false after the checkout
        setIsLoading(false)
    }

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate('/login');
        }
        fetchCustomerId()
    }, [fetchCustomerId]);


    if (stripeError) {
        alert(stripeError)
    }
    return (
        <PageLayout isProtected={true}>
            <section className="h-auto flex flex-col md:flex-row bg-white mx-0 md:mx-[5em]">
                {/* left side start from here */}
                <div className="w-full md:w-full lg:w-1/2 mt-10 font-Hauora ">
                    <p className="text-[#1BD47B] text-md md:text-lg pl-6 py-2">Payment</p>
                    <h1 className="text-3xl lg:text-5xl mb-2 completePayment pl-6 py-2">
                        Complete Payment
                    </h1>

                    <ul className="hidden md:block m-[1em] pl-6 pr-6">
                        {faqDatas?.map((faqs, index) => {
                            return (
                                <li
                                    key={faqs.id}
                                    className="my-2"
                                    onClick={() => toggle(index)}>
                                    <h2 className="flex flex-row justify-between items-center p-3 cursor-pointer">
                                        <span className="text-xl md:text-lg">{faqs.title}</span>
                                        <span>{clicked === index ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                                    </h2>
                                    {clicked === index ? (
                                        <div className=" overflow-hidden">
                                            <p className="p-3 text-xl md:text-lg text-gray-900">
                                                {faqs.content}
                                            </p>
                                        </div>
                                    ) : null}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* left side ends here */}

                {/* right side start from here */}
                <div className=" w-full lg:w-1/2 flex flex-col justify-center items-center md:w-1 sm:w-1 mt-16">
                    <div className="w-[95%] relative p-10 mt-0 md:mt-10 border-[#1BD47B] border-solid border rounded-lg flex justify-around items-center">
                        <div className="ml-4">
                            <input
                                type="radio"
                                style={{ accentColor: 'green' }}
                                defaultChecked={true}
                                className="h-5 w-5 absolute top-[24px] left-[24px]"
                            />
                        </div>

                        <div className="mt-[-1.5em] ml-[-15em] md:ml-[-15em] lg:ml-[-25em] w-2/3 flex-col flex-wrap">
                            <h3 className="text-[#0A0B0D] text-xl">
                                {location.state.state.typeOfSubscription}
                            </h3>
                            <p className="text-[#525A65] text-base pt-2 pr-5">
                                {location.state.state.content}
                            </p>
                        </div>

                        <div className="ml-3 absolute left-[15em] md:left-[20em] lg:left-[30em] top-[20px] text-lg">
                            <span>&#8358; {location.state.state.amount} </span>
                            <span className="text-[0.7em]">/{location.state.state.subTime}</span>
                        </div>
                    </div>

                    {/* form starts from here */}

                    {/* <PaymentForm/>  */}
                    {/* 
                    <Elements stripe={getStripe()}>
                    </Elements> */}
                    <div className="mt-8 w-full flex items-center justify-center">
                        <button
                            className="w-full mx-10 flex justify-center shadow bg-[#1BD47B] py-2 px-4 rounded mb-5"
                            type="button" disabled={isLoading} onClick={redirectToCheckout}>
                            <span>{isLoading ? "Loading..." : "Pay using Stripe"}</span>
                            <FaArrowRight className="w-5 mt-2 h-3  ml-1" />
                        </button>
                    </div>

                    {/* form ends  here */}

                    {/* submit button started from here */}
                    {/* button was here before */}

                    {/* submit button ends here */}

                    <div className="flex w-full justify-center items-center mb-10">
                        <p className="text-[0.7em]">Secured by </p>
                        <img className="w-20 h-10 ml-1" alt="stripe-logo" src={Stripe} />
                        <img className="w-6 h-6" alt="stripe-logo" src={Shield} />
                    </div>
                </div>
            </section>

        </PageLayout>

    );
};

export default Payment;
