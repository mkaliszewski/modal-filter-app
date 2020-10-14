import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';
import './text-input.styles.scss';

/**
 * Component used as text input
 *
 * @param {string} placeholder placeholder used in text input
 * @param {boolean} isDropdown informs if text input is used in dropdown
 * @param {function} handeNameSearchChange function used to handle input text change
 * @param {function} handleKeyPress function used to handle enter key press on input focus
 *
 * @return  {FC} TextInput component
 *
 * @component
 * @example
 * const placeholder = 'Please type something...'
 * const isDropdown = false
 * const handeNameSearchChange = () => {}
 * const handleKeyPress = () => {}
 *
 * return (
 *    <TextInput placeholder={placeholder} isDropdown={isDropdown} handeNameSearchChange={handeNameSearchChange} handleKeyPress={handleKeyPress}/>
 * )
 *
 */

const TextInput = ({
    placeholder,
    isDropdown,
    handeNameSearchChange,
    handleKeyPress,
}) => (
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
            onChange={handeNameSearchChange}
            onKeyPress={handleKeyPress}
        />
    </div>
);

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    isDropdown: PropTypes.bool,
    handeNameSearchChange: PropTypes.func,
    handleKeyPress: PropTypes.func,
};

TextInput.defaultProps = {
    isDropdown: false,
    handeNameSearchChange: () => {},
    handleKeyPress: () => {},
};

export default TextInput;
