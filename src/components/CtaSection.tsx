import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import DecorativeDiv from './DecorativeDiv.tsx'
import VideoImageLink from './VideoImageLink.tsx'
import BackgroundVideo from './BackgroundVideo.tsx'
import ButtonCtaIcon from './ButtonCtaIcon.tsx'
import CtaText from './CtaText.tsx'
import ClickableLink from './ClickableLink.tsx'


// Component

        function CtaSection({
            text,
            imageId
        }: {
            text: string;
            imageId: string;
        }) {
            return (
                <section className="cta_wrap u-section">
                    <div className="cta_contain u-container">
                        <div className="cta_line_wrap">
                            <div
                                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                                className="g_line"
                            ></div>
                        </div>
                        <div className="cta_layout">
                            <div className="cta_visual_wrap">
                                <div className="u-video w-background-video w-background-video-atom">
                                    <BackgroundVideo />
                                    <VideoImageLink imageId={imageId} />
                                </div>
                            </div>
                            <div
                                data-trigger="hover focus"
                                className="button_cta_wrap"
                            >
                                <div className="button_cta_element">
                                    <ButtonCtaIcon />
                                    <CtaText text={text} />
                                    <DecorativeDiv className="button_cta_line" />
                                </div>
                                <div className="clickable_wrap u-cover-absolute">
                                    <ClickableLink />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    

export default CtaSection
