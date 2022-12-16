import Head from "next/head";
import Link from "next/link";
import React from "react";
import Payment from ".";
import Layout from "../../components/Layout";
import PaymentModal from "../../components/Modal/PaymentModal";

const Cancel = () => {
  return (
    <Layout>
      <PaymentModal status={false} />
    </Layout>
  );
};

export default Cancel;
