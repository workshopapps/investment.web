import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Headline from '../../components/Blog/Headline';
import Categories from '../../components/Blog/Categories';
import Cards from '../../components/Blog/cards';
import Pagination from '../../components/Blog/pagination';
import Newsletter from '../../components/Blog/Newsletter';
const Blog = () => {
    return (
        <div>
            <Nav />
            <div className="py-0 lg:px-24 md:px-16 sm:px-8 px-4">
                <Headline />
                <Categories />
                <Cards />
                <Pagination />
                <Newsletter />
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
