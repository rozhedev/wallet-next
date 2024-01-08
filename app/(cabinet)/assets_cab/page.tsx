"use client";

import React from "react";

import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import SectionLayout from "@/modules/layout/SectionLayout";

export default function History() {
    return (
        <SectionLayout id="page-cab assets-cab">
            <div className="inner">
                <StyledWrapper className="cabinet-card assets-cab-portfolio">
                    <div className="modal-header">
                        <h4 className="h4">Added assets</h4>
                    </div>
                    <div className="added-assets">
                    added-assets
                    </div>
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
