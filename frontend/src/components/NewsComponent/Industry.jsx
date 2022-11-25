import React from 'react';
import '../../assets/scss/topnews.css';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { pick } from '../reusabledata';

const Industry = () => {
    return (
        <div className="topNews__second top-components">
            <Link to="/industry">
                <span className="icon_span">
                    Industry <BsChevronRight />
                </span>
            </Link>
            {pick.map((data) => {
                return (
                    <div className="top__news-first" key={data.id}>
                        <aside>
                            <p>
                                Reuters <span>{data.time}</span>
                            </p>
                            <h3>{data.text}</h3>
                        </aside>
                        <aside>
                            <img src={data.image} alt="" />
                        </aside>
                    </div>
                );
            })}
        </div>
    );
};

export default Industry;
