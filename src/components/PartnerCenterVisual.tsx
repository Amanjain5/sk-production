import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Triangle_play_button from './icons/Triangle_play_button.tsx'
import HeroVideoLightbox from './HeroVideoLightbox.tsx'
import VideoImageLink from './VideoImageLink.tsx'


// Component

        function PartnerCenterVisual() {
            return (
                <div className="partner_center_visual">
                    <Img id="4" />
                    <div className="hero_bg_wrap">
                        <div className="hero_bg_visual_wrap">
                            <a className="hero_bg_lightbox_wrap w-inline-block w-lightbox">
                            </a>
                            <div
                                className="u-video w-embed"
                                style={{ position: "relative" }}
                            >
                                <HeroVideoLightbox
                                    poster="images/ada7a79b-8a47-4804-820e-f0ea0a626ee7.jpg"
                                />
                                <VideoImageLink imageId="5" />
                            </div>
                        </div>
                        <div className="partner_center_play_btn">
                            <div className="partner_center_play_icon">
                                <Triangle_play_button />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

export default PartnerCenterVisual
