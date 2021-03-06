export const ICONS_NAMES = {
    BOOK: 'book',
    CHART: 'chart',
    PHONE: 'phone',
    ENVELOPE: 'envelope',
    INFO: 'info',
    SEARCH: 'search',
    SORT: 'sort',
    CALENDAR: 'calendar',
    NEXT: 'next',
    PREVIOUS: 'previous',
};

export const AGREEMENT_TYPES = {
    PERNAMENT: 'Umowa o pracę',
    PERIOD: 'Umowa zlecenie',
    TASK: 'Umowa o dzieło',
};

export const AGREEMENT_OPTIONS = Object.values(AGREEMENT_TYPES);

export const JOB_TYPES = {
    COOK: 'Kucharz',
    WAITER: 'Kelner',
    CLEANER: 'Konserwator',
    HELP: 'Pomoc kuchenna',
    SERVICE: 'Serwisant',
};

export const JOB_OPTIONS = Object.values(JOB_TYPES);

export const LOCATIONS = {
    ARKADY: 'Arkady',
    PASAZ: 'Pasaż Grunwaldzki',
    BIELANY: 'Aleja Bielany',
};

export const LOCATIONS_OPTIONS = Object.values(LOCATIONS);

export const EMPLOYEES_HEADERS = [
    'Imię i nazwisko',
    'Data',
    'Stanowisko',
    'Warunki zatrudnienia',
    'Lokalizacje',
];

export const INITIAL_FILTERS = {
    date: {
        startDate: null,
        endDate: null,
    },
    jobs: [],
    locations: [],
    agreements: [],
    employees: [],
};

export const JOB_FILTERS = {
    date: {
        startDate: null,
        endDate: null,
    },
    jobs: [],
    locations: [],
    agreements: [],
};

export const NAVIGATION_ICONS = [
    {
        ICON_NAME: 'book',
        TEXT: 'Pracownicy',
    },
    {
        ICON_NAME: 'chart',
        TEXT: 'Analiza',
    },
    {
        ICON_NAME: 'phone',
        TEXT: 'Kontakty',
    },
    {
        ICON_NAME: 'envelope',
        TEXT: 'Wiadomości',
    },
];

export const EMPLOYEES = [
    {
        id: 1,
        name: 'Adam Adamski',
        date: new Date(2020, 0, 1),
        job: JOB_TYPES.COOK,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 2,
        name: 'Bernadeta Bednarska',
        date: new Date(2020, 1, 2),
        job: JOB_TYPES.WAITER,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 3,
        name: 'Cecylia Cedyńska',
        date: new Date(2020, 2, 3),
        job: JOB_TYPES.CLEANER,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
    {
        id: 4,
        name: 'Denis Dembski',
        date: new Date(2020, 3, 4),
        job: JOB_TYPES.HELP,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 5,
        name: 'Ernest Etstkowski',
        date: new Date(2020, 4, 5),
        job: JOB_TYPES.SERVICE,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 6,
        name: 'Franciszek Fretka',
        date: new Date(2020, 5, 6),
        job: JOB_TYPES.COOK,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
    {
        id: 7,
        name: 'Grażyna Gasiuk',
        date: new Date(2020, 6, 7),
        job: JOB_TYPES.WAITER,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 8,
        name: 'Henryk Henrykowski',
        date: new Date(2020, 7, 8),
        job: JOB_TYPES.CLEANER,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 9,
        name: 'Irena Isierska',
        date: new Date(2020, 8, 9),
        job: JOB_TYPES.HELP,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
    {
        id: 10,
        name: 'Jakub Jędrzychowski',
        date: new Date(2020, 9, 10),
        job: JOB_TYPES.SERVICE,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 11,
        name: 'Katarzyna Katarska',
        date: new Date(2020, 10, 11),
        job: JOB_TYPES.COOK,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 12,
        name: 'Lucjan Lukrowicz',
        date: new Date(2020, 11, 12),
        job: JOB_TYPES.WAITER,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
    {
        id: 13,
        name: 'Mikołaj Miłosławski',
        date: new Date(2020, 0, 13),
        job: JOB_TYPES.CLEANER,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 14,
        name: 'Nicol Niżna',
        date: new Date(2020, 1, 14),
        job: JOB_TYPES.HELP,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 15,
        name: 'Oskar Oparski',
        date: new Date(2020, 2, 15),
        job: JOB_TYPES.SERVICE,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
    {
        id: 16,
        name: 'Patryk Przybylski',
        date: new Date(2020, 3, 16),
        job: JOB_TYPES.COOK,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 17,
        name: 'Roksana Rusiecka',
        date: new Date(2020, 4, 17),
        job: JOB_TYPES.WAITER,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 18,
        name: 'Sabina Sadowska',
        date: new Date(2020, 5, 18),
        job: JOB_TYPES.CLEANER,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
    {
        id: 19,
        name: 'Tomasz Tokarz',
        date: new Date(2020, 6, 19),
        job: JOB_TYPES.HELP,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 20,
        name: 'Urszula Uniejska',
        date: new Date(2020, 7, 20),
        job: JOB_TYPES.SERVICE,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 21,
        name: 'Waldemar Wolski',
        date: new Date(2020, 8, 21),
        job: JOB_TYPES.COOK,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
    {
        id: 22,
        name: 'Zofia Zamojska',
        date: new Date(2020, 9, 22),
        job: JOB_TYPES.WAITER,
        agreement: AGREEMENT_TYPES.PERNAMENT,
        locations: [LOCATIONS.ARKADY],
    },
    {
        id: 23,
        name: 'Adrianna Adamska',
        date: new Date(2020, 10, 23),
        job: JOB_TYPES.CLEANER,
        agreement: AGREEMENT_TYPES.PERIOD,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ],
    },
    {
        id: 24,
        name: 'Tomasz Adamski',
        date: new Date(2020, 11, 24),
        job: JOB_TYPES.HELP,
        agreement: AGREEMENT_TYPES.TASK,
        locations: [LOCATIONS.ARKADY, LOCATIONS.PASAZ, LOCATIONS.BIELANY],
    },
];

export const MULTISELECTABLE_OPTIONS = [
    {
        title: 'Stanowiska',
        options: JOB_OPTIONS,
        filterKey: 'jobs',
    },
    {
        title: 'Lokalizacje',
        options: LOCATIONS_OPTIONS,
        filterKey: 'locations',
    },
    {
        title: 'Pracownicy',
        options: EMPLOYEES,
        filterKey: 'employees',
    },
    {
        title: 'Warunki zatrudnienia',
        options: AGREEMENT_OPTIONS,
        filterKey: 'agreements',
    },
];
