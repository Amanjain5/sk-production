import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Tag from './Tag.tsx'
import ClickableWrap from './ClickableWrap.tsx'
import TagText from './TagText.tsx'
import ButtonIcon from './ButtonIcon.tsx'
import MainButton from './MainButton.tsx'
import ClientTestimonial from './ClientTestimonial.tsx'
import InsightSwiper from './InsightSwiper.tsx'
import ArrowButton from './ArrowButton.tsx'
import ClientTestimonialList from './ClientTestimonialList.tsx'
import ClientLogoList from './ClientLogoList.tsx'


    
// Component

        function ContentSection({
            variant
        }: {
            variant: "insight" | "clients";
        }) {
            const isInsight = variant === "insight";

            return (
                <section
                    className={
                        isInsight
                            ? "insight_wrap u-section"
                            : "clients_wrap u-section"
                    }
                >
                    <div
                        className={
                            isInsight
                                ? "insight_contain u-container"
                                : "clients_contain u-container"
                        }
                    >
                        <div
                            className={
                                isInsight
                                    ? "insight_layout"
                                    : "clients_layout"
                            }
                        >
                            {isInsight ? (
                                <>
                                    <div className="tag_wrap">
                                        <div className="tag_layout">
                                            <TagText
                                                text="["
                                                textStyle="main"
                                            />

                                            <TagText
                                                text="SKYP ORIGINALS"
                                                textStyle="small"
                                            />

                                            <TagText
                                                text="]"
                                                textStyle="main"
                                            />
                                        </div>
                                    </div>

                                    <div className="insight_content_wrap">
                                        <div className="insight_line_horizontal is-top">

                                        </div>

                                        <div className="insight_line_horizontal is-bottom">

                                        </div>

                                        <div className="insight_slider w-dyn-list">
                                            <InsightSwiper />
                                        </div>

                                        <div className="insight_nav_wrap">
                                            <SectionNavigation
                                                isPointerOn={true}
                                            />
                                        </div>
                                    </div>

                                    <div className="insight_btn_wrap">
                                        <div
                                            data-button=" "
                                            data-trigger="hover focus"
                                            data-hover-btn-40="true"
                                            className="button_main_wrap"
                                        >
                                            <ButtonIcon position="left" />

                                            <MainButton label="See more work" />

                                            <ClickableWrap />

                                            <ButtonIcon position="right" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="clients_top_wrap is-ratio-auto">
                                        <div className="clients_top_collection w-dyn-list">
                                            <ClientTestimonialList />
                                        </div>

                                        <div className="clients_nav_wrap">
                                            <SectionNavigation
                                                isPointerOn={false}
                                            />
                                        </div>
                                    </div>

                                    <div className="clients_bottom_wrap">
                                        <div className="u-display-contents w-dyn-list">
                                            <ClientLogoList />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function SectionNavigation({
            isPointerOn
        }: {
            isPointerOn: boolean;
        }) {
            return (
                <>
                    <ArrowButton
                        isPointerOn={isPointerOn}
                        iconVariant="default"
                    />

                    <ArrowButton
                        isPointerOn={isPointerOn}
                        iconVariant="alternate"
                    />
                </>
            );
        }
    

export default ContentSection
