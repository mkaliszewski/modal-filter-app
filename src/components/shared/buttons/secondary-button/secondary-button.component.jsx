import React from 'react';
import PropTypes from 'prop-types';
import './secondary-button.styles.scss';

/**
 * Component used as secondary button
 *
 * @param {string} text text rendered inside button
 * @param {function} buttonFunction function to be called on button click
 * @param {boolean} isDisabled defines whether button is disabled or not
 *
 * @return  {FC} SecondaryButton component
 *
 * @component
 * @example
 * const text = 'Filter'
 * const buttonFunction = () => {}
 * const isDisabled = false
 *
 * return (
 *    <SecondaryButton text={text} buttonFunction={buttonFunction} isDisabled={isDisabled} />
 * )
 *
 */

const SecondaryButton = ({ text, buttonFunction, isDisabled }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className="secondary-button"
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
    isDisabled: PropTypes.bool,
};

SecondaryButton.defaultProps = {
    buttonFunction: () => {},
    isDisabled: false,
};

SecondaryButton.defaultProps = {};

export default SecondaryButton;
