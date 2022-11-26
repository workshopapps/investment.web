import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="h-[100vh] bg-slate-500">
            <h1>Thank you for Subscribing </h1>
            <button>
                <Link to="/">Return Back To Home</Link>
            </button>
        </div>
    );
};

export default Success;
