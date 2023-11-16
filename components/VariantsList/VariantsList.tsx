import React from "react";
import { VariantsListItemProps } from "./types";
import { checkUnifiedArr } from "./helpers";

import Radio from "../../ui/Radio/Radio";
import Checkbox from "../../ui/Checkbox/Checkbox";

const VariantsList = ({ dataArr }: VariantsListItemProps) => {
    return (
        <>
            {checkUnifiedArr(dataArr, "radio") &&
                dataArr.map((variant) => (
                    <Radio
                        key={variant.id}
                        id={variant.answerId}
                        nameAttr={variant.nameAttr}
                        label={variant.answer}
                        disabled={variant.disabled}
                    />
                ))}
            {checkUnifiedArr(dataArr, "checkbox") &&
                dataArr.map((variant) => (
                    <Checkbox
                        key={variant.id}
                        id={variant.answerId}
                        nameAttr={variant.nameAttr}
                        label={variant.answer}
                        disabled={variant.disabled}
                    />
                ))}
        </>
    );
};

export default VariantsList;
