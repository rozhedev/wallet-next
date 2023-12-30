import React, { FC } from "react";
import type { TValidCheckboxProps } from "./types";

// * Checkbox with applied validation
const ValidCheckbox: FC<TValidCheckboxProps> = ({ id, register,  name, children, disabled = false, defaultChecked = false, required, ...props }) => {
    return (
        <div className="form-controller checkbox">
            <input
                type="checkbox"
                id={id}
                className="checkbox__input"
                disabled={disabled}
                defaultChecked={defaultChecked}
                {...register(id, { required })}
                {...props}
            />
            <label
                htmlFor={id}
                className="checkbox__label"
            >
                {children}
            </label>
        </div>
    );
};

export default ValidCheckbox;
