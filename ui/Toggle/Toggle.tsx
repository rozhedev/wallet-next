import React, { FC } from "react";
import type { T_ToggleProps } from "./types";

const Toggle: FC<T_ToggleProps> = ({ id, name, classNameModif, children, disabled = false, ...props }) => {
    return (
        <div className={`form-controller ${classNameModif}`}>
            <label
                className="toggle__inner"
                htmlFor={id}
            >
                <input
                    type="checkbox"
                    name={name}
                    id={id}
                    className="toggle__checkbox"
                    disabled={disabled}
                    {...props}
                />
                <div className="toggle__switch"></div>
                <span className="toggle__label">{children}</span>
            </label>
        </div>
    );
};

export default Toggle;
