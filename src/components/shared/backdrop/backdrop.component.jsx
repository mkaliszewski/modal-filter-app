import React from 'react';
import PropTypes from 'prop-types';
import './backdrop.styles.scss';

/**
 * Component used to display screen backdrop
 *
 * @param {function} closeFunction function called on backdrop click used to close backdrop
 * @param {string} children children which will be displayed inside backdrop
 *
 * @return  {FC} Backdrop component
 *
 * @component
 * @example
 * const closeFunction = () => {}
 * const children = 'Loading'
 *
 * return (
 *    <Backdrop closeFunction={closeFunction}>
 *      children
 *    </Backdrop>
 * )
 *
 */

const Backdrop = ({ closeFunction, children }) => (
    <div className="backdrop" onClick={closeFunction} data-testid="backdrop">
        {children}
    </div>
);

Backdrop.propTypes = {
    closeFunction: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};

Backdrop.defaultProps = {
    closeFunction: () => {},
    children: '',
};

export default Backdrop;
