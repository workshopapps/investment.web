/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { faqDatas } from "../../utils/Payment/FaqContent";
import "../../assets/paymentpage/css/style.module.css";
import Shield from "../../assets/paymentpage/icons/shield-tick.png";
import Stripe from '../../assets/paymentpage/icons/stripe.svg';
import { FaPlus, FaStripe, FaMinus, FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import authHooks from "../../components/auth/AuthHooks";
import AuthContext from "../../components/auth/AuthContext";

let stripeTestPromise;

const getStripe = () => {
  if (!stripeTestPromise) {
    stripeTestPromise = loadStripe(
      "pk_test_51M6wW6CCH5YrTF3cFB5mOHycZK5b2HJL5mNzGMxSU1himwu50ZDq8dIFNCLVT3Rl8Br79wAQcSgRnCTB0hjrtakd00Yv8dAami"
    );
  }

  return stripeTestPromise;
};

const Payment = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [stripeError, setStripeError] = useState(null);
  const [clicked, setClicked] = useState(false);

  const { user, accessToken } = useContext(AuthContext);
  const [customerId, setCustomerId] = useState("")
  const router = useRouter();
  const data = router.query;
  console.trace(data)
  const { priceId, subName, type, price, content } = data
  const apiService = authHooks.useApiService();

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
        const data = res.data;
        setCustomerId(data['customerId']);
        return
      })
      .catch((err) => console.log(err));
  });

  const item = {
    price: priceId,
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    clientReferenceId: customerId,
    successUrl: `${router.basePath}/payment/success`,
    cancelUrl: `${router.basePath}/payment/cancel`,
    customerEmail: user.email
  };


  const redirectToCheckout = async () => {
    setIsLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);

    if (error) {
      setStripeError(error.message);
    }
    //then set it back to false after the checkout
    setIsLoading(true);
  };

  if (stripeError) {
    alert(stripeError);
  }

  useEffect(() => {
    fetchCustomerId()
  }, [fetchCustomerId]);

  return (
    <Layout>
      <Head>
        <title>Yieldvest - Payment</title>
        <meta name="description" content="Complete payment" />
      </Head>

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

        <div className=" w-full lg:w-1/2 flex flex-col justify-center theRightSide items-center md:w-1 sm:w-1 mt-16">
          <div className="w-[95%] relative p-10 mt-0 md:mt-10 border-[#1BD47B] border-solid border rounded-[2em] flex justify-around items-center">
            <div className="ml-10">
              <input
                type="radio"
                style={{ accentColor: 'green' }}
                defaultChecked={true}
                className="h-5 w-5 absolute top-[24px] left-[30px]"
              />
            </div>

            <div className="mt-[-1.5em] ml-[-15em] md:ml-[-15em] lg:ml-[-30em] w-2/3 flex-col flex-wrap">
              <h3 className="text-[#0A0B0D] text-xl font-Hauora font-bold">
                {subName}
              </h3>
              <p className="text-[#525A65] text-base pt-2 pr-5">
                {content}
              </p>
            </div>

            <div className="ml-3 absolute left-[15em] md:left-[20em] lg:left-[30em] top-[20px] text-lg">
              <span>$ {price} </span>
              <span className="text-[0.7em]">/{type}</span>
            </div>
          </div>

          <div className="w-[95%] rounded-md flex mt-8 ">
            <form className="flex w-full">
              <div className="flex items-center justify-center w-full">

                <div className="mt-2 w-full flex items-center justify-center">
                  <button
                    className="w-full mx-10 flex justify-center shadow bg-[#1BD47B] py-4 px-4 rounded-lg font-bold mb-5"
                    type="button" disabled={isLoading} onClick={redirectToCheckout}>
                    <span>{isLoading ? "Loading..." : "Pay using Stripe"}</span>
                    <FaArrowRight className="w-5 mt-2 h-3  ml-1" />
                  </button>
                </div>
              </div>
            </form>
          </div>


          <div className="flex w-full justify-center items-center mb-10">
            <p className="text-[0.7em]">Secured by </p>
            <img className="w-20 h-10 ml-1" alt="stripe-logo" src={Stripe.src} />
            <img className="w-6 h-6" alt="stripe-logo" src={Shield.src} />
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Payment;
