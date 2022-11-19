import React from 'react';
import '../../Assets/scss/topnews.scss';
import { BsChevronRight } from 'react-icons/bs';
// import newimage from '../../Assets/images/Rectangle 4745.png';
import Picks from './Picks';
import { newFeed } from '../reusabledata';

const Topnews = () => {
    return (
        <section className="topNews__section">
            <div className="top__news">
                <span className="icon_span">
                    Top stories <BsChevronRight />
                </span>
                {newFeed.map((data) => {
                    return (
                        <div className="top__news-first" key={data.id}>
                            <aside>
                                <p>
                                    Reuters <span>{data.time}</span>
                                </p>
                                <h3>{data.text}</h3>
                            </aside>
                            <aside className="image__heith">
                                <img src={data.image} alt="" />
                            </aside>
                        </div>
                    );
                })}

                <div className="top__news-second"></div>
            </div>

            <Picks />
        </section>
    );
};

export default Topnews;
