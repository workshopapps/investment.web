import React from 'react';
import '../../assets/scss/topnews.scss';
import { BsChevronRight } from 'react-icons/bs';
// import newimage from '../../assets/images/Rectangle 4745.png';
import Picks from './Picks';
import { newFeed } from '../reusabledata';
import { Link } from 'react-router-dom';

const Topnews = () => {
    return (
        <section className="topNews__section">
            <div className="top__news">
                <Link to="/topstories">
                    <span className="icon_span">
                        Top stories <BsChevronRight />
                    </span>
                </Link>
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
