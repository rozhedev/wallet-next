"use client";

import React from "react";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import VariantsList from "@/components/VariantsList";
import SectionLayout from "@/modules/layout/SectionLayout";
import { settingsToggleList } from "@/data/cabinet/settings";
import SetChangeForm from "@/components/SetChangeForm";

export default function Settings() {
    return (
        <SectionLayout id="page-cab settings">
            <div className="inner">
                <StyledWrapper className="cabinet-card settings-list">
                    <VariantsList dataArr={settingsToggleList} />
                </StyledWrapper>

                <StyledWrapper className="cabinet-card personal-data-edit">
                    <SetChangeForm
                        formId="change-username-form"
                        inpType="text"
                        inpId="set-change-username"
                        label="Change username"
                    />
                    <SetChangeForm
                        formId="change-email-form"
                        inpType="email"
                        inpId="set-change-email"
                        label="Change email"
                    />
                    <SetChangeForm
                        formId="change-region-form"
                        inpType="text"
                        inpId="set-change-region"
                        label="Change region"
                    />
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
