"use client";

import React, { FC, SyntheticEvent, useState } from "react";

import type { TSendToCardProps } from "./types";
import Modal from "@/ui/Modal";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import Btn from "@/ui/Btn/Btn";
import Toast from "@/ui/Toast";
import Select from "@/ui/Select/Select";

import { assetsCabModalData } from "@/data/modals/data";
import { fiatCurArr } from "./data";
import { defaultSendCur, errSendCur } from "@/data/modals/toast";
import { ROUTES } from "@/data/routes";
import { SEND_CARD_INIT_VALUES, SEND_CARD_INP_DATA } from "@/data/pages/inp-data";
import { PAY_LIMITS, SEND_CUR_DURATION } from "@/data/constants/limits";
import Link from "next/link";

export const SendToCard: FC<TSendToCardProps> = ({ modalId, formId, pureAmount, isOpen, setIsOpenModal }) => {
    const [formData, setFormData] = useState<Record<"amount" | "cardNumber" | "networkFee", string>>(SEND_CARD_INIT_VALUES);
    const [isDataSend, setIsDataSend] = useState<boolean>(false);
    const [isLackBalance, setIsLackBalance] = useState<boolean>(true);
    const [isConnectErr, setIsConnectErr] = useState<boolean>(false);

    // * Network fee calc & validation
    const getNetworkFeeHandler = (e: any) => {
        let value = e.target.value;
        setFormData({ ...formData, amount: value });
        let networkFeeValue: string = (+value * PAY_LIMITS.networkFeePercent).toFixed(6);

        setFormData({
            ...formData,
            amount: value,
            networkFee: networkFeeValue,
        });
        +value > pureAmount || +value === 0 ? setIsLackBalance(false) : setIsLackBalance(true);
    };

    const submitHandler: (e: SyntheticEvent) => Promise<any> = async (e) => {
        e.preventDefault();
        if (!isLackBalance) return;
        // * Mock request
        await new Promise((resolve: any) => {
            setIsDataSend(true);
            setTimeout(resolve, 2000);
        });
        await new Promise((resolve: any) => {
            setIsDataSend(false);
            setIsConnectErr(true);
            setFormData(SEND_CARD_INIT_VALUES);
            // setIsOpenModal({ ...isOpen, send: false });
        });

        // * TODO Submit to server
        // * ...
    };

    return (
        <Modal
            modalId={modalId}
            modalDialogClassName={assetsCabModalData.sendCard.modalDialogClassName}
            isOpen={isOpen.sendCard}
            onCloseModal={() => {
                setFormData(SEND_CARD_INIT_VALUES);
                setIsConnectErr(false);
                setIsOpenModal({ ...isOpen, sendCard: false });
            }}
        >
            <Modal.Header
                titleIcon={assetsCabModalData.sendCard.titleIcon}
                title={assetsCabModalData.sendCard.title}
            />
            <form
                action={ROUTES.private.assetsCab}
                id={formId}
                onSubmit={submitHandler}
            >
                <Modal.Content className="modal-dialog__body">
                    <div className="form">
                        <Toast
                            id={isConnectErr ? errSendCur.id : defaultSendCur.id}
                            wrapperModif={isConnectErr ? errSendCur.wrapperModif : defaultSendCur.wrapperModif}
                            icon={isConnectErr ? errSendCur.icon : defaultSendCur.icon}
                            content={isConnectErr ? errSendCur.content : defaultSendCur.content}
                        />

                        <StyledWrapper className="form-controller">
                            <Select
                                id={SEND_CARD_INP_DATA.cardNumber.id}
                                name={SEND_CARD_INP_DATA.cardNumber.id}
                                className="select inp"
                                title={SEND_CARD_INP_DATA.cardNumber.title}
                                placeholder={SEND_CARD_INP_DATA.cardNumber.placeholder}
                                autoComplete="off"
                                options={fiatCurArr}
                                required
                                value={formData.cardNumber}
                                onChange={(e) => {
                                    setFormData({ ...formData, cardNumber: e.target.value });
                                }}
                            />
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="number"
                                id={SEND_CARD_INP_DATA.cardNumber.id}
                                name={SEND_CARD_INP_DATA.cardNumber.id}
                                className="inp wallet-inp"
                                title={SEND_CARD_INP_DATA.cardNumber.title}
                                placeholder={SEND_CARD_INP_DATA.cardNumber.placeholder}
                                autoComplete="off"
                                required
                                minLength={SEND_CARD_INP_DATA.cardNumber.min}
                                step={1}
                                maxLength={SEND_CARD_INP_DATA.cardNumber.max}
                                value={formData.cardNumber}
                                onChange={(e) => {
                                    setFormData({ ...formData, cardNumber: e.target.value });
                                }}
                            />
                            <small>Only 16 digits. Enter without whitespaces</small>
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="number"
                                id={SEND_CARD_INP_DATA.amount.id}
                                name={SEND_CARD_INP_DATA.amount.id}
                                className="inp"
                                title={SEND_CARD_INP_DATA.amount.title}
                                placeholder={SEND_CARD_INP_DATA.amount.title}
                                autoComplete="off"
                                required
                                min={SEND_CARD_INP_DATA.amount.min}
                                step={0.00000001}
                                max={SEND_CARD_INP_DATA.amount.max}
                                value={formData.amount}
                                onChange={(e) => getNetworkFeeHandler(e)}
                            />
                            <small className="form-controller__message">
                                {+formData.amount > pureAmount ? SEND_CARD_INP_DATA.amount.balanceErr : ""}

                                {+formData.amount === 0 && formData.amount !== "" ? SEND_CARD_INP_DATA.amount.zeroErr : ""}
                            </small>
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="text"
                                id={SEND_CARD_INP_DATA.networkFee.id}
                                name={SEND_CARD_INP_DATA.networkFee.id}
                                className="inp"
                                title={SEND_CARD_INP_DATA.networkFee.title}
                                placeholder={SEND_CARD_INP_DATA.networkFee.placeholder}
                                disabled
                                value={formData.networkFee}
                            />
                        </StyledWrapper>
                        <details className="advant-accordion">
                            <summary className="summary">
                                <span className="link">How it's work?</span>
                            </summary>

                            <div className="accordion-content">
                                <ol
                                    className="ordered-list"
                                    style={{
                                        fontSize: "0.94rem",
                                        textAlign: "justify",
                                        margin: "0rem",
                                    }}
                                >
                                    <li>Select currency of the country in which you want to receive the payment</li>
                                    <li>Enter card number and amount. Network fee calculated automaticaly (2 - 4% from amount, depending on network load)</li>
                                    <li>
                                        Selected crypto will be converted to selected currency, uses actual course from{" "}
                                        <Link
                                            href={"https://binance.com"}
                                            scroll={false}
                                            className="link"
                                        >
                                            binance.com
                                        </Link>
                                    </li>
                                    <li>
                                        Funds will be credited to your card after 3 confirmations in cryptocurrency network (approximately {SEND_CUR_DURATION.min} - {SEND_CUR_DURATION.max} min.)
                                    </li>
                                </ol>
                            </div>
                        </details>
                    </div>
                </Modal.Content>
                <Modal.Footer className="modal-footer btn-group">
                    <Btn
                        type="submit"
                        className="btn btn-fill-sm"
                        disabled={isDataSend}
                    >
                        <span>{isDataSend ? "Sending..." : "Send to card"}</span>
                    </Btn>
                </Modal.Footer>
            </form>
        </Modal>
    );
};
