import React from 'react';
import PropTypes from 'prop-types';
import './backdrop.styles.scss';

const Backdrop = ({ closeFunction }) => (
    <div className="backdrop" onClick={closeFunction} />
);

Backdrop.propTypes = {
    closeFunction: PropTypes.func.isRequired,
};

export default Backdrop;
