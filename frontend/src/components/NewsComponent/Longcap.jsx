import React from 'react';
import '../../assets/scss/topnews.scss';
import { BsChevronRight } from 'react-icons/bs';
import { pick } from '../reusabledata';
// import newimage from '../../Assets/images/Rectangle 4745.png';
const Longcap = () => {
    return (
        <div className="topNews__second top-components">
            <span className="icon_span">
                Long cap <BsChevronRight />
            </span>
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

export default Longcap;