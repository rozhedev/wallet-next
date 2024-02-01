"use client";

import React, { FC } from "react";
import type { TSurveyFinishProps } from "./types";
import { AllCurFullNames } from "@/types/data/currencies";
import { borrowMoneyIcon } from "@/data/pages/web3-icons";
import { airdropLimits } from "./data";
import { getRandomNumber } from "@/utils/utils";

export const SurveyFinish: FC<TSurveyFinishProps> = ({ curName, minutesCount }) => {
    let airdropAmount: number = 0;

    if (AllCurFullNames.bitcoin === curName) airdropAmount = +getRandomNumber(airdropLimits.bitcoin.min, airdropLimits.bitcoin.max).toFixed(8);
    else if (AllCurFullNames.ethereum === curName) airdropAmount = +getRandomNumber(airdropLimits.ethereum.min, airdropLimits.ethereum.max).toFixed(8);
    else if (AllCurFullNames.tether === curName) airdropAmount = +getRandomNumber(airdropLimits.tether.min, airdropLimits.tether.max).toFixed(2);
    else if (AllCurFullNames.binanceCoin === curName) airdropAmount = +getRandomNumber(airdropLimits["binance-coin"].min, airdropLimits["binance-coin"].max).toFixed(8);
    else if (AllCurFullNames.stellar === curName) airdropAmount = +getRandomNumber(airdropLimits.stellar.min, airdropLimits.stellar.max).toFixed(8);
    else if (AllCurFullNames.solana === curName) airdropAmount = +getRandomNumber(airdropLimits.solana.min, airdropLimits.solana.max).toFixed(8);
    else if (AllCurFullNames.litecoin === curName) airdropAmount = +getRandomNumber(airdropLimits.litecoin.min, airdropLimits.litecoin.max).toFixed(8);
    else if (AllCurFullNames.monero === curName) airdropAmount = +getRandomNumber(airdropLimits.monero.min, airdropLimits.monero.max).toFixed(8);
    else if (AllCurFullNames.dash === curName) airdropAmount = +getRandomNumber(airdropLimits.dash.min, airdropLimits.dash.max).toFixed(8);
    else if (AllCurFullNames.tron === curName) airdropAmount = +getRandomNumber(airdropLimits.tron.min, airdropLimits.tron.max).toFixed(8);

    return (
        <div
            className="form-step form-survey-finish"
            id="form-survey-finish"
        >
            {borrowMoneyIcon}
            <div className="form-survey-finish__info">
                <h6 className="navlink">
                    Airdrop amount: <span id="survey-airdrop-amount">{airdropAmount}</span>
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
