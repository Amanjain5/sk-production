import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Footer from './Footer.tsx'


// Component
function FooterAttributionLink() {
    return <a target={"https://amanbhansali.netlify.app/"} className={"footer_bottom_link_wrap w-inline-block"}>
    	<div className={"footer_bottom_link_text u-text-style-small"}>
    		Website made by Aman Jain
    	</div>
    	<div className={"footer_bottom_link_line"}>
    
    	</div>
    </a>
}

export default FooterAttributionLink