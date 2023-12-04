import SectionLayout from "@/components/layout/SectionLayout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";

export default function Assets() {
    return (
        <SectionLayout id="assets">
            <PageBreadcrumb
                 homeElement={'Home'}
                 separator={<> / &nbsp;</>}
                 activeClass='breadcrumb-active'
                 capitalizeLinks
                 pageTitle="Supported assets"
            />
        </SectionLayout>
    );
}
