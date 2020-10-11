import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './checkbox.styles.scss';

const Checkbox = ({ element, isChecked }) => {
    const elementName = element?.name ? element.name : element;

    const toggleCheckbox = (event) => {
        event.preventDefault();
    };

    return (
        <div className="checkbox" onClick={(event) => toggleCheckbox(event)}>
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

export default Checkbox;
