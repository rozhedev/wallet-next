"use client";

import React, { FC, JSX } from "react";
import FormController from "@/components/FormController";
import Inp from "@/ui/Inp/Inp";
import CopyBtn from "@/components/CopyBtn";

import type { TGenPassphraseProps } from "./types";
import type { TInpProps } from "@/ui/Inp/types";
import { usePassphrase } from "./usePassphrase";
import { bip39 } from "@/data/constants/bip39";

export const GenPassphrase = ({ id, className }: TGenPassphraseProps): JSX.Element => {
    let {passArr, passStr} = usePassphrase(bip39);

    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">Write down or copy these words in the correct order and keep them in a safe place.</legend>

            <FormController className="form-controller">
                <ol className="ordered-list form-controller form-inp-grid">
                    {passArr.map((value, i) => (
                        <PassphraseItem
                            key={value}
                            id={`passphrase-word${i}`}
                            title={`passphrase word ${i}`}
                            value={value}
                        />
                    ))}
                </ol>
            </FormController>
            <CopyBtn
                isRegister={true}
                value={passStr}
            />
        </fieldset>
    );
};

const PassphraseItem: FC<TInpProps> = ({ value, ...props }) => {
    return (
        <li className="passphrase-item">
            <Inp
                type="text"
                className="inp"
                placeholder=""
                readOnly={true}
                value={value}
                {...props}
            />
        </li>
    );
};
