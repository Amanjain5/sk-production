import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import DecorativeDiv from './DecorativeDiv.tsx'
import FooterAttributionLink from './FooterAttributionLink.tsx'
import Footer from './Footer.tsx'


// Component

        function SiteFooter() {
            return (
                <footer className={"footer_wrap"}>
                    <h2 className={"footer_title u-sr-only"}>
                        Footer
                    </h2>
                    <div className={"footer_contain u-container"}>
                        <Footer />
                        <div className={"footer_bottom_wrap"}>
                            <div className={"footer_bottom_layout"}>
                                <div className={"footer_bottom_line"}>
                                    <DecorativeDiv
                                        className="g_line"
                                        backgroundColor="rgba(255,255,255,0.2)"
                                    />
                                </div>
                                <div className={"footer_bottom_text u-text-style-main u-color-faded-30"}>
                                    <span>
                                        {`© `}
                                    </span>
                                    <span>
                                        {`{{year}}`}
                                    </span>
                                    <span>
                                        {` SNCKD. All Rights Reserved.`}
                                    </span>
                                </div>
                                <FooterAttributionLink />
                            </div>
                        </div>
                    </div>
                    <div className={"u-embed-js w-embed w-script sf-hidden"}>
                    </div>
                </footer>
            );
        }
    

export default SiteFooter
