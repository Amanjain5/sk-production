import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import CookiebotPoweredByLink from './CookiebotPoweredByLink.tsx'
import CookieConsentContent from './CookieConsentContent.tsx'
import CybotCookiebotScrollbarContainer from './CybotCookiebotScrollbarContainer.tsx'
import CookieDetailsLink from './CookieDetailsLink.tsx'
import CookiebotLevelButtonWrapper from './CookiebotLevelButtonWrapper.tsx'
import CookieConsentButton from './CookieConsentButton.tsx'
import CookieConsentSelection from './CookieConsentSelection.tsx'
import CookieConsentButtonsWrapper from './CookieConsentButtonsWrapper.tsx'
import Footer from './Footer.tsx'


// Component

        function CookiebotDialog() {
            return (
                <div
                    id={"CybotCookiebotDialog"}
                    role={"region"}
                    tabIndex={"-1"}
                    lang={"en"}
                    dir={"ltr"}
                    style={{
                        display: "flex",
                        fontSize: "0.9375rem"
                    }}
                    data-template={"bottom"}
                    className={"CybotEdge CybotMultilevel CybotCookiebotDialogActive"}
                >
                    <div className={"CybotCookiebotDialogContentWrapper"}>
                        <div id={"CybotCookiebotDialogHeader"}>
                            <div id={"CybotCookiebotDialogHeaderLogosWrapper"}>
                                <div id={"CybotCookiebotDialogPoweredbyLink"}>
                                    <Img id="0" />
                                </div>
                                <CookiebotPoweredByLink />
                            </div>
                        </div>

                        <div
                            id={"CybotCookiebotDialogNav"}
                            className={"CybotCookiebotScrollAreaSide sf-hidden"}
                        >
                        </div>

                        <div id={"CybotCookiebotDialogTabContent"}>
                            <div
                                id={"CybotCookiebotDialogBody"}
                                className={"CybotCookiebotDialogTabPanel"}
                                role={"tabpanel"}
                                lang={"en"}
                            >
                                <div className={"CybotCookiebotScrollContainer"}>
                                    <CookieConsentContent />
                                    <CybotCookiebotScrollbarContainer />
                                </div>

                                <div
                                    className={"CybotCookiebotDialogGpcContainer"}
                                    style={{ display: "none" }}
                                >
                                </div>

                                <div className={"CybotCookiebotDialogBodyBottomWrapper"}>
                                    <div id={"CybotCookiebotDialogBodyLevelWrapper"}>
                                        <div id={"CybotCookiebotDialogBodyLevelButtons"}>
                                            <div id={"CybotCookiebotDialogBodyLevelButtonsTable"}>
                                                <div id={"CybotCookiebotDialogBodyLevelButtonsRow"}>
                                                    <div id={"CybotCookiebotDialogBodyLevelButtonsSelectPane"}>
                                                        <CookieConsentSelection />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <CookieDetailsLink />
                                </div>
                            </div>

                            <HiddenScrollContainer />
                            <HiddenScrollContainer />
                            <HiddenScrollContainer />
                        </div>

                        <div
                            id={"CybotCookiebotDialogFooter"}
                            className={"CybotCookiebotScrollContainer"}
                        >
                            <div className={"CybotCookiebotScrollArea"}>
                                <div id={"CybotCookiebotDialogBodyButtons"}>
                                    <CookiebotLevelButtonWrapper />
                                    <CookieConsentButtonsWrapper />
                                </div>
                            </div>

                            <div className={"CybotCookiebotScrollbarContainer sf-hidden"}>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function HiddenScrollContainer() {
            return (
                <div
                    className={"CybotCookiebotScrollContainer CybotCookiebotDialogHide sf-hidden"}
                >
                </div>
            );
        }
    

export default CookiebotDialog
