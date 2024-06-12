import { InputHTMLAttributes, type FC } from "react";
import css from './css'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    readOnlyStyle?: string;
}

const Input: FC<IInputProps> = ({ id, readOnly, value, readOnlyStyle, ...props }) => {
    return (
        <div className={css.block}>
            {readOnly ? (
                <label className={readOnlyStyle} htmlFor={id}>
                    {value}
                </label>
            ) : (
                <input {...props} value={value} type="text" id={id} />
            )}
        </div>
    );
};

export default Input;
