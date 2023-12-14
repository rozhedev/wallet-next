import SectionLayout from "@/components/layout/SectionLayout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PromoactionsItem from "@/components/items/PromoactionsItem";
import type { TPromoactionsItem } from "@/components/items/PromoactionsItem";
import { promoactionsItemArr } from "@/components/items/PromoactionsItem";

export default function Terms() {
    return (
        <SectionLayout id="promoactions">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Promoactions"
            />
            <div className="page-inner">
                {promoactionsItemArr.map((item: TPromoactionsItem) => (
                    <PromoactionsItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        tags={item.tags}
                        btnLabel={item.btnLabel}
                        isLink={item.isLink}
                        linkHref={item.linkHref}
                    />
                ))}
            </div>
        </SectionLayout>
    );
}
