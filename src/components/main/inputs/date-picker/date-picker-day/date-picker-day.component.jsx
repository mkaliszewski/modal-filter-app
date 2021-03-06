import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDay } from '@datepicker-react/hooks';
import DatepickerContext from '../date-picker.context';
import { getColors } from '../helpers';
import './date-picker-day.styles.scss';

const COLORS = {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GREY: '#fbfbfb',
    PRIMARY_ORANGE: '#ff6b01',
    SECONDARY_ORANGE: '#ffac71',
};

/**
 * Component used as single day element in date picker
 *
 * @param {string} dayLabel single day label
 * @param {boolean} date full date associated with single day
 *
 * @return  {FC} PickerDay component
 *
 * @component
 * @example
 * const dayLabel = '5'
 * const date = false
 *
 * return (
 *    <PickerDay dayLabel={dayLabel} date={date} />
 * )
 *
 */

const PickerDay = ({ dayLabel, date }) => {
    const contextValues = useContext(DatepickerContext);
    const { isSelected, isSelectedStartOrEnd, onClick } = useDay({
        date,
        ...contextValues,
    });

    const getTrueColor = getColors(isSelected, isSelectedStartOrEnd);

    return (
        <>
            {dayLabel ? (
                <button
                    onClick={onClick}
                    type="button"
                    className="day-button"
                    style={{
                        color: getTrueColor({
                            selectedFirstOrLastColor: COLORS.WHITE,
                            normalColor: COLORS.BLACK,
                            selectedColor: COLORS.WHITE,
                        }),
                        background: getTrueColor({
                            selectedFirstOrLastColor: COLORS.PRIMARY_ORANGE,
                            normalColor: COLORS.WHITE,
                            selectedColor: COLORS.SECONDARY_ORANGE,
                        }),
                    }}
                >
                    {dayLabel}
                </button>
            ) : (
                <div role="presentation" />
            )}
        </>
    );
};

PickerDay.propTypes = {
    dayLabel: PropTypes.string,
    date: PropTypes.instanceOf(Date).isRequired,
};

PickerDay.defaultProps = {
    dayLabel: '',
};

export default PickerDay;
