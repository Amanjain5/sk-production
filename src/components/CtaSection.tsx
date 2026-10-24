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
            heading = "Tell us what you want.",
            description = "Every great frame starts with a conversation. Share your brand, your goal, your wildest idea, and we’ll come back with a vision, not just a quote.",
            buttonLabel = "START A CONVERSATION",
            imageId = "67"
        }: {
            heading?: string;
            description?: string;
            buttonLabel?: string;
            imageId?: string;
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
                                    {/* Hover video disabled for the 'Shall we start' section */}
                                    {/* <BackgroundVideo /> */}
                                    <VideoImageLink imageId={imageId} />
                                </div>
                            </div>
                            <div className="cta_copy_wrap">
                                <h2 className="cta_copy_heading u-text-style-h3 u-text-trim-on">
                                    {heading}
                                </h2>
                                <p className="cta_copy_description u-color-faded-30 u-line-height-6 u-letter-spacing-loose-2">
                                    {description}
                                </p>
                            </div>
                            <div
                                data-trigger="hover focus"
                                className="button_cta_wrap"
                            >
                                <div className="button_cta_element">
                                    <ButtonCtaIcon />
                                    <CtaText text={buttonLabel} />
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
