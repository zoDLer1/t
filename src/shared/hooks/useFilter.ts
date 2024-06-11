import { useState, useMemo, Dispatch, SetStateAction } from "react";
import { IFilters } from "../types";

const useFilter = <T>(filters: IFilters<T>, current: number): [T[], Dispatch<SetStateAction<T[]>>] => {
    const [items, setItems] = useState<T[]>([]);

    let filteredItems = useMemo<T[]>(() => {
        return filters[current](items);
    }, [current, items]);

    return [filteredItems, setItems];
};

export default useFilter;
