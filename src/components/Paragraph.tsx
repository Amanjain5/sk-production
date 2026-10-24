import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type ParagraphData = {
            text: string;
        };
    
// Component

        function Paragraph({
            dataId,
            variant = false
        }: {
            dataId: string;
            variant?: boolean;
        }) {
            const { text }: ParagraphData = getParagraphData(dataId);

            return (
                <div
                    data-number={variant ? "38" : "60"}
                    className={
                        variant
                            ? "c-paragraph w-variant-61d538b2-709c-eb7a-4258-8c0890dc07fc w-richtext u-rich-text u-color-faded-30 u-line-height-6 u-letter-spacing-loose-2 u-weight-medium"
                            : "c-paragraph w-richtext u-rich-text u-secondary-family u-line-height-2 u-letter-spacing-loose-2 u-color-faded u-pointer-on"
                    }
                >
                    <p>{text}</p>
                </div>
            );
        }
    


        function getParagraphData(id: string | number): ParagraphData {
            const paragraphData: Record<string, ParagraphData> = {
                "0": {
                    text: "We make brand films, ad campaigns and scroll-stopping social content for brands that want to look premium and post consistently."
                },
                "1": {
                    text: "The first 1.7 seconds decide everything. Every frame we shoot is built to stop the thumb, with no slow intros and no wasted seconds."
                },
                "2": {
                    text: "One production day gives you a full content library: hero film, reels, stories, product stills and teasers. We plan it all upfront so nothing feels repetitive."
                },
                "3": {
                    text: "Consistency beats one-off campaigns. Every shoot is designed to feed your Instagram, ads and website for weeks, not days."
                }
            };

            return paragraphData[String(id)] ?? paragraphData["0"];
        }
    

export default Paragraph
