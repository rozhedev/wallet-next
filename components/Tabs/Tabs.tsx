import React, { FC, memo, useState, JSX } from "react";
import type { T_TabsWrapperProps, T_TabsNavProps, T_TabsNavItem } from "./types";
import { navItemsArr } from "./data";
import FaqAccordion from "@/components/FaqAccordion";
import type { TAccordionContent } from "@/components/FaqAccordion";

export const TabsWrapper = ({ contentArr }: T_TabsWrapperProps): JSX.Element => {
    const [selectedTabId, setSelectedTabId] = useState<number>(navItemsArr[0].id);
    const tabClickHandler = (id: number) => setSelectedTabId(id);

    return (
        <div className="tabs-wrapper">
            <div className="tabs">
                <TabsNav
                    selectedTabId={selectedTabId}
                    tabsArr={navItemsArr}
                    onClick={tabClickHandler}
                />
                <div className="tabs__content">
                    {selectedTabId === navItemsArr[0].id && (
                        <div className="tabs__content-item">
                            {contentArr[0].map((item: TAccordionContent) => (
                                <FaqAccordion
                                    key={item.key}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    )}
                    {selectedTabId === navItemsArr[1].id && (
                        <div className="tabs__content-item">
                            {contentArr[1].map((item: TAccordionContent) => (
                                <FaqAccordion
                                    key={item.key}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    )}
                    {selectedTabId === navItemsArr[2].id && (
                        <div className="tabs__content-item">
                            {contentArr[2].map((item: TAccordionContent) => (
                                <FaqAccordion
                                    key={item.key}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Tabs: FC<T_TabsNavProps> = ({ onClick, selectedTabId, tabsArr }) => {
    return (
        <div className="tabs__nav">
            {tabsArr &&
                navItemsArr.map((tab: T_TabsNavItem) => (
                    <button
                        type="button"
                        key={tab.id}
                        className={`tabs__nav-item navlink ${tab.id === selectedTabId ? "_active" : ""}`}
                        onClick={() => onClick(tab.id)}
                    >
                        <span>{tab.label}</span>
                    </button>
                ))}
        </div>
    );
};

// * Use TabsNav instead Tabs
const TabsNav = memo(Tabs);

TabsWrapper.TabsNav = TabsNav;
