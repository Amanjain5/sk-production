import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import UnnamedSvg from './icons/UnnamedSvg.tsx'
import CookiebotDialog from './CookiebotDialog.tsx'


// Component
function CookiebotPoweredByLink() {
    return <a rel={"noopener nofollow"} target={"_blank"} id={"CybotCookiebotDialogPoweredbyCybot"} tabIndex={"-1"}>
    	<UnnamedSvg />
    </a>
}


export default CookiebotPoweredByLink
