import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressBook,
    faChartBar,
    faPhoneSquareAlt,
    faEnvelope,
    faInfoCircle,
    faSearch,
    faSortDown,
    faCalendarAlt,
    faChevronCircleRight,
    faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { ICONS_NAMES } from '../../../mock-data/mock.data';
import './icon.styles.scss';

/**
 * Component used as selectable icon
 *
 * @param {string} iconName icon name used to select icon displayed in component
 * @param {boolean} customCSSClass custom styling class
 *
 * @return  {FC} Icon component
 *
 * @component
 * @example
 * const iconName = 'book'
 * const customCSSClass = 'custom-class'
 *
 * return (
 *    <Icon iconName={iconName} customCSSClass={customCSSClass} />
 * )
 *
 */

const Icon = ({ iconName, customCSSClass }) => {
    const {
        BOOK,
        CHART,
        PHONE,
        ENVELOPE,
        INFO,
        SEARCH,
        SORT,
        CALENDAR,
        NEXT,
        PREVIOUS,
    } = ICONS_NAMES;

    const getIcon = (icon) => {
        switch (icon) {
            case BOOK:
                return faAddressBook;
            case CHART:
                return faChartBar;
            case PHONE:
                return faPhoneSquareAlt;
            case ENVELOPE:
                return faEnvelope;
            case INFO:
                return faInfoCircle;
            case SEARCH:
                return faSearch;
            case SORT:
                return faSortDown;
            case CALENDAR:
                return faCalendarAlt;
            case NEXT:
                return faChevronCircleRight;
            case PREVIOUS:
                return faChevronCircleLeft;
            default:
                return faInfoCircle;
        }
    };

    return (
        <FontAwesomeIcon
            icon={getIcon(iconName)}
            className={customCSSClass ? `icon--${customCSSClass}` : 'icon'}
            role="presentation"
        />
    );
};

Icon.propTypes = {
    iconName: PropTypes.string,
    customCSSClass: PropTypes.string,
};

Icon.defaultProps = {
    iconName: '',
    customCSSClass: '',
};

export default Icon;
