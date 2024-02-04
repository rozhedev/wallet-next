"use client";

import React, { useState } from "react";
import Link from "next/link";

// * ui components
import Btn from "@/ui/Btn/Btn";
import Inp from "@/ui/Inp/Inp";
import Select from "@/ui/Select/Select";
import Dropdown from "@/ui/Dropdown";
import Modal from "@/ui/Modal";

// * Components & modules
import VariantsList from "@/components/VariantsList";
import LinkList from "@/components/LinkList";
import Header, { headerLinks, dropdownLinks, langSelectOptions } from "@/modules/layout/Header";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Textarea from "@/ui/Textarea/Textarea";

// * Data
import { testRadioBtnList } from "@/data/test/radioBtnVariants";
import { testRadioList } from "@/data/test/checkboxBtnVariants";
import { testToggleBtnList } from "@/data/test/toggleBtnVariants";
import { testSelectData, testSelectLang } from "@/data/test/selectData";
import { testLinksData } from "@/data/test/linksData";
import { checkedRoundedIcon, chevronBottomIcon, globeIcon, userIcon } from "@/data/pages/ui-icons";
import { type TInputListItemArr } from "@/types/data/shared";
import Checkbox from "@/ui/Checkbox/Checkbox";
import RateProvider from "@/providers/RateProvider";
import { rateObjInit } from "@/data/pages/rate-api";

