"use client";

import React, { FC } from "react";
import Inp from "@/ui/Inp/Inp";
import Checkbox from "@/ui/Checkbox/Checkbox";
import FormController from "@/components/FormController";
import Link from "next/link";
import type { TRegisterDetailsProps } from "./types";
import { ROUTES } from "@/data/routes";

export const RegisterDetails: FC<TRegisterDetailsProps> = ({ id, className, username, email, updateFields }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <FormController className="form-controller">
                <Inp
                    type="text"
                    className="inp"
                    id="register-username"
                    title="Username"
                    placeholder="Username"
                    required={true}
                    value={username}
                    onChange={(e) => updateFields({ username: e.target.value })}
                />
            </FormController>
            <FormController className="form-controller">
                <Inp
                    type="email"
                    className="inp"
                    id="register-email"
                    title="Email"
                    placeholder="Email"
                    required={true}
                    value={email}
                    onChange={(e) => updateFields({ email: e.target.value })}
                />
            </FormController>
            <FormController className="form-controller">
                <Checkbox
                    id="signup-checkbox"
                    name="signup-checkbox"
                >
                    I accept{" "}
                    <Link
                        href={ROUTES.public.privacyPolicy}
                        className="link"
                    >
                        Privacy policy
                    </Link>{" "}
                    and agree with the{" "}
                    <Link
                        href={ROUTES.public.terms}
                        className="link"
                    >
                        Terms of Service
                    </Link>
                </Checkbox>
            </FormController>
        </fieldset>
    );
};
