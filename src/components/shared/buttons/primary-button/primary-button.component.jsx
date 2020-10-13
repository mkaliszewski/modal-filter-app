import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.styles.scss';

/**
 * Component used as primary button
 *
 * @param {string} text text rendered inside button
 * @param {function} buttonFunction function to be called on button click
 * @param {string} customCSSClass custom styling class
 *
 * @return  {FC} PrimaryButton component
 *
 * @component
 * @example
 * const text = 'Filter'
 * const buttonFunction = () =>{}
 * const customCSSClass = 'custom-class'
 *
 * return (
 *    <PrimaryButton text={text} buttonFunction={buttonFunction} customCSSClass={customCSSClass} />
 * )
 *
 */

const PrimaryButton = ({ text, buttonFunction, customCSSClass }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className={`primary-button ${customCSSClass}`}
        >
            {text}
        </button>
    );
};

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
    customCSSClass: PropTypes.string,
};

PrimaryButton.defaultProps = {
    buttonFunction: () => {},
    customCSSClass: '',
};

export default PrimaryButton;
