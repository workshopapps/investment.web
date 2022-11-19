import React from 'react';
import '../../assets/scss/topnews.scss';
import '../../index.css';
// import newimage from '../../assets/images/Rectangle 4745.png';
// import Picks from '../../components/NewsComponent/Picks';
import { newFeed } from '../../components/reusabledata';
import PageLayout from '../layout';
const Local = () => {
    return (
        <PageLayout>
            <section className="usable__container">
                <div>
                    <span className="top__span">Local Market</span>

                    {newFeed.map((data) => {
                        return (
                            <div key={data.id} className="flex__item">
                                <aside>
                                    <img src={data.image} alt="" />
                                </aside>
                                <aside>
                                    <p>
                                        Reuters <span>{data.time}</span>
                                    </p>
                                    <h3>{data.text}</h3>
                                </aside>
                            </div>
                        );
                    })}

                    <button className="main__body-btn">show more news</button>
                </div>
            </section>
        </PageLayout>
    );
};

export default Local;
