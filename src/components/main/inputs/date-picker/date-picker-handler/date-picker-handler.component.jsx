import React from 'react';
import PropTypes from 'prop-types';
import './date-picker-handler.styles.scss';

/**
 * Component used to perform actions connected with date picker such as clear or close action
 *
 * @param {string} text single day label
 * @param {function} clickFunction full date associated with single day
 *
 * @return  {FC} PickerHandler component
 *
 * @component
 * @example
 * const text = 'Clear'
 * const clickFunction = () =>{}
 *
 * return (
 *    <PickerHandler text={text} clickFunction={clickFunction} />
 * )
 *
 */

const PickerHandler = ({ text, clickFunction }) => (
    <div
        onClick={clickFunction}
        role="button"
        tabIndex={0}
        className="date-picker-control "
    >
        {text}
    </div>
);

PickerHandler.propTypes = {
    text: PropTypes.string.isRequired,
    clickFunction: PropTypes.func,
};

PickerHandler.defaultProps = {
    clickFunction: () => {},
};

export default PickerHandler;
