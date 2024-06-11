import { useEffect, useMemo, useState, type FC } from "react";
import Todo, { type ITodo } from "@components/Todo";
import css from "./css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fetchTodos } from "./api";
import RadioSelect from "@components/RadioSelect";
import { filters } from "./filters";
import useFilter from "@/shared/hooks/useFilter";
import useRequest from "@/shared/hooks/useRequest";

interface ITodoListProps {}

const TodoList: FC<ITodoListProps> = () => {
    const [filter, setFilter] = useState<number>(1);
    const [todos, setTodos] = useFilter<ITodo>(filters, filter);
    const [pending, getTodos] = useRequest<ITodo[]>(fetchTodos);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    const setDone = (newTodo: ITodo) => {
        setTodos((todos) => {
            const newTodos = [...todos];
            const index = newTodos.findIndex((todo) => todo.id === newTodo.id);
            newTodos[index] = newTodo;
            return newTodos;
        });

        // send api request with new todo
    };

    return (
        <div className={css.block}>
            <div className={css.header}>
                <h2>Todos</h2>
            </div>
            <div className={css.todos}>
                {pending ? (
                    <div className={css.loading}>
                        <FontAwesomeIcon icon={faSpinner} color="#0388d4" size="2xl" pulse />
                    </div>
                ) : (
                    todos.map((todo) => <Todo key={todo.id} {...todo} setTodoDone={setDone} />)
                )}
            </div>
            <div className={css.footer}>
                <div className={css.items_count}></div>
                <div className={css.actions}>
                    <RadioSelect
                        name="filter"
                        select={(id) => setFilter(id)}
                        selected={filter}
                        items={[
                            { id: 1, title: "all" },
                            { id: 2, title: "active" },
                            { id: 3, title: "completed" },
                        ]}
                    />
                </div>
                <div className={css.clear}></div>
            </div>
        </div>
    );
};

export default TodoList;
