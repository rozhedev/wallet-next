"use client";

import React, { FC, JSX } from "react";
import Inp from "@/ui/Inp/Inp";
import FormController from "@/components/FormController";
import type { TEnterPassphraseProps } from "./types";
import { TInpProps } from "@/ui/Inp/types";
import { usePassphrase } from "../GenPassphrase";
import { bip39 } from "@/data/constants/bip39";

export const EnterPassphrase = ({ id, className, legend, updateFields }: TEnterPassphraseProps): JSX.Element => {
    const { passArr } = usePassphrase(bip39);
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">{legend}</legend>

            <FormController className="form-controller form-inp-grid">
                {passArr.map((value, i) => (
                    <ConfirmInput
                        key={i}
                        name={`confirm-inp${i}`}
                        id={`confirm-inp${i}`}
                        title={`confirm-input ${i}`}
                        placeholder={`${i + 1}`}
                        onChange={(e) => updateFields({ [`${value}${i}`]: e.target.value })}
                    />
                ))}
            </FormController>
        </fieldset>
    );
};

const ConfirmInput: FC<TInpProps> = ({ placeholder, ...props }) => {
    return (
        <Inp
            type="text"
            className="inp confirm-inp"
            placeholder={placeholder}
            maxLength={11}
            autoComplete="off"
            {...props}
        />
    );
};
