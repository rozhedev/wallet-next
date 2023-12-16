import React, { FC } from "react";
import { VariantsListItemProps } from "./types";
import { checkUnifiedArr, checkToggleArr } from "./helpers";

import Radio from "@/ui/Radio/Radio";
import Checkbox from "@/ui/Checkbox/Checkbox";
import Toggle from "@/ui/Toggle/Toggle";

export const VariantsList: FC<VariantsListItemProps> = ({ dataArr }) => {
    return (
        <>
            {checkUnifiedArr(dataArr, "radio")
                ? dataArr.map((variant) => (
                      <Radio
                          key={variant.id}
                          id={variant.answerId}
                          nameAttr={variant.nameAttr}
                          label={variant.answer}
                          disabled={variant.disabled}
                      />
                  ))
                : checkUnifiedArr(dataArr, "checkbox") && checkToggleArr(dataArr, "classNameModif")
                ? dataArr.map((variant) => (
                      <Toggle
                          key={variant.id}
                          id={variant.answerId}
                          nameAttr={variant.nameAttr}
                          disabled={variant.disabled}
                          classNameModif={variant.classNameModif}
                          defaultChecked={variant.defaultChecked}
                      >
                          {variant.answer}
                      </Toggle>
                  ))
                : dataArr.map((variant) => (
                      <Checkbox
                          key={variant.id}
                          id={variant.answerId}
                          nameAttr={variant.nameAttr}
                          disabled={variant.disabled}
                          defaultChecked={variant.defaultChecked}
                      >
                          {variant.answer}
                      </Checkbox>
                  ))}
        </>
    );
};
