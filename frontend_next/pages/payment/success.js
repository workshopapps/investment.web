import Head from "next/head";
import Link from "next/link";
import React from "react";
import Payment from ".";
import PaymentModal from "../../components/Modal/PaymentModal";

const Success = () => {
    return (
        <div>
            <Payment />

            <PaymentModal status={true} />
        </div>
    );
};

export default Success;
