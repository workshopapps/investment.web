import React from 'react';
import Navbar from '../../components/Nav/Nav';
import Body from '../../components/Blog/Body';
import Header from '../../components/Blog/Header';
import Footer from '../../components/Footer/Footer';
const Article = () => {
    return (
        <div>
            <Navbar />
            <div className="py-0 lg:px-24 md:px-16 sm:px-8 px-4">
                <Header />
                <Body />
            </div>
            <Footer />
        </div>
    );
};

export default Article;
