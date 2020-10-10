import React from 'react';
import PropTypes from 'prop-types';
import './text-input.styles.scss';

const TextInput = ({ placeholder }) => (
    <input type="text" placeholder={placeholder} className="text-input" />
);

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default TextInput;
