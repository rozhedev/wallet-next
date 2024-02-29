import AuthWrapper from "@/modules/layout/AuthWrapper";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import SectionLayout from "@/modules/layout/SectionLayout";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthWrapper className="signin-page">
            <SectionLayout id="signin">
                <PageBreadcrumb
                    // * Don't add space between slash and &nbsp;
                    separator={<span>&nbsp;/&nbsp;</span>}
                    activeClass="breadcrumb-active"
                    pageTitle="Sign in"
                />
                {children}
            </SectionLayout>
        </AuthWrapper>
    );
}