export default function Test() {
    // * Remove _lock class, added in Header.tsx
    typeof window !== "undefined" && document.body.classList.remove("_lock");

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const testArr: Record<"form2", TInputListItemArr> = {
        form2: [
            {
                id: "survey-answer1-1",
                type: "checkbox",
                name: "survey-answer1-1",
                label: "Radio 1",
            },
            {
                id: "survey-answer1-2",
                type: "checkbox",
                name: "survey-answer1-2",
                label: "Radio 2",
            },
            {
                id: "survey-answer1-3",
                type: "checkbox",
                name: "survey-answer1-3",
                label: "Radio 3",
            },
            {
                id: "survey-answer1-4",
                type: "checkbox",
                name: "survey-answer1-4",
                label: "Radio 4",
            },
        ],
    };

    type TCheckboxState = {
        form2: {
            [key: string]: boolean;
        };
    };
    const [testForm, setTestForm] = useState<TCheckboxState>({
        form2: {
            "survey-answer1-1": false,
            "survey-answer1-2": false,
            "survey-answer1-3": false,
            "survey-answer1-4": false,
        },
    });

    const checkboxTestChangeHandler = (name: string) => {
        setTestForm((prev: TCheckboxState) => {
            const currentState = {
                ...prev,
                form2: { ...prev.form2, [name]: !testForm.form2[name] },
            };
            console.log(currentState);
            return currentState;
        });
    };

    return (
        <section
            className="test assets"
            id="test"
        >
            <Header
                linksArr={headerLinks}
                langOptionsArr={langSelectOptions}
            >
                <Dropdown>
                    <Dropdown.Btn>
                        <span>Discover</span>
                        {chevronBottomIcon}
                    </Dropdown.Btn>
                    <Dropdown.Menu>
                        <LinkList linksArr={dropdownLinks} />
                    </Dropdown.Menu>
                </Dropdown>
            </Header>

            <div className="container">
                <RateProvider rates={rateObjInit}>
                    <span>Load rate</span>
                </RateProvider>
                <br />
                <br />

                <StyledWrapper className="form-controller">
                    {testArr.form2.map((item: any) => (
                        <Checkbox
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            value={item.label}
                            checked={testForm.form2[item.name]}
                            onChange={() => checkboxTestChangeHandler(item.name)}
                            disabled={item.disabled}
                        >
                            {item.label}
                        </Checkbox>
                    ))}
                </StyledWrapper>
                <br />
                <br />

                {/* // * Button which opened modal */}
                <Btn
                    type="button"
                    className="btn-fill"
                    onClick={() => setIsOpenModal(true)}
                >
                    <span>Open modal</span>
                </Btn>
                <Modal
                    modalId="modal-test"
                    modalDialogClassName="modal-dialog modal-dialog--success"
                    isOpen={isOpenModal}
                    onCloseModal={() => setIsOpenModal(false)}
                >
                    <Modal.Header
                        titleIcon={checkedRoundedIcon}
                        title="Success modal"
                    />
                    <Modal.Content className="modal-dialog__body">
                        <p>This event is over. Stay tuned so you don&apos;t miss any new promotions.</p>
                    </Modal.Content>
                    <Modal.Footer className="modal-footer btn-group">
                        <Btn
                            type="button"
                            className="btn btn-fill-sm"
                            onClick={() => setIsOpenModal(false)}
                        >
                            <span>Close</span>
                        </Btn>
                    </Modal.Footer>
                </Modal>

                <Link
                    href="/assets"
                    className="link"
                    scroll={false}
                >
                    Assets
                </Link>
                <h1 className="h1">h1 Lorem ipsum dolor sit amet...</h1>
                <h2 className="h2">h2 Lorem ipsum dolor sit amet...</h2>
                <h3 className="h3">h3 Lorem ipsum dolor sit amet...</h3>
                <h4 className="h4">h4 Lorem ipsum dolor sit amet...</h4>
                <h5 className="h5">h5 Lorem ipsum dolor sit amet...</h5>
                <h6 className="output">Output Lorem ipsum dolor sit amet...</h6>
                <Link
                    href="/assets"
                    className="navlink"
                    scroll={false}
                >
                    Assets
                </Link>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur ipsam iste voluptates velit nemo cupiditate magni deserunt nihil odit! Incidunt officia consequuntur
                    culpa odio soluta a provident quia distinctio?
                </p>
                <span className="label-text">Lorem ipsum dolor</span>
                <br />
                <br />
                <Btn
                    type="button"
                    className="btn-fill"
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill-sm"
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill-xs"
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-outline"
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-outline-sm"
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-outline-xs"
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill"
                    disabled={true}
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill-xs"
                    disabled={true}
                >
                    <span>Create account</span>
                    {userIcon}
                </Btn>
                <br />
                <StyledWrapper className="form-controller">
                    <Inp
                        type="text"
                        id="test-inp1"
                        label="Test input 1"
                        className="inp"
                        placeholder="Enter text"
                    />
                </StyledWrapper>
                <br />
                <br />
                <StyledWrapper className="form-controller">
                    <Inp
                        type="text"
                        id="test-inp2"
                        label="Test input 2"
                        className="inp"
                        disabled={true}
                        placeholder="Enter text"
                    />
                </StyledWrapper>
                <br />
                <br />
                <StyledWrapper className="form-controller">
                    <Textarea
                        id="test-textarea1"
                        label="Textarea"
                        rows={2}
                        className="textarea inp"
                        placeholder="Enter in textarea"
                    />
                </StyledWrapper>
                <br />
                <br />
                <Select
                    id="test-select"
                    className="select"
                    options={testSelectData}
                    title="test-select"
                />
                <br />
                <Select
                    id="test-select-disabled"
                    className="select select--disabled"
                    disabled={true}
                    options={testSelectData}
                    title="test-select-disabled"
                />
                <br />
                <Select
                    id="test-select-header"
                    className="select select--header"
                    options={testSelectLang}
                    title="test-select-header"
                    svgIcon={globeIcon}
                />
                <br />
                <br />
                <Dropdown>
                    <Dropdown.Btn>
                        <span>Smartphones</span>
                        {chevronBottomIcon}
                    </Dropdown.Btn>
                    <Dropdown.Menu>
                        <LinkList linksArr={testLinksData} />
                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <br />
                <div className="form-wrapper">
                    <form
                        action="#"
                        id="signup-form"
                        className="form form-test"
                    >
                        <VariantsList dataArr={testRadioBtnList} />
                        <VariantsList dataArr={testRadioList} />
                        <br />
                        <VariantsList dataArr={testToggleBtnList} />
                        <br />
                    </form>
                </div>
            </div>
        </section>
    );
}
