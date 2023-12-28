"use client";

import React, { FC } from "react";
import { useFieldArray } from "react-hook-form";
import FormController from "@/components/FormController";
import Checkbox from "@/ui/Checkbox/Checkbox";
import CopyBtn from "@/components/CopyBtn";

import type { TGenPassphraseProps } from "./types";
import { INP_DATA } from "@/data/pages/inp-data";

export const GenPassphrase: FC<TGenPassphraseProps> = ({ id, className, passArr, passStr, register, control, setValue, errors }) => {
    const { fields } = useFieldArray({
        control,
        name: "passphrase-inp",
    });

    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">Write down or copy these words in the correct order and keep them in a safe place.</legend>

            <FormController className="form-controller">
                <ol
                    className="ordered-list form-controller form-inp-grid"
                    style={{
                        display: "grid",
                        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
                        gridAutoFlow: "row dense",
                        gridGap: "1rem",
                    }}
                >
                    {fields.map((field, i) => (
                        <li
                            className="passphrase-item"
                            key={field.id}
                        >
                            <input
                                type="text"
                                id={`passphrase-inp.${i}.value`}
                                title={`Passphrase word ${i}`}
                                className="inp"
                                readOnly
                                value={passArr[i]}
                                autoComplete="off"
                                {...register(`passphrase-inp.${i}.value`, {})}
                            />
                        </li>
                    ))}
                </ol>
            </FormController>
            <CopyBtn
                isRegister={true}
                value={passStr}
            />
            <FormController className="form-controller">
                <Checkbox
                    id="pass-checkbox"
                    name="pass-checkbox"
                    register={register}
                    required
                    onClick={() => {
                        passArr.map((pass, i) => setValue(`passphrase-inp.${i}.value`, pass, { shouldValidate: true, shouldDirty: true, shouldTouch: true }));
                    }}
                >
                    I confirm, that the password is saved in a safe place
                </Checkbox>
                <small className="form-controller__message">{errors["pass-checkbox"]?.type === "required" && INP_DATA.passCheckboxErrText}</small>
            </FormController>
        </fieldset>
    );
};
