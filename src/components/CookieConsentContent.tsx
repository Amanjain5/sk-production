import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CookiebotDialog from './CookiebotDialog.tsx'


// Component

        function CookieConsentContent() {
            return (
                <div
                    id={"CybotCookiebotDialogBodyContent"}
                    className={"CybotCookiebotScrollArea"}
                >
                    <div className={"CybotCookiebotFader"}>

                    </div>
                    <div
                        id={"CybotCookiebotDialogBodyContentTitle"}
                        className={"CybotCookiebotDialogBodyContentHeading"}
                        lang={"en"}
                        role={"heading"}
                    >
                        This website uses cookies
                    </div>
                    <div
                        id={"CybotCookiebotDialogBodyContentText"}
                        lang={"en"}
                    >
                        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
                    </div>
                    <div
                        id={"CybotCookiebotDialogBodyContentDsrText"}
                        className={"CybotCookiebotDialogDsrFormUrlDiv"}
                        lang={"en"}
                        style={{ display: "none" }}
                    >

                    </div>
                </div>
            );
        }
    

export default CookieConsentContent
