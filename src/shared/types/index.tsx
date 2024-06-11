export interface IFilter<T> {
    (list: T[]): T[];
}

export interface IFilters<T> {
    [key: number]: IFilter<T>;
}

export interface Responses<T> {
    [key: number]: (data: T) => void;
}
