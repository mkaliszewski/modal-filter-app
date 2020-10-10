import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressBook,
    faChartBar,
    faPhoneSquareAlt,
    faEnvelope,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_ICONS_NAMES } from '../../navigation/navigation-icons.data';
import './icon.styles.scss';

const Icon = ({ iconName }) => {
    const { BOOK, CHART, PHONE, ENVELOPE } = NAVIGATION_ICONS_NAMES;

    const getIcon = (iconType) => {
        switch (iconType) {
            case BOOK:
                return faAddressBook;
            case CHART:
                return faChartBar;
            case PHONE:
                return faPhoneSquareAlt;
            case ENVELOPE:
                return faEnvelope;
            default:
                return faInfoCircle;
        }
    };

    return <FontAwesomeIcon icon={getIcon(iconName)} className="icon" />;
};

Icon.propTypes = {
    iconName: PropTypes.string,
};

Icon.defaultProps = {
    iconName: '',
};

export default Icon;
