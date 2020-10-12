import React from 'react';
import PropTypes from 'prop-types';
import { EMPLOYEE_PROPTYPES } from '../../helpers.js';
import './checkbox.styles.scss';

const Checkbox = ({ element, isChecked }) => {
    const elementName = typeof element === 'string' ? element : element.name;

    const toggleCheckbox = (event) => {
        event.preventDefault();
    };

    return (
        <div
            className="checkbox"
            onClick={(event) => toggleCheckbox(event)}
            role="button"
            tabIndex={0}
        >
            <label
                htmlFor={elementName}
                className={`checkbox__label ${
                    isChecked ? 'checkbox__label--checked' : undefined
                }`}
            >
                {elementName}
                <input
                    type="checkbox"
                    id={elementName}
                    className="checkbox__input"
                />
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, EMPLOYEE_PROPTYPES])
        .isRequired,
    isChecked: PropTypes.bool.isRequired,
};

export default Checkbox;
