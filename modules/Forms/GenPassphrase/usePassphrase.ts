import React from "react";

import { bip39 } from "@/data/constants/bip39";
import { PASSPHRASE_LENGTH } from "@/data/constants/limits";

function genPassphrase(wordArr: string[]) {
    let randomIndex = 0;
    let tempArr = [];

    for (let i = 0; i < PASSPHRASE_LENGTH; i++) {
        randomIndex = getRandomIndex(wordArr);
        tempArr.push(wordArr[randomIndex]);
        if (i >= 1 && tempArr[i] == tempArr[i - 1]) tempArr.push(wordArr[getRandomIndex(wordArr)]);
    }

    return tempArr;
}

function getRandomIndex(wordArr: string[]) {
    return Math.round(Math.random() * wordArr.length);
}

export const currentPassphrase: string[] = genPassphrase(bip39);
