import React from "react";
import type { JSX } from "react/jsx-runtime";

import LogoLink from "./LogoLink.tsx";
import NavigationLinks from "./NavigationLinks.tsx";

// Component

function DesktopNavigation({ activePage = "Home" }: { activePage?: string }) {
  return (
    <div className="nav_desktop_layout">
      <LogoLink
        className="nav_desktop_logo w-inline-block w--current"
        imageId="1"
      />
      <nav role="navigation" className="nav_desktop_menu_wrap">
        <div className="nav_links_component w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
          <NavigationLinks activePage={activePage} />
        </div>
      </nav>
    </div>
  );
}

export default DesktopNavigation;
