"use client";

import React, { FC } from "react";
import type { TGetCurModalProps } from "./types";
import Modal from "@/ui/Modal";
import Btn from "@/ui/Btn/Btn";
import { assetsCabModalData } from "@/data/modals/data";

export const GetCurModal: FC<TGetCurModalProps> = ({ modalId, isOpen, onCloseModal }) => {
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
                <p>Get cryptocurrency modal</p>
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
