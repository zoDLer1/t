import { type FC } from "react";
import { ITodo } from "./types";
export * from "./types";
import Checkbox from "@UI/Checbox";
import css from "./css";
import Input from "@UI/Input";

interface ITodoProps extends ITodo {
    setTodoDone: (newTodo: ITodo) => void;
}

const Todo: FC<ITodoProps> = ({ setTodoDone, id, completed, title }) => {
    return (
        <div className={css.block}>
            <Checkbox onChange={(evt) => setTodoDone({ id, title, completed: evt.target.checked })} id={String(id)} checked={completed} value={title} />
            <Input readOnly={true} id={String(id)} value={title} readOnlyStyle={css.input}/>
        </div>
    );
};

export default Todo;
