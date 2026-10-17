import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CookiebotDialog from './CookiebotDialog.tsx'


    
// Component

        function CookieConsentButton({
            id,
            label,
            isHidden = false
        }: {
            id: string;
            label: string;
            isHidden?: boolean;
        }) {
            return (
                <button
                    id={id}
                    className={
                        isHidden
                            ? "CybotCookiebotDialogBodyButton CybotCookiebotDialogHide sf-hidden"
                            : "CybotCookiebotDialogBodyButton"
                    }
                    tabIndex={"0"}
                    lang={"en"}
                >
                    {label}
                </button>
            );
        }
    

export default CookieConsentButton
