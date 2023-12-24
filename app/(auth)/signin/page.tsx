"use client";

import Link from "next/link";

import Card from "@/ui/Card/Card";
import Btn from "@/ui/Btn/Btn";
import BtnGroup from "@/ui/BtnGroup/BtnGroup";

import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";
import { ROUTES } from "@/data/routes";

export default function Signin() {
    return (
        <SectionLayout id="signin">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Sign in"
            />
            <div className="page-inner">
                <Card className="form-wrapper">
                    <form
                        action="/dashboard"
                        className="form form-confirm"
                        id="signin-form-confirm"
                    >
                        <EnterPassphrase
                            id="register-confirm-form"
                            className="form-step"
                            legend="Copy the passphrase you received during registration."
                            updateFields={() => null}
                        />
                        <BtnGroup className="btn-group">
                            <Btn
                                type="button"
                                className="btn btn-fill-sm"
                            >
                                <span>Sign in</span>
                            </Btn>
                        </BtnGroup>
                        <span className="form-backlink">
                            Don&apos;t have wallet?&nbsp;
                            <Link
                                href={ROUTES.public.register}
                                className="link"
                            >
                                Register
                            </Link>
                        </span>
                    </form>
                </Card>
            </div>
        </SectionLayout>
    );
}
