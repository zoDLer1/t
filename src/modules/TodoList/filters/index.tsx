import { ITodo } from "@components/Todo";
import { IFilters } from "@/shared/types";

export const filters: IFilters<ITodo> = {
    1: (list) => list,
    2: (list) => list.filter((todo) => !todo.completed),
    3: (list) => list.filter((todo) => todo.completed),
};
