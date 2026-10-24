import React from "react";
import type { JSX } from "react/jsx-runtime";

import LogoLink from "./LogoLink.tsx";
import VideoImageLink from "./VideoImageLink.tsx";
import CallToAction from "./CallToAction.tsx";
import ButtonLink from "./ButtonLink.tsx";
import FooterGroup from "./FooterGroup.tsx";

// Component

function Footer() {
  return (
    <nav className="footer_layout">
      <div className="footer_top_wrap u-grid-custom">
        <div className="footer_content">
          <div className="footer_content_top">
            <div
              data-number="36"
              className="c-paragraph w-variant-5c484503-e2a0-ac99-680d-56013d859efa w-richtext u-text-trim-on u-line-height-3 u-letter-spacing-tight-1 u-color-faded-80"
            >
              <p>
                Brand films, social media content, always-on production. We
                produce for outdoor and action brands. Get in touch, we'd be
                happy to help.
              </p>
            </div>

            <div className="footer_content_btn_wrap">
              <CallToAction text="Let's write your story" />

              <div className="footer_content_btn_visual_wrap">
                <div className="u-video w-background-video w-background-video-atom">
                  <video
                    id="8d67de42-93f5-2a33-2617-549f261254cc-video"
                    autoPlay=""
                    loop=""
                    style={{
                      backgroundImage:
                        "url(images/83134c2d-d7a9-442a-87da-e7ce411bb38b.jpg)",
                    }}
                    muted=""
                    playsInline=""
                    poster="data-asset-9b2a6a94-57a3-4553-a16e-f39052fb88f5.png"
                  >
                    <source></source>
                    <source></source>
                  </video>

                  <VideoImageLink imageId="68" />
                </div>
              </div>
            </div>
          </div>

          <div className="footer_content_bottom">
            <div className="footer_content_button_wrap">
              <p className="u-text-style-small u-color-faded-30">INDORE · MUMBAI</p>
              <ButtonLink text="skypcreativestudio@gmail.com" />
            </div>

            <div className="footer_nav">
              <FooterGroup dataId="0" />
              <FooterGroup dataId="2" />
              <FooterGroup dataId="1" />
            </div>
          </div>
        </div>

        <LogoLink
          className="footer_logo_wrap w-inline-block w--current"
          imageId="69"
        />
      </div>
    </nav>
  );
}

export default Footer;
