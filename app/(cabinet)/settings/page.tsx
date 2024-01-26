"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { useState } from "react";

import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Toggle from "@/ui/Toggle/Toggle";
import SetChangeForm from "@/components/SetChangeForm";
import SectionLayout from "@/modules/layout/SectionLayout";

import { settingsToggleList } from "@/data/cabinet/settings";
import { type TInputListItem } from "@/types/data/shared";

export default function Settings() {
    type T_ToggleState = {
        [key: string]: boolean;
    };
    const [settingsToggles, setSettingsToggles] = useState<T_ToggleState>({
        [settingsToggleList[0].id]: false,
        [settingsToggleList[1].id]: false,
        [settingsToggleList[2].id]: false,
        [settingsToggleList[3].id]: false,
        [settingsToggleList[4].id]: false,
        [settingsToggleList[5].id]: false,
        [settingsToggleList[6].id]: false,
        [settingsToggleList[7].id]: false,
    });

    const checkboxTestChangeHandler = (name: string) => {
        setSettingsToggles((prev: T_ToggleState) => {
            const currentState = { ...prev, [name]: !settingsToggles[name] };
            return currentState;
        });
    };

    return (
        <SectionLayout id="page-cab settings">
            <div className="inner">
                <StyledWrapper className="cabinet-card settings-list">
                    {settingsToggleList.map((item: TInputListItem) => (
                        <Toggle
                            key={item.id}
                            id={item.id}
                            type={item.type}
                            classNameModif={item.classNameModif}
                            name={item.name}
                            value={item.label}
                            checked={settingsToggles[item.name]}
                            disabled={item.disabled}
                            onChange={() => checkboxTestChangeHandler(item.name)}
                        >
                            {item.label}
                        </Toggle>
                    ))}
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
