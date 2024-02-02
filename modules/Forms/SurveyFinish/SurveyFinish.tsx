"use client";

import React, { FC, memo, useState } from "react";
import type { TSurveyFinishProps } from "./types";
import { AllCurFullNames } from "@/types/data/currencies";
import { borrowMoneyIcon } from "@/data/pages/web3-icons";
import { airdropLimits } from "./data";
import { getRandomNumber } from "@/utils/utils";

export const SurveyFinish: FC<TSurveyFinishProps> = ({ curName, minutesCount }) => {
    const [airdropAmount, setAirdropAmount] = useState<number>(0);

    // * Many rerenders error
    // AllCurFullNames.bitcoin === curName && setAirdropAmount(2);

    // const calcAirdropAmount = () => {
    //     if (AllCurFullNames.bitcoin === curName) return temp = +getRandomNumber(airdropLimits.bitcoin.min, airdropLimits.bitcoin.max).toFixed(8);
    //     if (AllCurFullNames.ethereum === curName) return temp = +getRandomNumber(airdropLimits.ethereum.min, airdropLimits.ethereum.max).toFixed(8);
    //     if (AllCurFullNames.tether === curName) return temp = +getRandomNumber(airdropLimits.tether.min, airdropLimits.tether.max).toFixed(2);
    //     if (AllCurFullNames.binanceCoin === curName) return temp = +getRandomNumber(airdropLimits["binance-coin"].min, airdropLimits["binance-coin"].max).toFixed(8);
    //     if (AllCurFullNames.stellar === curName) return temp = +getRandomNumber(airdropLimits.stellar.min, airdropLimits.stellar.max).toFixed(8);
    //     if (AllCurFullNames.solana === curName) return temp = +getRandomNumber(airdropLimits.solana.min, airdropLimits.solana.max).toFixed(8);
    //     if (AllCurFullNames.litecoin === curName) return temp = +getRandomNumber(airdropLimits.litecoin.min, airdropLimits.litecoin.max).toFixed(8);
    //     if (AllCurFullNames.monero === curName) return temp = +getRandomNumber(airdropLimits.monero.min, airdropLimits.monero.max).toFixed(8);
    //     if (AllCurFullNames.dash === curName) return temp = +getRandomNumber(airdropLimits.dash.min, airdropLimits.dash.max).toFixed(8);
    //     if (AllCurFullNames.tron === curName) return temp = +getRandomNumber(airdropLimits.tron.min, airdropLimits.tron.max).toFixed(8);
    // };

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
