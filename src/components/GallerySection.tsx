import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import GalleryItem from './GalleryItem.tsx'


// Component

        function GallerySection() {
            return (
                <section className="galllery_wrap u-section">
                    <div className="u-embed-js w-embed w-script sf-hidden">
                    </div>
                    <div className="galllery_contain u-container">
                        <div className="galllery_layout">
                            <GalleryColumn
                                type="horizontal"
                                horizontalVariant="is-v-1"
                                firstVariant="1"
                                firstImgId="45"
                                secondVariant="2"
                                secondImgId="46"
                                bottomVariant="3"
                                bottomImgId="47"
                            />

                            <GalleryColumn
                                type="single"
                                firstVariant="4"
                                firstImgId="48"
                            />

                            <GalleryColumn
                                type="stacked"
                                firstVariant="5"
                                firstImgId="49"
                                secondVariant="6"
                                secondImgId="50"
                            />

                            <GalleryColumn
                                type="horizontal"
                                firstVariant="7"
                                firstImgId="51"
                                secondVariant="8"
                                secondImgId="52"
                                bottomVariant="9"
                                bottomImgId="53"
                            />

                            <GalleryColumn
                                type="horizontal"
                                horizontalVariant="is-v-1"
                                firstVariant="1"
                                firstImgId="54"
                                secondVariant="2"
                                secondImgId="55"
                                bottomVariant="3"
                                bottomImgId="56"
                            />

                            <GalleryColumn
                                type="single"
                                firstVariant="4"
                                firstImgId="57"
                            />

                            <GalleryColumn
                                type="stacked"
                                firstVariant="5"
                                firstImgId="58"
                                secondVariant="6"
                                secondImgId="59"
                            />

                            <GalleryColumn
                                type="horizontal"
                                firstVariant="7"
                                firstImgId="60"
                                secondVariant="8"
                                secondImgId="61"
                                bottomVariant="9"
                                bottomImgId="62"
                            />

                            <GalleryColumn
                                type="horizontal"
                                horizontalVariant="is-v-1"
                                firstVariant="1"
                                firstImgId="63"
                                secondVariant="2"
                                secondImgId="64"
                                bottomVariant="3"
                                bottomImgId="65"
                            />

                            <GalleryColumn
                                type="single"
                                firstVariant="4"
                                firstImgId="66"
                            />
                        </div>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        type GalleryImageProps = {
            variant: string;
            imgId: string;
        };

        function GalleryImage({
            variant,
            imgId
        }: GalleryImageProps) {
            return (
                <div className={`galllery_item is-${variant}`}>
                    <Img id={imgId} />
                </div>
            );
        }

        type GalleryColumnProps =
            | {
                type: "single";
                firstVariant: string;
                firstImgId: string;
            }
            | {
                type: "stacked";
                firstVariant: string;
                firstImgId: string;
                secondVariant: string;
                secondImgId: string;
            }
            | {
                type: "horizontal";
                horizontalVariant?: string;
                firstVariant: string;
                firstImgId: string;
                secondVariant: string;
                secondImgId: string;
                bottomVariant: string;
                bottomImgId: string;
            };

        function GalleryColumn(props: GalleryColumnProps) {
            if (props.type === "single") {
                return (
                    <div className="galllery_vertical u-flex-vertical-nowrap">
                        <GalleryImage
                            variant={props.firstVariant}
                            imgId={props.firstImgId}
                        />
                    </div>
                );
            }

            if (props.type === "stacked") {
                return (
                    <div className="galllery_vertical u-flex-vertical-nowrap">
                        <GalleryImage
                            variant={props.firstVariant}
                            imgId={props.firstImgId}
                        />
                        <GalleryImage
                            variant={props.secondVariant}
                            imgId={props.secondImgId}
                        />
                    </div>
                );
            }

            return (
                <div className="galllery_vertical u-flex-vertical-nowrap">
                    <div
                        className={
                            props.horizontalVariant
                                ? `galllery_horizontal ${props.horizontalVariant}`
                                : "galllery_horizontal"
                        }
                    >
                        <GalleryItem
                            variant={props.firstVariant}
                            imgId={props.firstImgId}
                        />
                        <GalleryItem
                            variant={props.secondVariant}
                            imgId={props.secondImgId}
                        />
                    </div>
                    <GalleryImage
                        variant={props.bottomVariant}
                        imgId={props.bottomImgId}
                    />
                </div>
            );
        }
    

export default GallerySection
