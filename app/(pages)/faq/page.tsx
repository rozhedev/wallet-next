"use client";

import TabsWrapper, { contentArr } from "@/components/Tabs";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";

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
