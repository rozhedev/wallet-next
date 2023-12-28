"use client";

import React, { FC } from "react";
import { useFieldArray } from "react-hook-form";
import FormController from "@/components/FormController";
import type { TEnterPassphraseProps } from "./types";

export const EnterPassphrase: FC<TEnterPassphraseProps> = ({ id, className, legend, register, control }) => {
    const { fields } = useFieldArray({
        control,
        name: "confirm-inp",
    });
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">{legend}</legend>

            <FormController className="form-controller form-inp-grid">
                {/* 
                // * Don't add name attribute for prevent rewrite in Inp component 
                // * Use default input instead Inp for default html5 validation (custom validation message impossible output, because dynamic key is not supported)
                */}
                {fields.map((field, i) => (
                    <input
                        key={field.id}
                        type="text"
                        id={`confirm-inp.${i}.value`}
                        title={`Confirm input ${i}`}
                        className="inp confirm-inp"
                        placeholder={`${i + 1}`}
                        minLength={3}
                        maxLength={11}
                        autoComplete="off"
                        required
                        {...register(`confirm-inp.${i}.value`, {})}
                    />
                ))}
            </FormController>
        </fieldset>
    );
};
