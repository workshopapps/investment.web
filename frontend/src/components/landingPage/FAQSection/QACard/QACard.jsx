/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

import UpIcon from '../../../../assets/landingPage/icons/up.svg';
import DownIcon from '../../../../assets/landingPage/icons/down.svg';

const QACard = ({ question, answer }) => {
    const [show, setShow] = React.useState(false);

    return (
        <React.Fragment>
            <div role="qa-card" className="flex flex-row justify-between my-4 shadow-md">
                <span
                    role="question"
                    className="text-[#000718] cursor-pointer text-md md:text-2xl tracking-[0.25px] align-middle m-4 font-bold font-Hauora"
                    onClick={() => setShow(!show)}>
                    {question}
                </span>
                {show ? (
                    <span
                        className="text-[#000718] md:text-2xl md:pt-4 pt-2 tracking-[0.25px] align-middle m-4 font-bold font-Hauora"
                        onClick={() => setShow(!show)}>
                        <img src={UpIcon} alt="open" />
                    </span>
                ) : (
                    <span
                        className="text-[#000718] md:text-2xl md:pt-4 pt-2 tracking-[0.25px] align-middle m-4 font-bold font-Hauora"
                        onClick={() => setShow(!show)}>
                        <img src={DownIcon} alt="open" />
                    </span>
                )}
            </div>

            {show ? (
                <div className="flex flex-row justify-between my-4 shadow-md">
                    <span
                        data-testid="qa-answer"
                        className="text-[#000718] text-sm md:text-xl max-w-[80%] tracking-[0.25px] align-middle m-4 font-light font-Hauora">
                        {answer}
                    </span>
                </div>
            ) : null}
        </React.Fragment>
    );
};

QACard.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
};

export default QACard;
