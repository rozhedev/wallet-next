"use client";

import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import TabsWrapper from "@/components/Tabs";
import { projectNames } from "@/data/pages/common";
import { rulesContent } from "@/data/pages/rules";
import { contentArr } from "@/components/Tabs/data";

export default function Faq() {
    return (
        <SectionLayout id="faq">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Popular questions"
            />
            <div className="page-inner">
                <TabsWrapper contentArr={contentArr} />
            </div>
        </SectionLayout>
    );
}
