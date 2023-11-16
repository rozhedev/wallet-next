import React from "react";
import { SelectProps } from "./types";

const Select = ({ className, disabled, defaultValue }: SelectProps) => {
    return (
        <div className={className}>
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
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
                <option value="Option length">Option that has too long of a value to fit</option>
            </select>
            <span className="focus"></span>
        </div>
    );
};

export default Select;
