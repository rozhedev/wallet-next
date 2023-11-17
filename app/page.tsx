import Image from "next/image";
import React from "react";
import Link from "next/link";
import Btn from "@/ui/Btn/Btn";
import Inp from "@/ui/Inp/Inp";
import Select from "@/ui/Select/Select";
import VariantsList from "@/components/VariantsList/VariantsList";
import { testRadioBtnList } from "@/data/radioBtnVariants";
import { testCheckboxList } from "@/data/checkboxBtnVariants";
import Toggle from "@/ui/Toggle/Toggle";
import { testToggleBtnList } from "@/data/toggleBtnVariants";

export default function Home() {
    return (
        <section
            className="test assets"
            id="test"
        >
            <div className="container">
                <h1 className="h1">h1 Lorem ipsum dolor sit amet...</h1>
                <h2 className="h2">h2 Lorem ipsum dolor sit amet...</h2>
                <h3 className="h3">h3 Lorem ipsum dolor sit amet...</h3>
                <h4 className="h4">h4 Lorem ipsum dolor sit amet...</h4>
                <h5 className="h5">h5 Lorem ipsum dolor sit amet...</h5>
                <h6 className="output">Output Lorem ipsum dolor sit amet...</h6>
                <Link
                    href="/about"
                    className="navlink"
                >
                    About
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
                    className="select"
                    defaultValue="Сортировка по"
                    disabled={false}
                />
                <br />
                <Select
                    className="select select--disabled"
                    defaultValue="Сортировка по"
                    disabled={true}
                />
                <br />
                <div className="form-wrapper">
                    <form
                        action=""
                        id="signup-form"
                        className="form form-test"
                    >
                        <VariantsList dataArr={testRadioBtnList} />
                        <VariantsList dataArr={testCheckboxList} />
                        <br />
                        <VariantsList dataArr={testToggleBtnList} />
                        <br />
                        {/* <Toggle
                            id="toggle-test-normal"
                            nameAttr="toggle-test-normal"
                            classNameModif="toggle"
                            label="Confirmation before sending cryptocurrency 1"
                            disabled={false}
                            defaultChecked={false}
                        />
                        <br />
                        <Toggle
                            id="toggle-test-disabled"
                            nameAttr="toggle-test1"
                            classNameModif="toggle--disabled"
                            label="Confirmation before sending cryptocurrency 2"
                            disabled={false}
                            defaultChecked={false}
                        />
                        <br />
                        <Toggle
                            id="toggle-test-readonly"
                            nameAttr="toggle-test2"
                            classNameModif="toggle--readonly"
                            label="Confirmation before sending cryptocurrency 3"
                            disabled={false}
                            defaultChecked={true}
                        /> */}
                    </form>
                </div>
            </div>
        </section>
    );
}
