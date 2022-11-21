import React from 'react';

import Headline from '../../components/Blog/Headline';
import Categories from '../../components/Blog/Categories';
import Cards from '../../components/Blog/cards';
import Pagination from '../../components/Blog/pagination';
import Newsletter from '../../components/Blog/Newsletter';
import PageLayout from '../layout';
const Blog = () => {
    return (
        <div>
            <PageLayout>
                <div className="py-0 lg:px-24 md:px-16 sm:px-8 px-4">
                    <Headline />
                    <Categories />
                    <Cards />
                    <Pagination />
                    <Newsletter />
                </div>
            </PageLayout>
        </div>
    );
};

export default Blog;
