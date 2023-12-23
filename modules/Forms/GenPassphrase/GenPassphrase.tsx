"use client";

import React, { FC, JSX } from "react";
import Inp from "@/ui/Inp/Inp";
import FormController from "@/components/FormController";
import type { TGenPassphraseProps } from "./types";
import { TInpProps } from "@/ui/Inp/types";
import { currentPassphrase } from "./usePassphrase";

export const GenPassphrase = ({ id, className }: TGenPassphraseProps): JSX.Element => {
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
            <button
                type="button"
                className="copy-btn"
                id="copy-btn-passphrase"
            >
                <span>Copy to clipboard</span>
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M22.8572 41.143H4.57153V4.57153H41.143V22.8572" />
                    <path d="M59.4286 22.8572H22.8572V59.4286H59.4286V22.8572Z" />
                </svg>
            </button>
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
