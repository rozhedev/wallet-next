import React, { FC } from "react";
import type { T_ToggleProps } from "./types";

const Toggle: FC<T_ToggleProps> = ({ id, nameAttr, classNameModif, children, disabled = false, defaultChecked = false }) => {
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
                <span className="toggle__label">{children}</span>
            </label>
        </div>
    );
};

export default Toggle;
