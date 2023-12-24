"use client";

import React, { FC, JSX } from "react";
import Inp from "@/ui/Inp/Inp";
import FormController from "@/components/FormController";
import type { TGenPassphraseProps } from "./types";
import { TInpProps } from "@/ui/Inp/types";
import { currentPassphrase } from "./usePassphrase";
import CopyBtn from "@/components/CopyBtn";

export const GenPassphrase = ({ id, className }: TGenPassphraseProps): JSX.Element => {
    let passphraseStr = currentPassphrase.join(" ");
    
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">Write down or copy these words in the correct order and keep them in a safe place.</legend>

            <FormController className="form-controller">
                <ol className="ordered-list form-controller form-inp-grid">
                    {currentPassphrase.map((value, i) => (
                        <PassphraseItem
                            key={value}
                            id={`passphrase-word${i}`}
                            title={`passphrase word ${i}`}
                            value={value}
                        />
                    ))}
                </ol>
            </FormController>
            <CopyBtn isRegister={true} value={passphraseStr} />
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
