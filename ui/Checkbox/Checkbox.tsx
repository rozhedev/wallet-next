import React from "react";
import { CheckboxProps } from "./types";

const Radio = ({ id, nameAttr, label, disabled = false, defaultChecked = false }: CheckboxProps) => {
    return (
        <div className="form-conroller checkbox">
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
                {label}
            </label>
        </div>
    );
};

export default Radio;
