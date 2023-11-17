import React from "react";
import { ToggleProps } from "./types";

const Toggle = ({ id, nameAttr, classNameModif, label, disabled = false, defaultChecked = false }: ToggleProps) => {
    return (
        <div className={`form-conroller ${classNameModif}`}>
            <label
                className="toggle__inner"
                htmlFor={id}
            >
                <input
                    type="checkbox"
                    name={nameAttr}
                    id={id}
                    className="toggle__checkbox"
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                />
                <div className="toggle__switch"></div>
                <span className="toggle__label">{label}</span>
            </label>
        </div>
    );
};

export default Toggle;
