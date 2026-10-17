import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import DecorativeDiv from './DecorativeDiv.tsx'
import Tag from './Tag.tsx'
import LargeButton from './LargeButton.tsx'
import ClickableWrap from './ClickableWrap.tsx'
import PartnerCenterContent from './PartnerCenterContent.tsx'
import PartnerCenterVisual from './PartnerCenterVisual.tsx'
import PartnerLogoList from './PartnerLogoList.tsx'


// Component

        function PartnerSection() {
            return (
                <section className="partner_wrap u-section">
                    <div className="u-embed-css w-embed sf-hidden">
                    </div>
                    <div className="partner_contain u-container">
                        <div id="reels" className="partner_layout">
                            <div className="partner_top_wrap">
                                <div className="tag_wrap u-margin-bottom-6">
                                    <Tag label="SPECIALIZED IN OUTDOOR MOVING IMAGES" />
                                </div>
                                <div
                                    data-number="37"
                                    className="c-heading w-variant-701c4b6c-37cf-de59-d80d-80a1822c4994 w-richtext u-color-faded u-text-wrap-pretty u-line-height-2 u-letter-spacing-tight-1 u-margin-bottom-5 u-text-trim-on"
                                >
                                    <p>
                                        Premium productions don't need huge crews or endless coordination. Small, flexible teams let us create high-end visuals efficiently — and keep the process simple on your side.
                                    </p>
                                </div>
                                <div
                                    data-trigger="hover focus"
                                    className="button_large_wrap"
                                >
                                    <LargeButton label="View showreel" />
                                    <ClickableWrap />
                                </div>
                            </div>
                            <div className="partner_bottom_wrap">
                                <div className="partner_center_wrap">
                                    <PartnerCenterVisual />
                                    <PartnerCenterContent />
                                </div>
                                <div className="partner_bottom_logo">
                                    <PartnerLogoList />
                                    <DecorativeDiv className="partner_bottom_gradient" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    

export default PartnerSection
