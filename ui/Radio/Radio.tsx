import React, { FC } from "react";
import { RadioBtnProps } from "./types";

const Radio: FC<RadioBtnProps> = ({ id, nameAttr, label, disabled = false }) => {
    return (
        <div className="form-conroller radio">
            <input
                type="radio"
                name={nameAttr}
                id={id}
                className="radio__input"
                disabled={disabled}
            />
            <label
                htmlFor={id}
                className="radio__label"
            >
                {label}
            </label>
        </div>
    );
};

export default Radio;
