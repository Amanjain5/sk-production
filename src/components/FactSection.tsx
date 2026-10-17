import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Tag from './Tag.tsx'
import TagText from './TagText.tsx'
import FactCenterNumberList from './FactCenterNumberList.tsx'


// Component

        function FactSection({
            number,
            description
        }: {
            number: string;
            description: string;
        }) {
            return (
                <section className={"fact_wrap u-section"}>
                    <div className={"u-embed-css w-embed sf-hidden"}>

                    </div>
                    <div className={"fact_contain u-container"}>
                        <div className={"fact_layout"}>
                            <div className={"tag_wrap u-margin-bottom-5"}>
                                <div className={"tag_layout"}>
                                    <TagText text="[" textStyle="main" />
                                    <TagText text="Fact" textStyle="small" />
                                    <TagText text="]" textStyle="main" />
                                </div>
                            </div>
                            <div className={"fact_center_wrap"}>
                                <div className={"fact_center_ruler"}>

                                </div>
                                <div className={"fact_center_number_wrap"}>
                                    <FactCenterNumberList />
                                </div>
                                <div className={"fact_center_ruler is-bottom"}>

                                </div>
                                <div className={"fact_center_gradient"}>

                                </div>
                                <div className={"u-color-faded-30"}>

                                </div>
                            </div>
                            <div
                                data-number={number}
                                className={"c-paragraph w-richtext u-rich-text u-margin-top-8 u-alignment-center u-color-faded-30 u-weight-medium u-line-height-6 u-letter-spacing-loose-2"}
                            >
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    

export default FactSection
