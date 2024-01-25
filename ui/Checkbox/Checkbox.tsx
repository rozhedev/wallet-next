import React, { FC } from "react";
import type { TCheckboxProps } from "./types";

const Checkbox: FC<TCheckboxProps> = ({ id, children, disabled = false, ...props }) => {
    return (
        <div className="form-controller checkbox">
            <input
                type="checkbox"
                name={id}
                id={id}
                className="checkbox__input"
                disabled={disabled}
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

export default Checkbox;
