import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import CookieConsentButton from './CookieConsentButton.tsx'
import CookiebotDialog from './CookiebotDialog.tsx'


// Component

        function CookieConsentButtonsWrapper() {
            return (
                <div id={"CybotCookiebotDialogBodyButtonsWrapper"}>
                    <CookieConsentButton
                        id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"
                        label="Allow all"
                    />
                    <CookieConsentButton
                        id="CybotCookiebotDialogBodyLevelButtonCustomize"
                        label="Customize"
                        isHidden={true}
                    />
                    <CookieConsentButton
                        id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
                        label="Allow selection"
                    />
                    <CookieConsentButton
                        id="CybotCookiebotDialogBodyButtonDecline"
                        label="Deny"
                    />
                </div>
            );
        }
    

export default CookieConsentButtonsWrapper
