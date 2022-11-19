import React from 'react';
import Topnews from '../../components/NewsComponent/Topnews';
import '../../Assets/scss/newspage.scss';

const NewsPage = () => {
    return (
        <div className="news__page-container">
            <h1>Today&apos;s financial news</h1>
            <div className="financialflex">
                <Topnews />
            </div>
        </div>
    );
};

export default NewsPage;
