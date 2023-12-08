import SectionLayout from "@/components/layout/SectionLayout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";

export default function PrivacyPolicy() {
    return (
        <SectionLayout id="assets">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Privacy Policy"
            />
            <div className="page-inner">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio blanditiis nam, voluptatum soluta atque iusto aliquam magni impedit ducimus facere ipsam numquam eveniet, laudantium accusamus maxime minus minima quo.
            </div>
        </SectionLayout>
    );
}
