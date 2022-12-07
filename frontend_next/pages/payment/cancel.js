import Head from "next/head";
import Link from "next/link";
import React from "react";

const Cancel = () => {
  return (
    <div>
      <Head>
        <title>Yieldvest - Payment Cancelled</title>
      </Head>

      <h2>Transaction is Cancelled</h2>
      <div className="h-[100vh] bg-slate-500">
        <h1>Thank you for Subscribing </h1>
        <button>
          <Link href="/subscription">Return back to subscription Page</Link>
        </button>
      </div>
    </div>
  );
};

export default Cancel;
