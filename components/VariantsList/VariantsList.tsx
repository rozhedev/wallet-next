import React, { FC } from "react";
import { VariantsListItemProps } from "./types";
import { checkUnifiedArr, checkToggleArr } from "./helpers";

import Radio from "@/ui/Radio/Radio";
import Checkbox from "@/ui/Checkbox/Checkbox";
import Toggle from "@/ui/Toggle/Toggle";

export const VariantsList: FC<VariantsListItemProps> = ({ dataArr, initState, changeHandler }) => {
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
                          checked={initState === variant.label}
                          onChange={changeHandler}
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
                        //   checked={initState}
                        //   onChange={() => changeHandler(variant.name)}
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
                        //   checked={initState}
                        //   onChange={() => changeHandler(variant.name)}
                          disabled={variant.disabled}
                      >
                          {variant.label}
                      </Checkbox>
                  ))}
            {/* Temp state output */}
            <br />
            <p><i>Selected option:</i> {initState}</p>
        </>
    );
};
