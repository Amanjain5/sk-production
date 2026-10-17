import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import VideoImageLink from './VideoImageLink.tsx'


// Component

        function InsightSwiper() {
            return (
                <div role="list" className="swiper-wrapper w-dyn-items">
                    <InsightItem
                        poster="images/5201e8e2-7350-4bc7-b35d-6ad24122abef.jpg"
                        imageId="38"
                        title="GHOST E-RIOT CF Launch"
                    />
                    <InsightItem
                        poster="images/5303eac8-5f0c-4993-81d0-73f502800c69.jpg"
                        imageId="39"
                        title="RAYMON TAROK Launch Campaign"
                    />
                    <InsightItem
                        poster="images/293ec0cb-9ac8-438a-9d35-415dfcc63e84.jpg"
                        imageId="40"
                        title="SUNLIGHT Vanlife Launch Campaign"
                    />
                    <InsightItem
                        poster="images/0f5bf38e-7e6f-4a81-bb94-30d46a96f7df.jpg"
                        imageId="41"
                        title="WHY NOT feat. Korbinian Engstler - FULL MTB MOVIE"
                    />
                    <InsightItem
                        poster="images/e017eebb-630d-4573-85f4-b688e25c8601.jpg"
                        imageId="42"
                        title="WHY NOT feat. Korbinian Engstler - FULL MTB MOVIE"
                    />
                </div>
            );
        }
    

// Subcomponents

        function InsightItem({
            poster,
            imageId,
            title
        }: {
            poster: string;
            imageId: string;
            title: string;
        }) {
            return (
                <div
                    data-stroke="corner-hover"
                    role="listitem"
                    className="insight_item w-dyn-item"
                >
                    <div
                        data-stroke="visual"
                        className="insight_visual_wrap"
                        style={{ position: "relative" }}
                    >
                        <video
                            playsInline={" "}
                            loop={""}
                            muted={""}
                            preload="metadata"
                            poster={poster}
                            className="u-video"
                        >
                        </video>

                        <VideoImageLink imageId={imageId} />
                    </div>

                    <div className="tag_wrap">
                        <div className="tag_layout">
                            <div className="tag_text u-text-style-main">
                                [
                            </div>
                            <div className="tag_text u-text-style-small">
                                {title}
                            </div>
                            <div className="tag_text u-text-style-main">
                                ]
                            </div>
                        </div>
                    </div>

                    <div className="insight_line_wrap">
                        <div className="insight_line_vertical is-left">
                        </div>
                        <div className="insight_line_vertical is-right">
                        </div>
                    </div>

                    <div className="insight_corner_wrap">
                        <div
                            data-stroke="corner"
                            className="g_corner_wrap"
                        >
                            <InsightCorner variant="" />
                            <InsightCorner variant="w-variant-184d5821-e27e-4abc-3885-0c4d5f7ac467" />
                            <InsightCorner variant="w-variant-63d23aba-50cc-94f6-ccbc-3a304f1f9855" />
                            <InsightCorner variant="w-variant-dc7e8987-a344-b981-5809-84a480bbcb55" />
                        </div>
                    </div>
                </div>
            );
        }

        function InsightCorner({
            variant
        }: {
            variant: string;
        }) {
            const itemClassName = variant
                ? `g_corner_item ${variant}`
                : "g_corner_item";

            const elementClassName = variant
                ? `g_corner_el ${variant}`
                : "g_corner_el";

            return (
                <div
                    style={{
                        "--corner-size": "var(--corner--large)"
                    } as React.CSSProperties}
                    className={itemClassName}
                >
                    <div className={elementClassName}>
                    </div>
                </div>
            );
        }
    

export default InsightSwiper
