import React, { FC } from "react";
import type { TSetChangeFormProps } from "./types";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import Btn from "@/ui/Btn/Btn";

export const SetChangeForm: FC<TSetChangeFormProps> = ({ formId, inpType, inpId, label }) => {
    return (
        <form
            action=""
            method="post"
            id={formId}
            className="form settings-change-form"
        >
            <StyledWrapper className="form-controller">
                <Inp
                    type={inpType}
                    id={inpId}
                    title={label}
                    label={label}
                    className="inp"
                />
                <small className="form-controller__error"></small>
            </StyledWrapper>
            <Btn
                type="submit"
                className="btn btn-fill-sm"
            >
                <span>Change</span>
            </Btn>
        </form>
    );
};
