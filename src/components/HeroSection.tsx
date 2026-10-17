import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import Paragraph from './Paragraph.tsx'
import MainButton1 from './MainButton1.tsx'
import MainButton from './MainButton.tsx'


// Component

        function HeroSection({
            heading,
            buttonLabel
        }: {
            heading: string;
            buttonLabel: string;
        }) {
            return (
                <section className={"hero_wrap u-section"}>
                    <div className={"u-embed-css w-embed sf-hidden"}>

                    </div>
                    <div className={"hero_contain u-container"}>
                        <div className={"hero_visual_target"}>
                            <Img id="2" />
                        </div>
                        <div className={"hero_layout"}>
                            <div className={"hero_content_wrap"}>
                                <h1 className={"hero_content_heading u-text-style-display"}>
                                    {heading}
                                </h1>
                                <div className={"hero_content_bottom"}>
                                    <Paragraph dataId="0" />
                                    <MainButton1 label={buttonLabel} />
                                </div>
                            </div>
                            <div className={"hero_time_wrap"}>
                                <p className={"hero_time_text u-text-style-main u-color-faded u-secondary-family"}>
                                    <span>
                                        08:00 AM
                                    </span>
                                    <span>
                                        , GERMANY
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"hero_overlay"}>
                        <Img id="3" />
                    </div>
                </section>
            );
        }
    

export default HeroSection
