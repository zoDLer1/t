import { type FC, type InputHTMLAttributes, useId } from "react";
import css from "./css";

interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

const RadioButton: FC<IRadioButtonProps> = ({ title, ...props }) => {
    const id = useId();

    return (
        <div className={css.block}>
            <input id={id} type="radio" {...props} hidden />
            <label className={css.title} htmlFor={id}>
                {title}
            </label>
        </div>
    );
};

export default RadioButton;
