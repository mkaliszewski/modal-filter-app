/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Checkbox from '../checkbox/checkbox.component';
import TextInput from '../text-input/text-input.component';
// import PropTypes from 'prop-types';
import './multiselect-dropdown.styles.scss';

const MultiselectDropdown = () => (
    <div className="multiselect-dropdown">
        <div className="multiselect-dropdown__element">
            <TextInput placeholder="Szukaj..." isDropdown />
        </div>
        <div className="multiselect-dropdown__element">
            <Checkbox />
        </div>

        <ul className="multiselect-dropdown__list">
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
            <li className="multiselect-dropdown__element">
                <Checkbox />
            </li>
        </ul>
    </div>
);
export default MultiselectDropdown;
