"use client"

import Link from "next/link";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import Card from "@/ui/Card/Card";

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatibus modi vitae, dolore dolores eaque nisi ullam commodi, a excepturi asperiores officiis perspiciatis illum
                    maxime labore quaerat quia expedita dignissimos.
                </Card>
            </div>
        </SectionLayout>
    );
}
