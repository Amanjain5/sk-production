import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import UnnamedSvg from './icons/UnnamedSvg.tsx'
import UnnamedSvg1 from './icons/UnnamedSvg1.tsx'
import DecorativeDiv from './DecorativeDiv.tsx'
import Paragraph from './Paragraph.tsx'
import Tag from './Tag.tsx'
import VideoImageLink from './VideoImageLink.tsx'
import FeatureHeading from './FeatureHeading.tsx'


// Component

function ProblemSection() {
    return (
        <section className="problem_wrap u-section">
            <div className="u-embed-css w-embed sf-hidden">
            </div>

            <div className="problem_contain u-container">
                <div className="problem_layout">
                    <div className="problem_top_wrap">
                        <div className="tag_wrap">
                            <Tag label="THE SYSTEM" />
                        </div>

                        <div
                            data-number="25"
                            className="c-heading w-variant-701c4b6c-37cf-de59-d80d-80a1822c4994 w-richtext u-text-trim-on u-line-height-3 u-letter-spacing-tight-1 u-text-wrap-pretty u-brand-color-secondary"
                        >
                            <h2>
                                Stay visible. Or get replaced.
                            </h2>
                        </div>
                    </div>

                    <div className="problem_center_wrap">
                        <div className="problem_center_logo">
                            <UnnamedSvg1 />

                            <DecorativeDiv className="problem_center_logo_gradient" />
                        </div>

                        <div className="problem_phone_list_wrap">
                            <ProblemPhoneItem
                                poster="images/17c85ccb-3729-493d-b184-0f70a15a8d1f.jpg"
                                videoClassName="u-video problem_phone_video-1"
                                imageId="29"
                            />

                            <ProblemPhoneItem
                                poster="images/f488e8b6-f283-4096-885a-1b74dc9eee6f.jpg"
                                videoClassName="u-video problem_phone_video-2"
                                imageId="30"
                            />

                            <div className="problem_phone_item has-dynamic-island">
                                <div
                                    className="problem_phone_video_wrap"
                                    style={{ position: "relative" }}
                                >
                                    <video
                                        playsInline={" "}
                                        loop={""}
                                        muted={""}
                                        preload="metadata"
                                        poster="images/d0066876-a832-4769-a9af-e88d8039cbe7.jpg"
                                        className="u-video u-object-position-98 problem_phone_video-3"
                                    >
                                    </video>

                                    <VideoImageLink imageId="31" />

                                    <div className="problem_phone_video-3">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="problem_center_gradient">
                        </div>
                    </div>

                    <div className="problem_bottom_wrap">
                        <ProblemFeatureItem
                            title="Visual Scroll Stop"
                            dataId="1"
                        />

                        <ProblemFeatureItem
                            title="One Shoot. Multiple Outputs."
                            dataId="2"
                        />

                        <ProblemFeatureItem
                            title="Continuous Output"
                            dataId="3"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
    

// Subcomponents

function ProblemPhoneItem({
    poster,
    videoClassName,
    imageId
}: {
    poster: string;
    videoClassName: string;
    imageId: string;
}) {
    return (
        <div className="problem_phone_item">
            <video
                playsInline={" "}
                loop={""}
                muted={""}
                preload="metadata"
                poster={poster}
                className={videoClassName}
            >
            </video>

            <VideoImageLink imageId={imageId} />
        </div>
    );
}

function ProblemFeatureItem({
    title,
    dataId
}: {
    title: string;
    dataId: string;
}) {
    return (
        <div className="problem_bottom_item">
            <FeatureHeading title={title} />

            <Paragraph dataId={dataId} variant={true} />
        </div>
    );
}
    

export default ProblemSection
