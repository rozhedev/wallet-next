import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";

export default function Signin() {
    return (
        <SectionLayout id="signin">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Sign in"
            />
            <div className="page-inner">Signin form</div>
        </SectionLayout>
    );
}
