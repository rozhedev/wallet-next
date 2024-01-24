"use client";

import React, { FC } from "react";
import type { TSurveyInfoProps } from "./types";

export const SurveyInfo: FC<TSurveyInfoProps> = ({}) => {
    return (
        <div
            className="form-step form-survey-info"
            id="form-survey-info"
        >
            <ul className="unordered-list">
                <li>Two years in the market is a good reason for more understanding our clients and find best way to improve our product.</li>
                <li>It’s short survey created to collect common, but important data. As a final, you get airdrop in currency, which you choose at the end of survey.</li>
                <li>We don’t collect confidential data as phone number, card number, residence address and etc.</li>
            </ul>
        </div>
    );
};
