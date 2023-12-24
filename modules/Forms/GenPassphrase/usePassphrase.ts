import React from "react";
import { PASSPHRASE_LENGTH } from "@/data/constants/limits";

export const usePassphrase = (wordArr: string[]) => {
    let randomIndex = 0;
    let passArr = [];

    for (let i = 0; i < PASSPHRASE_LENGTH; i++) {
        randomIndex = getRandomIndex(wordArr);
        passArr.push(wordArr[randomIndex]);
        if (i >= 1 && passArr[i] == passArr[i - 1]) passArr.push(wordArr[getRandomIndex(wordArr)]);
    }

    let passStr = passArr.join(" ");
    let passLength = passArr.length;
    return { passArr, passStr, passLength };
};

function getRandomIndex(wordArr: string[]) {
    return Math.round(Math.random() * wordArr.length);
}
