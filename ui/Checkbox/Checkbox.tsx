import React from "react";
import { CheckboxProps } from "./types";

const Radio = ({ id, nameAttr, disabled, label }: CheckboxProps) => {
    return (
        <div className="form-conroller checkbox">
            <input
                type="checkbox"
                name={nameAttr}
                id={id}
                className="checkbox__input"
                disabled={disabled}
            />
            <label
                htmlFor={id}
                className="checkbox__label"
            >
                {label}
            </label>
        </div>
    );
};

export default Radio;
