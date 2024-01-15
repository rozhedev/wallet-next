"use client";

import React, { FC } from "react";
import Image from "next/image";

import type { TGetCurModalProps } from "./types";
import Modal from "@/ui/Modal";
import Btn from "@/ui/Btn/Btn";
import CopyBtn from "@/components/CopyBtn";
import { assetsCabModalData } from "@/data/modals/data";

export const GetCurModal: FC<TGetCurModalProps> = ({ modalId, walletAddress, curName, qrCodeImg, isOpen, onCloseModal }) => {
    return (
        <Modal
            modalId={modalId}
            modalDialogClassName={assetsCabModalData.get.modalDialogClassName}
            isOpen={isOpen}
            onCloseModal={onCloseModal}
        >
            <Modal.Header
                titleIcon={assetsCabModalData.get.titleIcon}
                title={assetsCabModalData.get.title}
            />

            <Modal.Content className="modal-dialog__body">
                <h5 className="h5">Your address & QR code:</h5>
                <div className="modal-dialog__body-content">
                    <span id="btc-address">{walletAddress}</span>
                    <CopyBtn
                        className="copy-btn"
                        beforeClickLabel=""
                        afterClickLabel=""
                        value={walletAddress}
                    />
                </div>
                <div className="modal-dialog__body-qr-code">
                    <Image
                        src={qrCodeImg}
                        alt="qr-code"
                    />
                </div>
                <p className="modal-info">Send only {curName} to this address. Sending any other coins may result in their irretrievable loss.</p>
            </Modal.Content>
            <Modal.Footer className="modal-footer btn-group">
                <Btn
                    type="button"
                    className="btn btn-fill-sm"
                    onClick={onCloseModal}
                >
                    <span>Close</span>
                </Btn>
            </Modal.Footer>
        </Modal>
    );
};
