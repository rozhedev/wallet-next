import React, { FC } from "react";
import { VariantsListItemProps } from "./types";
import { checkUnifiedArr, checkToggleArr } from "@/components/RadioList";

import Radio from "@/ui/Radio/Radio";
import Checkbox from "@/ui/Checkbox/Checkbox";
import Toggle from "@/ui/Toggle/Toggle";

// * Test component. Only use it in test page.
export const VariantsList: FC<VariantsListItemProps> = ({ dataArr }) => {
    return (
        <>
            {checkUnifiedArr(dataArr, "radio")
                ? dataArr.map((variant) => (
                      <Radio
                          key={variant.id}
                          id={variant.id}
                          name={variant.name}
                          label={variant.label}
                          value={variant.label}
                          disabled={variant.disabled}
                      />
                  ))
                : checkUnifiedArr(dataArr, "checkbox") && checkToggleArr(dataArr, "classNameModif")
                ? dataArr.map((variant) => (
                      <Toggle
                          key={variant.id}
                          id={variant.id}
                          name={variant.name}
                          value={variant.label}
                          disabled={variant.disabled}
                          classNameModif={variant.classNameModif}
                      >
                          {variant.label}
                      </Toggle>
                  ))
                : dataArr.map((variant) => (
                      <Checkbox
                          key={variant.id}
                          id={variant.id}
                          name={variant.name}
                          value={variant.label}
                          disabled={variant.disabled}
                      >
                          {variant.label}
                      </Checkbox>
                  ))}
        </>
    );
};
