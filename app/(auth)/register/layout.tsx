import AuthWrapper from "@/modules/layout/AuthWrapper";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import SectionLayout from "@/modules/layout/SectionLayout";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthWrapper className="register-page">
            <SectionLayout id="register">
                <PageBreadcrumb
                    // * Don't add space between slash and &nbsp;
                    separator={<span>&nbsp;/&nbsp;</span>}
                    activeClass="breadcrumb-active"
                    pageTitle="Register"
                />
                {children}
            </SectionLayout>
        </AuthWrapper>
    );
}
