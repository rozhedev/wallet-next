import React, { FC } from "react";
import type { SelectProps } from "./types";

const Select: FC<SelectProps> = ({ className, options, disabled, defaultValue, svgIcon }) => {
    return (
        <div className={className}>
            {svgIcon}
            <select
                id="standard-select"
                title="standard-select"
                disabled={disabled}
            >
                <option
                    key="disabled-option"
                    disabled
                    value="Сортировка по"
                >
                    {defaultValue}
                </option>
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
