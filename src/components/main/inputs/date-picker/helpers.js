export const enPlMonths = {
    January: 'Styczeń',
    February: 'Luty',
    March: 'Marzec',
    April: 'Kwiecień',
    May: 'Maj',
    June: 'Czerwiec',
    July: 'Lipiec',
    August: 'Sierpień',
    September: 'Wrzesień',
    October: 'Październik',
    November: 'Listopad',
    December: 'Grudzień',
};

export const getColors = (isSelected, isSelectedStartOrEnd) => {
    return ({ selectedFirstOrLastColor, normalColor, selectedColor }) => {
        if (isSelectedStartOrEnd) {
            return selectedFirstOrLastColor;
        }
        if (isSelected) {
            return selectedColor;
        }
        return normalColor;
    };
};
