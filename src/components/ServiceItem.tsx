import React from "react";
import type { JSX } from "react/jsx-runtime";

import Img from "./Img.tsx";
import Curved_right_arrow from "./icons/Curved_right_arrow.tsx";
import VideoImageLink from "./VideoImageLink.tsx";

type ServiceItemData = {
  title: string;
  description: string;
  imageId: string;
  videoImageId: string;
  poster: string;
};

// Component

function ServiceItem({ dataId }: { dataId: string }) {
  const { title, description, imageId, videoImageId, poster }: ServiceItemData =
    getServiceItemData(dataId);

  return (
    <div
      data-hover={""}
      role={"listitem"}
      className={"services_item u-grid-custom w-dyn-item"}
    >
      <div className={"services_line_wrap"}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          className={"g_line"}
        ></div>
      </div>

      <div className={"services_visual_wrap u-position-relative"}>
        <div className={"services_visual_empty"}></div>

        <div className={"services_img_wrap"}>
          <Img id={imageId} />
        </div>

        <div className={"services_visual_pixels"}>
          <div className={"services_visual_pixel sf-hidden"}></div>
        </div>
      </div>

      <div className={"services_title_wrap"}>
        <div
          data-services-item={"number"}
          className={"services_title_number u-text-style-small u-color-faded"}
        ></div>

        <div className={"services_title_wrapper"}>
          <div className={"services_title_icon"}>
            <Curved_right_arrow />
          </div>

          <h2 className={"services_title_text u-text-style-h3 u-text-trim-on"}>
            {title}
          </h2>
        </div>
      </div>

      <div className={"services_desc_wrap"}>
        <div
          data-number={"60"}
          className={
            "c-paragraph w-variant-61d538b2-709c-eb7a-4258-8c0890dc07fc w-richtext u-rich-text u-color-faded-30 u-weight-medium u-letter-spacing-loose-2 u-line-height-6"
          }
        >
          <p>{description}</p>
        </div>
      </div>

      <div className={"clickable_wrap u-cover-absolute"}>
        <a className={"clickable_link w-inline-block"}></a>
      </div>

      <div className={"services_item_bg"}>
        {/* Hover video disabled for this section */}
        <div
          className={"services_item_bg-video w-embed"}
          style={{
            position: "relative",
          }}
        >
          {/* <video
            className={"services_item_bg-video lazy-video"}
            muted={""}
            loop={""}
            playsInline={""}
            preload={"none"}
            poster={poster}
          >
            <source type={"video/mp4"}></source>
          </video>

          <VideoImageLink imageId={videoImageId} /> */}
        </div>
      </div>
    </div>
  );
}

function getServiceItemData(id: string | number): ServiceItemData {
  const data: Record<string, ServiceItemData> = {
    "0": {
      title: "Single Production",
      description:
        "One-off campaigns, brand films and hero content. For brands with a specific launch, campaign or moment to capture.",
      imageId: "32",
      videoImageId: "33",
      poster: "images/0debb50a-5a6b-4a03-b3c8-611b66f70b43.jpg",
    },

    "1": {
      title: "Production Retainer",
      description:
        "Recurring shoot days and ongoing content delivery. For brands that need consistent output without rebuilding the production every time.",
      imageId: "34",
      videoImageId: "35",
      poster: "images/f2ce8d57-b7b4-4be6-a855-c92c0f95d3d4.jpg",
    },

    "2": {
      title: "Always-On Partnership",
      description:
        "Full content operation. Monthly shoots, weekly outputs, direct line to the team. For brands that treat content as infrastructure, not a project.",
      imageId: "36",
      videoImageId: "37",
      poster: "images/c6716db7-ceb7-496c-91bc-53add15d53f6.jpg",
    },
  };

  return data[String(id)] ?? data["0"];
}

export default ServiceItem;
