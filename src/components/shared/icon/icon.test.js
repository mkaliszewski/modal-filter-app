import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from './icon.component';

const iconName = 'book';
const customCSSClass = 'custom';

const defaultProps = {
    iconName,
    customCSSClass,
};

const renderIcon = (props = defaultProps) => {
    const utils = render(<Icon {...props} />);

    return { ...utils };
};

describe('Icon', () => {
    const iconRole = 'presentation';

    it('renders without crashing', () => {
        const { unmount } = renderIcon();

        unmount();
    });

    it('has received custom css class', () => {
        const { getByRole } = renderIcon();
        const icon = getByRole(iconRole, { hidden: true });
        const expectedCustomClass = `icon--${customCSSClass}`;

        expect(icon).toHaveClass(expectedCustomClass);
    });

    describe('renders icon based on icon name: ', () => {
        const testData = [
            {
                testIconName: 'book',
                iconClass: 'fa-address-book',
            },
            {
                testIconName: 'chart',
                iconClass: 'fa-chart-bar',
            },
            {
                testIconName: 'phone',
                iconClass: 'fa-phone-square-alt',
            },
            {
                testIconName: 'envelope',
                iconClass: 'fa-envelope',
            },
            {
                testIconName: 'info',
                iconClass: 'fa-info-circle',
            },
            {
                testIconName: 'search',
                iconClass: 'fa-search',
            },
            {
                testIconName: 'sort',
                iconClass: 'fa-sort-down',
            },
            {
                testIconName: 'calendar',
                iconClass: 'fa-calendar-alt',
            },
            {
                testIconName: 'next',
                iconClass: 'fa-chevron-circle-right',
            },
            {
                testIconName: 'previous',
                iconClass: 'fa-chevron-circle-left',
            },
            {
                testIconName: 'some not known name - default case',
                iconClass: 'fa-info-circle',
            },
        ];

        testData.forEach(({ testIconName, iconClass }) => {
            it(testIconName, () => {
                const customProps = { ...defaultProps, iconName: testIconName };
                const { getByRole } = renderIcon(customProps);
                const icon = getByRole(iconRole, { hidden: true });

                expect(icon).toHaveClass(iconClass);
            });
        });
    });
});
