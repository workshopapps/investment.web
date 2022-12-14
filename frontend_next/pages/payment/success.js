import Head from "next/head";
import Link from "next/link";
import React from "react";
import Payment from ".";
import Layout from "../../components/Layout";
import PaymentModal from "../../components/Modal/PaymentModal";

const Success = () => {
  return (
    <Layout>
      <PaymentModal status={true} />
    </Layout>
  );
};

export default Success;
