import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import {
    render,
    fireEvent,
    screen,
    cleanup,
    within,
} from '@testing-library/react';
import ModalMultiselect from './modal-multiselect.component';

const title = 'Some title';
const options = ['option1', 'option2', 'option3'];
const handleModalRuleChange = jest.fn();
const isAnyModalOpen = false;
const updateFilterValues = jest.fn();
const filterKey = 'jobs';
const areFiltersEmpty = false;
const filtredRecords = [
    {
        id: 1,
        name: 'Adam Adamski',
        date: new Date(2020, 0, 1),
        job: 'cook',
        agreement: 'pernament',
        locations: ['loc1'],
    },
    {
        id: 2,
        name: 'Bernadeta Bednarska',
        date: new Date(2020, 1, 2),
        job: 'waiter',
        agreement: 'temporary',
        locations: ['loc2', 'loc3'],
    },
];

const defaultProps = {
    title,
    options,
    handleModalRuleChange,
    isAnyModalOpen,
    updateFilterValues,
    filterKey,
    areFiltersEmpty,
    filtredRecords,
};

const dropdownTitle = 'Wybierz';

const renderModalMultiselect = (props = defaultProps) => {
    const utils = render(<ModalMultiselect {...props} />);

    return { ...utils };
};

const renderModalMultiselectAfterDropdownOpen = (props = defaultProps) => {
    render(<ModalMultiselect {...props} />);

    const dropdownTitleElement = screen.getByText(dropdownTitle);
    fireEvent.click(dropdownTitleElement);
};

describe('ModalMultiselect', () => {
    const placeholderText = 'Szukaj...';

    it('renders without crashing', () => {
        const { unmount } = renderModalMultiselect();

        unmount();
    });

    it('displays title element', () => {
        const { getByText } = renderModalMultiselect();
        const titleElement = getByText(title);

        expect(titleElement).toBeInTheDocument();
    });

    it('displays dropdown icon', () => {
        const { getByRole } = renderModalMultiselect();
        const iconRole = 'presentation';
        const icon = getByRole(iconRole, { hidden: true });

        expect(icon).toBeInTheDocument();
    });

    it('calls handleModalRuleChange after click on dropdown title element', () => {
        const { getByText } = renderModalMultiselect();
        const dropdownTitleElement = getByText(dropdownTitle);

        fireEvent.click(dropdownTitleElement);

        expect(handleModalRuleChange).toBeCalledTimes(1);
    });

    it(`displays dropdown after click on it's title element`, () => {
        const { getByText, getByPlaceholderText } = renderModalMultiselect();
        const dropdownTitleElement = getByText(dropdownTitle);

        fireEvent.click(dropdownTitleElement);

        const dropdown = getByPlaceholderText(placeholderText);

        expect(dropdown).toBeInTheDocument();
    });

    describe('after dropdown opens', () => {
        describe('', () => {
            beforeEach(() => {
                renderModalMultiselectAfterDropdownOpen();
            });

            afterEach(() => {
                cleanup();
            });

            const [optionOne, optionTwo, optionThree] = options;

            it('calls updateFilterValues after click on dropdown option', () => {
                const selectedOption = screen.getByText(optionOne);

                fireEvent.click(selectedOption);

                expect(updateFilterValues).toHaveBeenCalled();
            });

            describe('it shows', () => {
                it('selected option in multiselect value place for one element', () => {
                    const selectedOption = screen.getByText(optionOne);
                    const multiselectValueBox = screen.getByTestId(
                        'multiselect-value'
                    );

                    fireEvent.click(selectedOption);

                    const { getByText } = within(multiselectValueBox);
                    const multiselectValue = getByText(optionOne);

                    expect(multiselectValue).toBeInTheDocument();
                });

                it('formated selected options in multiselect value place for two elements', () => {
                    const selectedOptionOne = screen.getByText(optionOne);
                    const selectedOptionTwo = screen.getByText(optionTwo);
                    const multiselectValueBox = screen.getByTestId(
                        'multiselect-value'
                    );

                    fireEvent.click(selectedOptionOne);
                    fireEvent.click(selectedOptionTwo);

                    const { getByText } = within(multiselectValueBox);
                    const expectedString = `${optionOne}, ${optionTwo}`;
                    const multiselectValue = getByText(expectedString);

                    expect(multiselectValue).toBeInTheDocument();
                });

                it('formated selected options in multiselect value place for more than two elements', () => {
                    const selectedOptionOne = screen.getByText(optionOne);
                    const selectedOptionTwo = screen.getByText(optionTwo);
                    const selectedOptionThree = screen.getByText(optionThree);
                    const multiselectValueBox = screen.getByTestId(
                        'multiselect-value'
                    );

                    fireEvent.click(selectedOptionOne);
                    fireEvent.click(selectedOptionTwo);
                    fireEvent.click(selectedOptionThree);

                    const { getByText } = within(multiselectValueBox);
                    const expectedString = `${optionOne}, ${optionTwo} +${
                        options.length - 2
                    }`;
                    const multiselectValue = getByText(expectedString);

                    expect(multiselectValue).toBeInTheDocument();
                });
            });
        });

        describe('for employee dropdown', () => {
            const customProps = {
                ...defaultProps,
                filterKey: 'employees',
                areFiltersEmpty: false,
            };

            it('shows choosen employee', () => {
                renderModalMultiselectAfterDropdownOpen(customProps);
                const employeeName = filtredRecords[0].name;
                const selectedOption = screen.getByText(employeeName);
                const multiselectValueBox = screen.getByTestId(
                    'multiselect-value'
                );

                fireEvent.click(selectedOption);

                const { getByText } = within(multiselectValueBox);
                const multiselectValue = getByText(employeeName);

                expect(multiselectValue).toBeInTheDocument();
            });
        });
    });
});
