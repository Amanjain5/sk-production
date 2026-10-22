import React from "react";
import type { JSX } from "react/jsx-runtime";

import Img from "./Img.tsx";

// Component

function LogoLink({
  className,
  imageId,
}: {
  className: string;
  imageId: string;
}) {
  return (
    <a className={className}>
      <Img id={imageId} />
    </a>
  );
}

export default LogoLink;
