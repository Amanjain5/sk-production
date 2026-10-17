import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CookieConsentCheckbox from './CookieConsentCheckbox.tsx'
import CookiebotDialog from './CookiebotDialog.tsx'


// Component

        function CookieConsentSelection() {
            return (
                <div role={"group"}>
                    <span
                        id={"CybotCookiebotDialogBodyLevelButtonsSelectPaneLegend"}
                        className={"visuallyhidden"}
                    >
                        Consent Selection
                    </span>
                    <div id={"CybotCookiebotDialogBodyFieldsetInnerContainer"}>
                        <CookieConsentCategory
                            category="Necessary"
                            isNecessary={true}
                        />
                        <CookieConsentCategory
                            category="Preferences"
                            isNecessary={false}
                        />
                        <CookieConsentCategory
                            category="Statistics"
                            isNecessary={false}
                        />
                        <CookieConsentCategory
                            category="Marketing"
                            isNecessary={false}
                        />
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function CookieConsentCategory({
            category,
            isNecessary
        }: {
            category: "Necessary" | "Preferences" | "Statistics" | "Marketing";
            isNecessary: boolean;
        }) {
            return (
                <div className={"CybotCookiebotDialogBodyLevelButtonWrapper"}>
                    <label
                        className={"CybotCookiebotDialogBodyLevelButtonLabel"}
                        htmlFor={`CybotCookiebotDialogBodyLevelButton${category}`}
                    >
                        <strong className={"CybotCookiebotDialogBodyLevelButtonDescription"}>
                            {`${category} `}
                        </strong>
                    </label>
                    <div
                        className={
                            isNecessary
                                ? "CybotCookiebotDialogBodyLevelButtonSliderWrapper CybotCookiebotDialogBodyLevelButtonSliderWrapperDisabled"
                                : "CybotCookiebotDialogBodyLevelButtonSliderWrapper"
                        }
                    >
                        <CookieConsentCheckbox
                            category={category}
                            isNecessary={isNecessary}
                        />
                        <span className={"CybotCookiebotDialogBodyLevelButtonSlider"}>
                        </span>
                    </div>
                </div>
            );
        }
    

export default CookieConsentSelection
