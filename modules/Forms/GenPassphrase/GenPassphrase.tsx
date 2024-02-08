"use client";

import React, { FC } from "react";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import ValidCheckbox from "@/ui/ValidCheckbox/ValidCheckbox";
import CopyBtn from "@/components/CopyBtn";

import type { TGenPassphraseProps } from "./types";
import { AUTH_INP_DATA } from "@/data/pages/inp-data";

export const GenPassphrase: FC<TGenPassphraseProps> = ({ id, className, passArr, passStr, register, setValue, errors, passphraseFields }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">Write down or copy these words in the correct order and keep them in a safe place.</legend>

            <StyledWrapper className="form-controller">
                <ol className="ordered-list form-controller form-inp-grid">
                    {passphraseFields.map((field, i) => (
                        <li
                            className="passphrase-item"
                            key={field.id}
                        >
                            <input
                                type="text"
                                id={`${AUTH_INP_DATA.fieldArrValues.passphrase.id}.${i}.value`}
                                title={`${AUTH_INP_DATA.fieldArrValues.passphrase.title} ${i}`}
                                className="inp"
                                readOnly
                                value={passArr[i]}
                                autoComplete="off"
                                {...register(`passphrase-inp.${i}.value`, {})}
                            />
                        </li>
                    ))}
                </ol>
            </StyledWrapper>
            <CopyBtn
                className="copy-btn"
                beforeClickLabel="Copy to clipboard"
                afterClickLabel="Passphrase copied"
                value={passStr}
            />
            <StyledWrapper className="form-controller">
                <ValidCheckbox
                    id="pass-checkbox"
                    name="pass-checkbox"
                    register={register}
                    required
                    onClick={() => {
                        passArr.map((pass, i) => setValue(`passphrase-inp.${i}.value`, pass, { shouldValidate: true, shouldDirty: true, shouldTouch: true }));
                    }}
                >
                    I confirm, that the password is saved in a safe place
                </ValidCheckbox>
                <small className="form-controller__message">{errors["pass-checkbox"]?.type === "required" && AUTH_INP_DATA.passCheckboxErrText}</small>
            </StyledWrapper>
        </fieldset>
    );
};
