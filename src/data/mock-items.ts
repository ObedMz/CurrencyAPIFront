export interface Currency {
    id: number;
    amount: number;
    convertedAmount: number;
    currencyFrom: string;
    currencyTo: string;
    rate: number;
}

export const exchangeRates: Currency[] = [
    {
        id: 1,
        amount: 100,
        convertedAmount: 85,
        currencyFrom: 'USD',
        currencyTo: 'EUR',
        rate: 0.85,
    },
    {
        id: 2,
        amount: 200,
        convertedAmount: 230,
        currencyFrom: 'EUR',
        currencyTo: 'USD',
        rate: 1.15,
    },
    {
        id: 3,
        amount: 150,
        convertedAmount: 135,
        currencyFrom: 'USD',
        currencyTo: 'GBP',
        rate: 0.9,
    },
    {
        id: 4,
        amount: 500,
        convertedAmount: 585,
        currencyFrom: 'GBP',
        currencyTo: 'USD',
        rate: 1.17,
    },
    {
        id: 5,
        amount: 300,
        convertedAmount: 402,
        currencyFrom: 'EUR',
        currencyTo: 'JPY',
        rate: 134,
    },
    {
        id: 6,
        amount: 10000,
        convertedAmount: 74.5,
        currencyFrom: 'JPY',
        currencyTo: 'GBP',
        rate: 0.00745,
    },
    {
        id: 7,
        amount: 50,
        convertedAmount: 3650,
        currencyFrom: 'USD',
        currencyTo: 'INR',
        rate: 73,
    },
    {
        id: 8,
        amount: 5000,
        convertedAmount: 68.5,
        currencyFrom: 'INR',
        currencyTo: 'USD',
        rate: 0.0137,
    },
    {
        id: 9,
        amount: 750,
        convertedAmount: 795,
        currencyFrom: 'USD',
        currencyTo: 'CAD',
        rate: 1.06,
    },
    {
        id: 10,
        amount: 1000,
        convertedAmount: 940,
        currencyFrom: 'CAD',
        currencyTo: 'USD',
        rate: 0.94,
    },
    {
        id: 11,
        amount: 600,
        convertedAmount: 528,
        currencyFrom: 'USD',
        currencyTo: 'AUD',
        rate: 0.88,
    },
    {
        id: 12,
        amount: 850,
        convertedAmount: 935,
        currencyFrom: 'AUD',
        currencyTo: 'USD',
        rate: 1.1,
    },
    {
        id: 13,
        amount: 100,
        convertedAmount: 15300,
        currencyFrom: 'USD',
        currencyTo: 'KRW',
        rate: 153,
    },
    {
        id: 14,
        amount: 20000,
        convertedAmount: 16.4,
        currencyFrom: 'KRW',
        currencyTo: 'USD',
        rate: 0.00082,
    },
    {
        id: 15,
        amount: 250,
        convertedAmount: 1700,
        currencyFrom: 'EUR',
        currencyTo: 'CNY',
        rate: 6.8,
    },
    {
        id: 16,
        amount: 4000,
        convertedAmount: 588,
        currencyFrom: 'CNY',
        currencyTo: 'EUR',
        rate: 0.147,
    },
    {
        id: 17,
        amount: 100,
        convertedAmount: 940,
        currencyFrom: 'USD',
        currencyTo: 'SEK',
        rate: 9.4,
    },
    {
        id: 18,
        amount: 1000,
        convertedAmount: 106,
        currencyFrom: 'SEK',
        currencyTo: 'USD',
        rate: 0.106,
    },
    {
        id: 19,
        amount: 500,
        convertedAmount: 7500,
        currencyFrom: 'USD',
        currencyTo: 'VND',
        rate: 15,
    },
    {
        id: 20,
        amount: 300000,
        convertedAmount: 13,
        currencyFrom: 'VND',
        currencyTo: 'USD',
        rate: 0.000043,
    },
];

export const currencies: string[] = [
    "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];
