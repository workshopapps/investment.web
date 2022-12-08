import Link from "next/link";
import React from "react";
import saturn from "../assets/error/moon 1.svg";
import Layout from "../components/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <span className="align-center justify-center font-HauoraBold text-center text-8xl">
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <img src={saturn.src} alt="error-pic" className="w-2/3 md:w-1/2" />
            <div className="flex flex-col gap-4 mt-12 w-full px-5">
              <h1 className="mt-3 text-4xl">Oops!</h1>
              <p className="text-base font-normal font-HauoraLight tracking-wide mb-3 md:text-lg">
                Something went wrong. The page you are looking for might have
                been removed or temporarily unavailable.
              </p>
              <div className="flex flex-col w-full gap-4 md:flex-row md:justify-center">
                <button className="bg-green-500 text-base h-12 rounded-md flex items-center justify-center font-HauoraBold md:w-56">
                  <Link href={"/"}>Go back</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
    </Layout>
  );
};

export default ErrorPage;
