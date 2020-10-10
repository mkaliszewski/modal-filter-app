import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';

import './text-input.styles.scss';

const TextInput = ({ placeholder, isDropdown }) => (
    <div className={isDropdown ? 'text-input--container' : undefined}>
        {isDropdown && (
            <Icon
                iconName={ICONS_NAMES.SEARCH}
                customCSSClass={ICONS_NAMES.SEARCH}
            />
        )}
        <input
            type="text"
            placeholder={placeholder}
            className={isDropdown ? 'text-input--dropdown' : 'text-input'}
        />
    </div>
);

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    isDropdown: PropTypes.bool,
};

TextInput.defaultProps = {
    isDropdown: false,
};

export default TextInput;
