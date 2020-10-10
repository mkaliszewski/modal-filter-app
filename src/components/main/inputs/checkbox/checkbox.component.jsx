import React, { useState } from 'react';
import './checkbox.styles.scss';

const Checkbox = ({ id }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = (event) => {
        event.preventDefault();
        setIsChecked(!isChecked);
    };

    return (
        <div className="checkbox" onClick={(event) => toggleCheckbox(event)}>
            <label
                htmlFor="cb4"
                className={`checkbox__label ${
                    isChecked ? 'checkbox__label--checked' : undefined
                }`}
            >
                Checkbox 4
                <input type="checkbox" id="cb4" className="checkbox__input" />
            </label>
        </div>
    );
};

export default Checkbox;
