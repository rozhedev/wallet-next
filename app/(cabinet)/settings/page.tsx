"use client";

import React from "react";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import VariantsList from "@/components/VariantsList";
import SectionLayout from "@/modules/layout/SectionLayout";
import { settingsToggleList } from "@/data/cabinet/settings";

export default function Settings() {
    return (
        <SectionLayout id="page-cab settings">
            <div className="inner">
                <StyledWrapper className="cabinet-card settings-list">
                    <VariantsList dataArr={settingsToggleList}/>
                </StyledWrapper>

                <StyledWrapper className="cabinet-card personal-data-edit">
                    <StyledWrapper className="form-controller">
                        <span>Change form</span>
                    </StyledWrapper>
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}


{/* <form action="@@action" method="post" id="@@formId" className="form settings-change-form">
    <div className="form-controller">
        <label className="form-controller__label" for="@@inpId">@@inpLabel</label>
        <input type="@@inpType" name="@@inpId" title="@@inpLabel" id="@@inpId" className="inp">
        <small className="form-controller__error"></small>
    </div>
    <button type="submit" className="btn btn-fill-sm">
        <span>@@btnLabel</span>
    </button>
</form> */}