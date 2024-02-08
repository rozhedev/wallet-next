"use client";

import React, { FC, SyntheticEvent, useState } from "react";

import type { TSendCurProps } from "./types";
import Modal from "@/ui/Modal";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import Btn from "@/ui/Btn/Btn";

import { assetsCabModalData } from "@/data/modals/data";
import { ROUTES } from "@/data/routes";
import { SEND_CUR_INP_DATA } from "@/data/pages/inp-data";

export const SendCur: FC<TSendCurProps> = ({ modalId, formId, pureAmount, isOpen, setIsOpenModal }) => {
    const [formData, setFormData] = useState<Record<"walletAddress" | "amount" | "networkFee", string>>({
        walletAddress: "",
        amount: "",
        networkFee: "",
    });
    const [isDataSend, setIsDataSend] = useState<boolean>(false);

    // pureAmount > 0 && console.log(pureAmount);

    const getNetworkFeeHandler = (e: any) => {
        let value = e.target.value;
        setFormData({ ...formData, amount: value });
        let networkFeeValue: string = (+value * 0.05).toFixed(6);

        setFormData({
            ...formData,
            amount: value,
            networkFee: networkFeeValue,
        });
    };

    const submitHandler: (e: SyntheticEvent) => Promise<any> = async (e) => {
        e.preventDefault();

        // * Mock request
        await new Promise((resolve: any) => {
            setIsDataSend(true);
            setTimeout(resolve, 2000);
        });
        await new Promise((resolve: any) => {
            setIsDataSend(false);
            setFormData({
                walletAddress: "",
                amount: "",
                networkFee: "",
            });
            setIsOpenModal({ ...isOpen, send: false });
        });

        // * TODO Submit to server
        // * ...
    };

    return (
        <Modal
            modalId={modalId}
            modalDialogClassName={assetsCabModalData.send.modalDialogClassName}
            isOpen={isOpen.send}
            onCloseModal={() => setIsOpenModal({ ...isOpen, send: false })}
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
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="text"
                                id={SEND_CUR_INP_DATA.walletAddress.id}
                                name={SEND_CUR_INP_DATA.walletAddress.id}
                                className="inp"
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
                        <p className="modal-info">Funds will be credited after 3 confirmations in cryptocurrency network (approximately 30-50 min.)</p>
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
