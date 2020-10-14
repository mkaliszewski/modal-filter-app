import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.styles.scss';

/**
 * Component used as checkbox element with label
 *
 * @param {string} element name used as label
 * @param {boolean} isChecked informs whether checkbox should be checked
 *
 * @return  {FC} Checkbox component
 *
 * @component
 * @example
 * const element = 'Option element'
 * const isChecked = false
 *
 * return (
 *    <Checkbox element={element} isChecked={isChecked} />
 * )
 *
 */

const Checkbox = ({ element, isChecked }) => {
    const preventDefault = (event) => {
        event.preventDefault();
    };

    return (
        <div
            className="checkbox"
            onClick={(event) => preventDefault(event)}
            role="button"
            tabIndex={0}
        >
            <label
                htmlFor={element}
                className={`checkbox__label ${
                    isChecked ? 'checkbox__label--checked' : undefined
                }`}
                data-testid="checkbox"
            >
                {element}
                <input
                    type="checkbox"
                    id={element}
                    className="checkbox__input"
                />
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    element: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
};

export default Checkbox;
