import React from 'react';
import '../../assets/scss/topnews.css';
import '../../index.css';

import { newFeed } from '../../components/reusabledata';
const Picked = () => {
    return (
        <section className="usable__container">
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
    );
};

export default Picked;
