import React from 'react';
import PropTypes from 'prop-types';
import './backdrop.styles.scss';

const Backdrop = ({ closeFunction, children }) => (
    <div className="backdrop" onClick={closeFunction}>
        {children}
    </div>
);

Backdrop.propTypes = {
    closeFunction: PropTypes.func,
    children: PropTypes.string,
};

Backdrop.defaultProps = {
    closeFunction: () => {},
    children: '',
};

export default Backdrop;
