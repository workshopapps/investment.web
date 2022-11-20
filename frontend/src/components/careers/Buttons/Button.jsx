import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
    return (
        <div>
            <button className="my-4 pointer text-white text-center bg-primary102 py-3 px-4 rounded-lg text-sm">
                {props.title}
            </button>
        </div>
    );
}

Button.propTypes = {
    title: propTypes.string.isRequired
};

export default Button;
