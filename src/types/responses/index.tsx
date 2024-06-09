export interface ResponseExchange {
    id: number
    amount: number
    convertedAmount: number
    currencyFrom: string
    currencyTo: string
    rate: number
}
export interface RequestExchange {
    amount: number
    currencyFrom: number
    currencyTo: string
}
export interface FilterContextType {
    filter: ResponseExchange[] | null;
    setFilter: (filter: ResponseExchange[] | null) => void;
}