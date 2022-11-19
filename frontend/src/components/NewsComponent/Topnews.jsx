import React from 'react';
import '../../Assets/scss/topnews.scss';
import { BsChevronRight } from 'react-icons/bs';
import newimage from '../../Assets/images/Rectangle 4745.png';

const Topnews = () => {
    return (
        <section className="topNews__section">
            <div className="top__news">
                <span className="icon_span">
                    Top stories <BsChevronRight />
                </span>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
                <div className="top__news-second"></div>
            </div>

            <div className="topNews__second">
                <span className="icon_span">
                    Picks for you <BsChevronRight />
                </span>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
                <div className="top__news-first">
                    <aside>
                        <p>
                            Reuters <span>6 minuts ago</span>
                        </p>
                        <h3>5 Value Stocks to Buy Before They Pop Off</h3>
                    </aside>
                    <aside>
                        <img src={newimage} alt="" />
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Topnews;
