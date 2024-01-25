import React, { FC } from "react";
import { TCheckboxListProps } from "./types";
import { checkUnifiedArr } from "./helpers";

import Radio from "@/ui/Radio/Radio";

export const CheckboxList: FC<TCheckboxListProps> = ({ dataArr, initState, changeHandler }) => {
    return (
        <>
            {checkUnifiedArr(dataArr, "radio") &&
                dataArr.map((variant) => (
                    <Radio
                        key={variant.id}
                        id={variant.id}
                        name={variant.name}
                        label={variant.label}
                        value={variant.label}
                        disabled={variant.disabled}
                        checked={initState === variant.label}
                        onChange={changeHandler}
                    />
                ))}
        </>
    );
};
