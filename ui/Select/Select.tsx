import React, { FC } from "react";
import type { TSelectProps } from "./types";

const Select: FC<TSelectProps> = ({ id, title, className, options, disabled, svgIcon }) => {
    return (
        <div className={className}>
            {svgIcon}
            <select
                id={id}
                title={title}
                disabled={disabled}
            >
                {options.map((opt) => (
                    <option
                        key={opt.value}
                        value={opt.value}
                    >
                        {opt.label}
                    </option>
                ))}
            </select>
            <span className="focus"></span>
        </div>
    );
};

export default Select;
