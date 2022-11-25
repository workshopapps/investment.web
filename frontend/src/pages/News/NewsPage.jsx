import React from 'react';
import Topnews from '../../components/NewsComponent/Topnews';
import '../../assets/scss/newspage.css';
import Localmarket from '../../components/NewsComponent/Localmarket';
import Worldmarket from '../../components/NewsComponent/Worldmarket';
import Longcap from '../../components/NewsComponent/Longcap';
import Midcap from '../../components/NewsComponent/Midcap';
import Smallcap from '../../components/NewsComponent/Smallcap';
import Industry from '../../components/NewsComponent/Industry';
import PageLayout from '../layout';

const NewsPage = () => {
    return (
        <PageLayout>
            <div className="news__page-container">
                <h1>Today&apos;s financial news</h1>
                <div className="financialflex">
                    <Topnews />
                    <div className="main__body-container">
                        <h1>For You</h1>
                        <p>Recommended based on your interests</p>
                        <div className="main__body">
                            <Localmarket />
                            <Worldmarket />
                            <Longcap />
                            <Midcap />
                            <Smallcap />
                            <Industry />
                        </div>
                        <button className="main__body-btn">show more news</button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default NewsPage;
