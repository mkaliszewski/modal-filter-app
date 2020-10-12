import React from 'react';
import PropTypes from 'prop-types';
import './date-picker-handler.styles.scss';

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
