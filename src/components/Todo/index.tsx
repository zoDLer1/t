import { type FC } from "react";
import { ITodo } from "./types";
export * from "./types";
import Checkbox from "@UI/Checbox";
import css from "./css";

interface ITodoProps extends ITodo {
    setTodoDone: (newTodo: ITodo) => void;
}

const Todo: FC<ITodoProps> = ({ setTodoDone, id, completed, title }) => {
    return (
        <div className={css.block}>
            <Checkbox onChange={(evt) => setTodoDone({ id, title, completed: evt.target.checked })} id={String(id)} checked={completed} value={title} />
            <label htmlFor={id}></label>
        </div>
    );
};

export default Todo;
