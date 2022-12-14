/* eslint-disable @next/next/no-img-element */
import React from "react";
import cookie from "../assets/download/cookies.svg";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";

const Cookies = () => {
  const notify = () => {
    toast.success("🦄 cookies accepted!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const close = () => {
    toast.error("🦄 cookies declined!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Layout>
      <Head>
        <title>Yieldvest - Cookies</title>
      </Head>

      <h2 className="flex items-center justify-center py-8 md:hidden bg-[#D9D9D9]">
        {" "}
        <img src={cookie.src} alt="" />{" "}
        <span className="font-bold text-black text-[32px] font-['Hauora'] ">
          Cookies Policy
        </span>
      </h2>
      <div className="bg-[#D9D9D9] min-h-[100vh] flex items-center justify-center md:p-10 p-4">
        <div className="md:w-[70%] w-[98%] md:p-[3rem] p-3 m-[auto] min-h-[50vh] bg-white rounded-[16px]">
          <h2 className="md:flex items-center justify-center mb-8 hidden">
            {" "}
            <img src={cookie.src} alt="" />{" "}
            <span className="font-bold text-black text-[32px] font-['Hauora'] ">
              Cookies Policy
            </span>
          </h2>
          <p>
            {" "}
            We may use cookies, web beacons, tracking pixels, and other tracking
            technologies when you visit our website Yieldvest.hng.tech including
            any other media form, media channel, mobile website, or mobile
            application related or connected to Yieldvest to help customize the
            Site and improve your experience.
          </p>
          <p className="my-[1.4rem]">
            We reserve the right to make changes to this Cookie Policy at any
            time and for any reason. We will alert you about any changes by
            updating the January 2022 Cookie Policy. Any changes or
            modifications will be effective immediately upon posting the updated
            Cookie Policy on the Site, and you waive the right to receive
            specific notice of each such change or modification.
          </p>
          <p>
            You are encouraged to periodically review this Cookie Policy to stay
            informed of updates. You will be deemed to have been made aware of,
            will be subject to, and will be deemed to have accepted the changes
            in any revised Cookie Policy by your continued use of the Site after
            the date such revised Cookie Policy is posted.
          </p>
          {/* <div className="flex md:justify-start justify-between   w-[100%] mt-10">
            <button
              onClick={close}
              className="h-[50px] min-w-[100px] hover:scale-90 transition duration-500 rounded-md border-2 border-[#1BD47B] p-2 block m-2"
            >
              Decline Cookies
            </button>
            <button
              onClick={notify}
              className="h-[50px] min-w-[100px] hover:scale-90 transition duration-500 rounded-md bg-[#1BD47B] block p-2 m-2"
            >
              Accept Cookies
            </button>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
