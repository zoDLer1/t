import { type FC } from "react";
import TodoList from "@modules/TodoList";
import css from "./css";
import "./css/normalize";

interface IAppProps {}

const App: FC<IAppProps> = () => {
    return (
        <div className={css.block}>
            <TodoList />
        </div>
    );
};

export default App;
