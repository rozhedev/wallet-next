import React, { FC } from "react";
import type { TRadioBtnProps } from "./types";

const Radio: FC<TRadioBtnProps> = ({ id, name, label, disabled = false }) => {
    return (
        <div className="form-controller radio">
            <input
                type="radio"
                name={name}
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
