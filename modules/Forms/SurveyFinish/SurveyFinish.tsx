"use client";

import React, { FC } from "react";
import type { TSurveyFinishProps } from "./types";
import { borrowMoneyIcon } from "@/data/pages/web3-icons";

export const SurveyFinish: FC<TSurveyFinishProps> = ({ amount, curName, minutesCount }) => {
    return (
        <div
            className="form-step form-survey-finish"
            id="form-survey-finish"
        >
            {borrowMoneyIcon}
            <div className="form-survey-finish__info">
                <h6 className="navlink">
                    Airdrop amount: <span id="survey-airdrop-amount">{amount}</span>
                </h6>
                <h6 className="navlink">
                    Airdrop currency: <span id="survey-airdrop-currency">{curName}</span>
                </h6>
            </div>
            <div className="form-step__descr">
                <p>Survey done! Airdrop will be credited within {minutesCount} minutes. If you have any problems please contact technical support.</p>
            </div>
        </div>
    );
};
