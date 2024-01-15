"use client";

import React, { FC, SyntheticEvent, useState } from "react";

import type { TSendCurProps } from "./types";
import Modal from "@/ui/Modal";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import Btn from "@/ui/Btn/Btn";

import { assetsCabModalData } from "@/data/modals/data";
import { ROUTES } from "@/data/routes";

export const SendCur: FC<TSendCurProps> = ({ modalId, formId, isOpen, onCloseModal }) => {
    const [formData, setFormData] = useState<Record<"walletAddress" | "amount" | "networkFee", string>>({
        walletAddress: "",
        amount: "",
        networkFee: "",
    });
    const [isDataSend, setIsDataSend] = useState<boolean>(false);

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
        setFormData({
            walletAddress: "",
            amount: "",
            networkFee: "",
        });

        // * Mock request
        await new Promise((resolve: any) => {
            setIsDataSend(true);
            setTimeout(resolve, 1500);
        });
        await new Promise((resolve: any) => {
            setIsDataSend(false);
            setTimeout(resolve, 2000);
        });
        // * TODO Submit to server
        // * ...
    };

    return (
        <Modal
            modalId={modalId}
            modalDialogClassName={assetsCabModalData.send.modalDialogClassName}
            isOpen={isOpen}
            onCloseModal={onCloseModal}
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
                                id="send-cur-wallet-address"
                                name="send-cur-wallet-address"
                                className="inp"
                                title="Wallet address"
                                placeholder="Wallet address"
                                autoComplete="off"
                                required
                                minLength={3}
                                maxLength={42}
                                value={formData.walletAddress}
                                onChange={(e) => {
                                    setFormData({ ...formData, walletAddress: e.target.value });
                                }}
                            />
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="number"
                                id="send-cur-amount"
                                name="send-cur-amount"
                                className="inp"
                                title="Amount"
                                placeholder="Amount"
                                autoComplete="off"
                                required
                                min={0.00000001}
                                step={0.00000001}
                                max={999999}
                                value={formData.amount}
                                onChange={(e) => getNetworkFeeHandler(e)}
                            />
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="text"
                                id="send-cur-network-fee"
                                name="send-cur-network-fee"
                                className="inp"
                                title="Network fee"
                                placeholder="Network fee"
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
