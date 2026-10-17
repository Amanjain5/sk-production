import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function HeroVideoLightbox({
            poster = "images/ada7a79b-8a47-4804-820e-f0ea0a626ee7.jpg"
        }: {
            poster?: string;
        }) {
            return (
                <a className={"hero_bg_lightbox_wrap w-inline-block w-lightbox"}>
                    <video
                        className={"u-video"}
                        autoPlay={""}
                        muted={""}
                        loop={""}
                        playsInline={""}
                        preload={"auto"}
                        poster={poster}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    >
                        <source type={"video/mp4"}>

                        </source>
                    </video>
                </a>
            );
        }
    

export default HeroVideoLightbox
