"use client";

import React, { FC, SyntheticEvent, useState } from "react";

import type { TSendCurProps } from "./types";
import Modal from "@/ui/Modal";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import Btn from "@/ui/Btn/Btn";
import Toast from "@/ui/Toast";

import { assetsCabModalData } from "@/data/modals/data";
import { defaultSendCur, errSendCur } from "@/data/modals/toast";
import { ROUTES } from "@/data/routes";
import { SEND_CUR_INIT_VALUES, SEND_CUR_INP_DATA } from "@/data/pages/inp-data";
import { PAY_LIMITS } from "@/data/constants/limits";

export const SendCur: FC<TSendCurProps> = ({ modalId, formId, pureAmount, isOpen, setIsOpenModal }) => {
    const [formData, setFormData] = useState<Record<"walletAddress" | "amount" | "networkFee", string>>(SEND_CUR_INIT_VALUES);
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
            setFormData(SEND_CUR_INIT_VALUES);
            // setIsOpenModal({ ...isOpen, send: false });
        });

        // * TODO Submit to server
        // * ...
    };

    return (
        <Modal
            modalId={modalId}
            modalDialogClassName={assetsCabModalData.send.modalDialogClassName}
            isOpen={isOpen.send}
            onCloseModal={() => {
                setFormData(SEND_CUR_INIT_VALUES);
                setIsConnectErr(false);
                setIsOpenModal({ ...isOpen, send: false });
            }}
        >
            <Modal.Header
                titleIcon={assetsCabModalData.send.titleIcon}
                title={assetsCabModalData.send.title}
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
                            <Inp
                                type="text"
                                id={SEND_CUR_INP_DATA.walletAddress.id}
                                name={SEND_CUR_INP_DATA.walletAddress.id}
                                className="inp wallet-inp"
                                title={SEND_CUR_INP_DATA.walletAddress.title}
                                placeholder={SEND_CUR_INP_DATA.walletAddress.placeholder}
                                autoComplete="off"
                                required
                                minLength={SEND_CUR_INP_DATA.walletAddress.min}
                                maxLength={SEND_CUR_INP_DATA.walletAddress.max}
                                value={formData.walletAddress}
                                onChange={(e) => {
                                    setFormData({ ...formData, walletAddress: e.target.value });
                                }}
                            />
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="number"
                                id={SEND_CUR_INP_DATA.amount.id}
                                name={SEND_CUR_INP_DATA.amount.id}
                                className="inp"
                                title={SEND_CUR_INP_DATA.amount.title}
                                placeholder={SEND_CUR_INP_DATA.amount.title}
                                autoComplete="off"
                                required
                                min={SEND_CUR_INP_DATA.amount.min}
                                step={0.00000001}
                                max={SEND_CUR_INP_DATA.amount.max}
                                value={formData.amount}
                                onChange={(e) => getNetworkFeeHandler(e)}
                            />
                            <small className="form-controller__message">
                                {+formData.amount > pureAmount ? SEND_CUR_INP_DATA.amount.balanceErr : ""}

                                {+formData.amount === 0 && formData.amount !== "" ? SEND_CUR_INP_DATA.amount.zeroErr : ""}
                            </small>
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="text"
                                id={SEND_CUR_INP_DATA.networkFee.id}
                                name={SEND_CUR_INP_DATA.networkFee.id}
                                className="inp"
                                title={SEND_CUR_INP_DATA.networkFee.title}
                                placeholder={SEND_CUR_INP_DATA.networkFee.placeholder}
                                disabled
                                value={formData.networkFee}
                            />
                        </StyledWrapper>
                        <p className="modal-info"> Funds will be credited after 3 confirmations in cryptocurrency network (approximately 20-40 min.)</p>
                    </div>
                </Modal.Content>
                <Modal.Footer className="modal-footer btn-group">
                    <Btn
                        type="submit"
                        className="btn btn-fill-sm"
                        disabled={isDataSend}
                    >
                        <span>{isDataSend ? "Sending..." : "Send"}</span>
                    </Btn>
                </Modal.Footer>
            </form>
        </Modal>
    );
};
