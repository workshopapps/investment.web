import React from 'react';
import '../../assets/scss/topnews.css';
import '../../index.css';

import { newFeed } from '../../components/reusabledata';
import PageLayout from '../layout';
const Picked = () => {
    return (
        <PageLayout>
            <section className="usable__container md:mx-[100px] p-[2em]">
                <div>
                    <span className="top__span">Picks For you</span>

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

export default Picked;
