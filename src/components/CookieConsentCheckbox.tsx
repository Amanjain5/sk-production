import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CookiebotDialog from './CookiebotDialog.tsx'


    
// Component

        function CookieConsentCheckbox({
            category,
            isNecessary = false
        }: {
            category: "Necessary" | "Preferences" | "Statistics" | "Marketing";
            isNecessary?: boolean;
        }) {
            return (
                <input
                    type={"checkbox"}
                    id={`CybotCookiebotDialogBodyLevelButton${category}`}
                    className={
                        isNecessary
                            ? "CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyLevelButtonDisabled"
                            : "CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyLevelConsentCheckbox"
                    }
                    {...(isNecessary
                        ? {
                            disabled: "",
                            checked: ""
                        }
                        : {
                            tabIndex: "0",
                            role: "switch"
                        })}
                    value={"on"}
                />
            );
        }
    

export default CookieConsentCheckbox
