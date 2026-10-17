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
                    text: "We create campaigns, short-form content and content systems designed for how brands communicate today."
                },
                "1": {
                    text: "The first 1.7 seconds decide everything. We build every frame to break the scroll — no slow intros, no warm-ups."
                },
                "2": {
                    text: "One production, full content library. We plan every shoot to deliver hero films, reels, stories and teasers without ever feeling repetitive."
                },
                "3": {
                    text: "Consistency beats campaigns. We design every production to feed your channels for weeks, not days."
                }
            };

            return paragraphData[String(id)] ?? paragraphData["0"];
        }
    

export default Paragraph
