import React, { FC } from "react";
import type { TCheckboxProps } from "./types";

const Radio: FC<TCheckboxProps> = ({ id, nameAttr, children, disabled = false, defaultChecked = false }) => {
    return (
        <div className="form-controller checkbox">
            <input
                type="checkbox"
                name={nameAttr}
                id={id}
                className="checkbox__input"
                disabled={disabled}
                defaultChecked={defaultChecked}
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

export default Radio;
