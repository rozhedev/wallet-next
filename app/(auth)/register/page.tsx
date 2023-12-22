"use client";

import Link from "next/link";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import Card from "@/ui/Card/Card";
import Inp from "@/ui/Inp/Inp";
import Checkbox from "@/ui/Checkbox/Checkbox";
import Btn from "@/ui/Btn/Btn";
import FormController from "@/components/FormController";
import { FormProgressBar } from "@/components/FormProgressBar/FormProgressBar";

export default function Register() {
    return (
        <SectionLayout id="register">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Register"
            />
            <div className="page-inner">
                <Card className="form-wrapper">
                    <FormProgressBar/>
                    <form
                        action="#"
                        className="form"
                        data-multiform-type="register"
                    >
                        <fieldset
                            className="form-step form-user-data _active"
                            id="form-user-data"
                            data-step="form-register"
                        >
                            <FormController className="form-conroller">
                                <Inp
                                    type="text"
                                    className="inp"
                                    placeholder="Username"
                                />
                            </FormController>
                            <FormController className="form-conroller">
                                <Inp
                                    type="email"
                                    className="inp"
                                    placeholder="Email"
                                />
                            </FormController>
                            <FormController className="form-conroller">
                                <Checkbox
                                    id="signup-checkbox"
                                    nameAttr="signup-checkbox"
                                >
                                    I accept{" "}
                                    <Link
                                        href="/privacy_policy"
                                        className="link"
                                    >
                                        Privacy policy
                                    </Link>{" "}
                                    and agree with the{" "}
                                    <Link
                                        href="/terms"
                                        className="link"
                                    >
                                        Terms of Service
                                    </Link>
                                </Checkbox>
                            </FormController>
                            <div className="btn-group">
                                <Btn
                                    type="button"
                                    className="btn btn-fill-sm"
                                >
                                    <span>Next step</span>
                                </Btn>
                            </div>
                            <span>
                                Already have a wallet?{" "}
                                <Link
                                    href="signin.html"
                                    className="link"
                                >
                                    Sign In
                                </Link>
                            </span>
                        </fieldset>
                    </form>
                </Card>
            </div>
        </SectionLayout>
    );
}
