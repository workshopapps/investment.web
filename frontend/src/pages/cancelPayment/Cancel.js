import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
    return (
        <div>
            <h2>Transaction is Cancelled</h2>
            <div className="h-[100vh] bg-slate-500">
                <h1>Thank you for Subscribing </h1>
                <button>
                    <Link to="/subscription">Return back to subscription Page</Link>
                </button>
            </div>
        </div>
    );
};

export default Cancel;
