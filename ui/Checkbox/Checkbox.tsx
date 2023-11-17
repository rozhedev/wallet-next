import React, { FC } from "react";
import { CheckboxProps } from "./types";

const Radio: FC<CheckboxProps> = ({ id, nameAttr, label, disabled = false, defaultChecked = false }) => {
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
