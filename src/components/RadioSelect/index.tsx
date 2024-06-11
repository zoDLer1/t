import RadioButton from "@UI/RadioButton";
import { type FC } from "react";
import css from "./css";

interface IRadioItem {
    id: number;
    title: string;
}

interface IRadioSelectProps {
    name: string;
    items: IRadioItem[];
    selected: number;
    select: (id: number) => void;
}

const RadioSelect: FC<IRadioSelectProps> = ({ selected, items, name, select }) => {
    return (
        <div className={css.block}>
            {items.map(({ id, title }) => (
                <RadioButton checked={selected === id} onChange={() => select(id)} title={title} name={name} key={id} />
            ))}
        </div>
    );
};

export default RadioSelect;
