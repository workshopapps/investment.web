import React from 'react';
import propTypes from 'prop-types';

function Box(props) {
    return (
        <div className="flex justify-center content-center mt-2" data-testid="box-component">
            <div className="bg-shade500 border-shadeBlue py-3 px-2 border-2 rounded-sm border-solid  m-2 w-48 hover:shadow-sm cursor-pointer ">
                <p className="text-primaryGray text-xs font-bold py-2">{props.position}</p>
                <ul className="flex content-center text-primaryGray text-xs gap-6 list-disc px-4">
                    <li>{props.employment}</li>
                    <li>{props.commute}</li>
                </ul>
            </div>
        </div>
    );
}

Box.propTypes = {
    employment: propTypes.string.isRequired,
    commute: propTypes.string.isRequired,
    position: propTypes.string.isRequired
};

export default Box;
