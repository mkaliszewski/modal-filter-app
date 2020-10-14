import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Main from './main.component';
import { EMPLOYEES } from '../../mock-data/mock.data';

describe('Main', () => {
    const getCountText = (num) => {
        return `Suma rekordów wynosi: ${num}`;
    };

    const searchButtonText = 'SZUKAJ';
    const placeholderText = 'Wyszukaj po imieniu i nazwisku...';
    const tableHeadText = 'Lokalizacje';
    it('renders without crashing', () => {
        const { unmount } = render(<Main />);

        unmount();
    });

    it('renders primary text input', () => {
        const { getByPlaceholderText } = render(<Main />);
        const textInput = getByPlaceholderText(placeholderText);

        expect(textInput).toBeInTheDocument();
    });

    it('renders search button', () => {
        const { getByText } = render(<Main />);

        const searchButton = getByText(searchButtonText);

        expect(searchButton).toBeInTheDocument();
    });

    it('renders filter button', () => {
        const { getByText } = render(<Main />);
        const filterButtonText = 'FILTRUJ';
        const filterButton = getByText(filterButtonText);

        expect(filterButton).toBeInTheDocument();
    });

    it('displays modal after click on filter button', () => {
        const { getByText, queryByText } = render(<Main />);
        const filterButtonText = 'FILTRUJ';
        const filterButton = getByText(filterButtonText);
        const modalHeadingText = 'Wybierz pracowników';
        let modal = queryByText(modalHeadingText);

        expect(modal).not.toBeInTheDocument();

        fireEvent.click(filterButton);

        modal = queryByText(modalHeadingText);
        expect(modal).toBeInTheDocument();
    });

    describe('after click on display button', () => {
        const retryButtonText = 'PONÓW';

        it('displays loading text', () => {
            const { getByText } = render(<Main />);
            const loadingText = 'Wczytywanie...';
            const searchButton = getByText(searchButtonText);

            fireEvent.click(searchButton);

            const loading = getByText(loadingText);
            expect(loading).toBeInTheDocument();
        });

        it('displays table, filters summary, retry and filters button after 1 second of waiting', () => {
            jest.useFakeTimers();
            const { getByText } = render(<Main />);
            const filtersButtonText = 'FILTRY';
            const filtersInfoText = 'Użyto następujących filtrów:';
            const searchButton = getByText(searchButtonText);

            act(() => {
                fireEvent.click(searchButton);
            });

            jest.advanceTimersByTime(1000);

            const table = getByText(tableHeadText);
            const retryButton = getByText(retryButtonText);
            const filtersButton = getByText(filtersButtonText);
            const filtersInfo = getByText(filtersInfoText);

            expect(table).toBeInTheDocument();
            expect(retryButton).toBeInTheDocument();
            expect(filtersButton).toBeInTheDocument();
            expect(filtersInfo).toBeInTheDocument();
        });

        it('displays table with all records by default', () => {
            jest.useFakeTimers();
            const { getByText } = render(<Main />);
            const searchButton = getByText(searchButtonText);

            act(() => {
                fireEvent.click(searchButton);
            });

            jest.advanceTimersByTime(1000);

            const counter = getByText(getCountText(EMPLOYEES.length));
            expect(counter).toBeInTheDocument();
        });

        it('displays filtred records in table', () => {
            jest.useFakeTimers();
            const { getByText, getByPlaceholderText } = render(<Main />);
            const textInput = getByPlaceholderText(placeholderText);
            const searchButton = getByText(searchButtonText);
            const { name } = EMPLOYEES[0];

            act(() => {
                fireEvent.change(textInput, { target: { value: name } });
            });

            act(() => {
                fireEvent.click(searchButton);
            });

            jest.advanceTimersByTime(1000);

            const counter = getByText(getCountText(1));
            const employeeRecord = getByText(name);

            expect(counter).toBeInTheDocument();
            expect(employeeRecord).toBeInTheDocument();
        });

        it('resets state after click on retry button', () => {
            jest.useFakeTimers();
            const { getByText, queryByText } = render(<Main />);
            const searchButton = getByText(searchButtonText);

            act(() => {
                fireEvent.click(searchButton);
            });

            jest.advanceTimersByTime(1000);

            let table = getByText(tableHeadText);
            const retryButton = getByText(retryButtonText);

            expect(table).toBeInTheDocument();

            act(() => {
                fireEvent.click(retryButton);
            });

            table = queryByText(tableHeadText);
            expect(table).not.toBeInTheDocument();
        });
    });
});
