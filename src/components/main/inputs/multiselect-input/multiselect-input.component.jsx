/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// import PropTypes from 'prop-types';
import './multiselect-input.styles.scss';

const MultiselectInput = () => (
    <ul className="multiselect">
        <li>
            <input type="checkbox" id="offset" value="Offset" name="Offset" />
            Offset
        </li>
    </ul>
);
export default MultiselectInput;
