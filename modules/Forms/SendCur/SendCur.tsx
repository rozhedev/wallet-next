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
    const [amount, setAmount] = useState<string>("");
    const [networkFee, setNetworkFee] = useState<string>("");

    const submitHandler: (e: SyntheticEvent) => Promise<any> = async (e) => {
        e.preventDefault();
        await new Promise((resolve: any) => setTimeout(resolve, 1000));
    };

    const getNetworkFeeHandler = (e: any) => {
        let inpValue = e.target.value
        setAmount(inpValue);

        let networkFee: string = (inpValue * 0.05).toFixed(6);
        setNetworkFee(networkFee);        
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
                                value={amount}
                                onChange={getNetworkFeeHandler}
                            />
                        </StyledWrapper>
                        <StyledWrapper className="form-controller">
                            <Inp
                                type="text"
                                id="send-cur-fee"
                                name="send-cur-fee"
                                className="inp"
                                title="Network fee"
                                placeholder="Network fee"
                                disabled
                                value={networkFee}
                            />
                        </StyledWrapper>
                        <p className="modal-info">Funds will be credited after 3 confirmations in cryptocurrency network (approximately 30-50 min.)</p>
                    </div>
                </Modal.Content>
                <Modal.Footer className="modal-footer btn-group">
                    <Btn
                        type="submit"
                        className="btn btn-fill-sm"
                    >
                        <span>Send</span>
                    </Btn>
                </Modal.Footer>
            </form>
        </Modal>
    );
};
