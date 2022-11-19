import React from 'react';
import Topnews from '../../components/NewsComponent/Topnews';
import '../../Assets/scss/newspage.scss';
import Localmarket from '../../components/NewsComponent/Localmarket';
import Worldmarket from '../../components/NewsComponent/Worldmarket';
import Longcap from '../../components/NewsComponent/Longcap';
import Midcap from '../../components/NewsComponent/Midcap';
import Smallcap from '../../components/NewsComponent/Smallcap';
import Industry from '../../components/NewsComponent/Industry';

const NewsPage = () => {
    return (
        <div className="news__page-container">
            <h1>Today&apos;s financial news</h1>
            <div className="financialflex">
                <Topnews />
                <div className="main__body">
                    <Localmarket />
                    <Worldmarket />
                    <Longcap />
                    <Midcap />
                    <Smallcap />
                    <Industry />
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
