"use client";

import React from "react";
import Link from "next/link";

import Header from "@/components/layout/Header/index";
import Btn from "@/ui/Btn/Btn";
import Inp from "@/ui/Inp/Inp";
import Select from "@/ui/Select/Select";
import Dropdown from "@/ui/Dropdown/index";
import VariantsList from "@/components/VariantsList/index";
import LinkList from "@/components/LinkList/index";

import { testRadioBtnList } from "@/data/test/radioBtnVariants";
import { testCheckboxList } from "@/data/test/checkboxBtnVariants";
import { testToggleBtnList } from "@/data/test/toggleBtnVariants";
import { testSelectData, testSelectLang } from "@/data/test/selectData";
import { testLinksData } from "@/data/test/linksData";
import { headerLinks, dropdownLinks, langSelectOptions } from "@/components/layout/Header/data";

export default function Home() {
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
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M52.48 21.76L32 42.24L11.52 21.76" />
                        </svg>
                    </Dropdown.Btn>
                    <Dropdown.Menu>
                        <LinkList linksArr={dropdownLinks} />
                    </Dropdown.Menu>
                </Dropdown>
            </Header>

            <div className="container">
                <Link
                    href="/pages/assets"
                    className="link"
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
                    href="/pages/assets"
                    className="navlink"
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
                    disabled={false}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill-sm"
                    disabled={false}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill-xs"
                    disabled={false}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-outline"
                    disabled={false}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-outline-sm"
                    disabled={false}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-outline-xs"
                    disabled={false}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill"
                    disabled={true}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Btn
                    type="button"
                    className="btn-fill-xs"
                    disabled={true}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Btn>
                <br />
                <Inp
                    className="inp"
                    disabled={false}
                />
                <br />
                <br />
                <Inp
                    className="inp"
                    disabled={true}
                />
                <br />
                <br />
                <Select
                    id="test-select"
                    className="select"
                    disabled={false}
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
                    disabled={false}
                    options={testSelectLang}
                    title="test-select-header"
                    svgIcon={
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M54.8571 17.3372C47.9088 21.3484 40.023 23.45 32 23.4286C23.977 23.45 16.0911 21.3484 9.14282 17.3372" />
                            <path d="M9.14282 46.72C16.0814 42.7247 23.9476 40.6218 31.9542 40.6218C39.9609 40.6218 47.8271 42.7247 54.7657 46.72" />
                            <path d="M28.5713 59.4287C22.6366 51.5157 19.4285 41.8913 19.4285 32.0001C19.4285 22.1089 22.6366 12.4845 28.5713 4.57153" />
                            <path d="M35.4285 4.57153C41.3632 12.4845 44.5713 22.1089 44.5713 32.0001C44.5713 41.8913 41.3632 51.5157 35.4285 59.4287" />
                            <path d="M32.0001 59.4287C47.1485 59.4287 59.4287 47.1485 59.4287 32.0001C59.4287 16.8517 47.1485 4.57153 32.0001 4.57153C16.8517 4.57153 4.57153 16.8517 4.57153 32.0001C4.57153 47.1485 16.8517 59.4287 32.0001 59.4287Z" />
                        </svg>
                    }
                />
                <br />
                <br />
                <Dropdown>
                    <Dropdown.Btn>
                        <span>Smartphones</span>
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M52.48 21.76L32 42.24L11.52 21.76" />
                        </svg>
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
                        <VariantsList dataArr={testCheckboxList} />
                        <br />
                        <VariantsList dataArr={testToggleBtnList} />
                        <br />
                    </form>
                </div>
            </div>
        </section>
    );
}
