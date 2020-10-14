import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import MultiselectDropdown from './multiselect-dropdown.component';

const selectOptions = ['option1', 'option2', 'option3'];
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

const selectedOptions = [];
const setSelectedOptions = jest.fn();
const isEmployeesMultiselect = false;
const areFiltersEmpty = true;

const defaultProps = {
    selectOptions,
    filtredRecords,
    selectedOptions,
    setSelectedOptions,
    isEmployeesMultiselect,
    areFiltersEmpty,
};

const renderMultiselectDropdown = (props = defaultProps) => {
    const utils = render(<MultiselectDropdown {...props} />);

    return { ...utils };
};

describe('MultiselectDropdown', () => {
    const placeholderText = 'Szukaj...';

    it('renders without crashing', () => {
        const { unmount } = renderMultiselectDropdown();

        unmount();
    });

    it('has text input', () => {
        const { getByPlaceholderText } = renderMultiselectDropdown();
        const textInput = getByPlaceholderText(placeholderText);

        expect(textInput).toBeInTheDocument();
    });

    it('has checkbox to select all options', () => {
        const { getByLabelText } = renderMultiselectDropdown();
        const allOptionstext = 'Wszystkie';
        const allOptionsCheckbox = getByLabelText(allOptionstext);

        expect(allOptionsCheckbox).toBeInTheDocument();
    });

    it('shows information when any option is provided', () => {
        const customProps = { ...defaultProps, selectOptions: [] };
        const { getByText } = renderMultiselectDropdown(customProps);
        const messageText = 'Brak elementów';
        const message = getByText(messageText);

        expect(message).toBeInTheDocument();
    });

    it('shows selected options based on text in text input', () => {
        const {
            getByPlaceholderText,
            queryByText,
        } = renderMultiselectDropdown();
        const textInput = getByPlaceholderText(placeholderText);
        const selectedIndex = 0;

        fireEvent.change(textInput, {
            target: { value: selectOptions[selectedIndex] },
        });

        selectOptions.forEach((opt, index) => {
            const filtredOption = queryByText(opt);

            if (index === selectedIndex) {
                expect(filtredOption).toBeInTheDocument();
            } else {
                expect(filtredOption).not.toBeInTheDocument();
            }
        });
    });

    describe('shows avaliable: ', () => {
        selectOptions.forEach((option) => {
            it(option, () => {
                const { getByText } = renderMultiselectDropdown();
                const avaliableOption = getByText(option);

                expect(avaliableOption).toBeInTheDocument();
            });
        });
    });

    describe('calls setSelectedOptions function passed in props', () => {
        const [option, ...rest] = selectOptions;

        it('on dropdown element click', () => {
            const { getByText } = renderMultiselectDropdown();

            const selectOption = getByText(option);

            fireEvent.click(selectOption);

            expect(setSelectedOptions).toHaveBeenCalledTimes(1);
        });

        it(`with updated array when element is not in selectedOptions`, () => {
            const { getByText } = renderMultiselectDropdown();

            const expectedArg = [option];
            const selectOption = getByText(option);

            fireEvent.click(selectOption);

            expect(setSelectedOptions).toHaveBeenCalledWith(expectedArg);
        });

        it(`when clicked element is in selectedOptions`, () => {
            const customProps = {
                ...defaultProps,
                selectedOptions: selectOptions,
            };
            const { getByText } = renderMultiselectDropdown(customProps);

            const selectOption = getByText(option);

            fireEvent.click(selectOption);

            expect(setSelectedOptions).toHaveBeenCalled();
        });

        it('with all avaliable elements on all options checkbox click when selectedOptions array is empty', () => {
            const { getByLabelText } = renderMultiselectDropdown();
            const allOptionstext = 'Wszystkie';
            const allOptionsCheckbox = getByLabelText(allOptionstext);

            fireEvent.click(allOptionsCheckbox);

            expect(setSelectedOptions).toHaveBeenCalledWith(selectOptions);
        });

        it('with all empty array on all options checkbox click when selectedOptions array is equal to filtred options', () => {
            const customProps = {
                ...defaultProps,
                selectedOptions: selectOptions,
            };
            const { getByLabelText } = renderMultiselectDropdown(customProps);
            const allOptionstext = 'Wszystkie';
            const allOptionsCheckbox = getByLabelText(allOptionstext);
            const expectedArg = [];

            fireEvent.click(allOptionsCheckbox);

            expect(setSelectedOptions).toHaveBeenCalledWith(expectedArg);
        });
    });

    describe('for employee multiselect', () => {
        const employeeCaseProps = {
            ...defaultProps,
            isEmployeesMultiselect: true,
            areFiltersEmpty: false,
        };

        describe('shows avaliable: ', () => {
            filtredRecords.forEach(({ name }, index) => {
                it(`option ${index + 1}`, () => {
                    const { getByText } = renderMultiselectDropdown(
                        employeeCaseProps
                    );
                    const avaliableOption = getByText(name);

                    expect(avaliableOption).toBeInTheDocument();
                });
            });
        });

        it('clears avaliable options when filters are empty', () => {
            const cutomEployeeCaseProps = {
                ...employeeCaseProps,
                areFiltersEmpty: true,
            };

            const { queryByText } = renderMultiselectDropdown(
                cutomEployeeCaseProps
            );
            const [recordOne, recordTwo] = filtredRecords;

            const optionOne = queryByText(recordOne.name);
            const optionTwo = queryByText(recordTwo.name);

            expect(optionOne).not.toBeInTheDocument();
            expect(optionTwo).not.toBeInTheDocument();
        });
    });
});
