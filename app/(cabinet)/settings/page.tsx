"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { useState } from "react";

import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import VariantsList from "@/components/VariantsList";
import SetChangeForm from "@/components/SetChangeForm";
import SectionLayout from "@/modules/layout/SectionLayout";

import { settingsToggleList } from "@/data/cabinet/settings";

export default function Settings() {
    const [toggle, setToggle] = useState<string | null>(null);

    const toggleChangeHandler = (e: any) => {
        setToggle(e.target.value)
    };

    return (
        <SectionLayout id="page-cab settings">
            <div className="inner">
                <StyledWrapper className="cabinet-card settings-list">
                    <VariantsList
                        dataArr={settingsToggleList}
                        initState={toggle}
                        changeHandler={toggleChangeHandler}
                    />
                </StyledWrapper>

                <StyledWrapper className="cabinet-card personal-data-edit">
                    <SetChangeForm
                        formId="change-username-form"
                        inpType="text"
                        inpId="set-change-username"
                        minLength={4}
                        maxLength={15}
                        label="Change username"
                        placeholder="john_smith"
                    />
                    <SetChangeForm
                        formId="change-email-form"
                        inpType="email"
                        inpId="set-change-email"
                        label="Change email"
                        placeholder="john@email.com"
                        minLength={8}
                        maxLength={30}
                    />
                    <SetChangeForm
                        formId="change-region-form"
                        inpType="text"
                        inpId="set-change-region"
                        label="Change region"
                        minLength={6}
                        maxLength={40}
                        placeholder="England, UK"
                    />
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
