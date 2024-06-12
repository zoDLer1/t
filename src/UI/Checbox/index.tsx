import { InputHTMLAttributes, useId, type FC } from "react";
import css from "./css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox: FC<ICheckboxProps> = ({ id, value, ...props }) => {

    return (
        <div className={css.block}>
            <input {...props} id={id} type="checkbox" hidden />
            <label htmlFor={id} className={css.checkbox}>
                <FontAwesomeIcon icon={faCheck} className={css.icon} size="sm" color="#0388d4" />
            </label>
        </div>
    );
};

export default Checkbox;
