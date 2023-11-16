import React from "react";
import "../public/scss/globals.scss";

export default function Loading() {
    return (
        <div className="preloader">
            <div className="loader">
                <div className="loader__label">App is loading ...</div>
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};