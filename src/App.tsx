import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import DesktopNavCorner from './components/DesktopNavCorner.tsx'
import DecorativeDiv from './components/DecorativeDiv.tsx'
import CookieIframe from './components/CookieIframe.tsx'
import CookiebotDialog from './components/CookiebotDialog.tsx'
import DesktopNavigation from './components/DesktopNavigation.tsx'
import Footer from './components/Footer.tsx'
import HomePage from './components/HomePage.tsx'
import AboutPage from './components/AboutPage.tsx'
import GalleryPage from './components/GalleryPage.tsx'
import ContactPage from './components/ContactPage.tsx'
import SiteFooter from './components/SiteFooter.tsx'

import Preloader from './components/Preloader.tsx'
import { initAnimations, playHeroIntro } from './animations.ts'
import './animations.css'
import { useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppContent() {
    const location = useLocation();
    const firstRoute = React.useRef(true);
    const isGallery = location.pathname.startsWith('/projects') || location.pathname.startsWith('/gallery');
    const isContact = location.pathname.startsWith('/contact');
    useEffect(() => {
        window.scrollTo(0, 0);
        const cleanup = initAnimations();
        if (!firstRoute.current) playHeroIntro();
        firstRoute.current = false;
        return cleanup;
    }, [location.pathname]);
    const handleReveal = useCallback(() => playHeroIntro(), []);

    return (
        <>
        <body className={"u-theme-dark"} style={{paddingTop:"0px"}}>
        
                <CookiebotDialog />
                <Preloader onReveal={handleReveal} />
            
        <div className={"page_wrap"}>
        <div className={"u-position-fixed"}>
        <div className={"u-embed-css w-embed sf-hidden"}></div>
        <div className={"w-embed"}></div>
        <div className={"u-embed-css w-embed sf-hidden"}></div>
        <div className={"u-embed-css w-embed sf-hidden"}></div>
        </div>
        <div className={"guide_wrap sf-hidden"}>
        <div className={"w-embed sf-hidden"}></div>
        </div>
        <div className={"nav_component w-variant-dd866659-1d7d-6447-6461-66ca86ca367f"}>
        <div className={"w-embed"}></div>
        <div role={"banner"} className={"nav_desktop_wrap"}>
        <div data-trigger={"hover focus"} className={"nav_desktop_contain"}>
        
                <DesktopNavigation activePage={isContact ? "Contact" : location.pathname.startsWith('/about') ? "About SNCKD" : isGallery ? "Gallery" : "Home"} />
            
        
                <DesktopNavCorner />
            
        
                    <DecorativeDiv className="nav_desktop_bg" />
                
        </div>
        </div>
        <div role={"banner"} className={"nav_mobile_wrap w-nav sf-hidden"}></div>
        <div className={"nav_dropdown_backdrop"}></div>
        <div className={"nav_menu_backdrop sf-hidden"}></div>
        </div>
        {isContact ? <ContactPage /> : location.pathname.startsWith('/about') ? <AboutPage /> : isGallery ? <GalleryPage /> : <HomePage />}
        
                <SiteFooter />
            
        </div>
        
                    <CookieIframe
                        className="CybotCookiebotHiddenIframe sf-hidden"
                        name="__uspapiLocator"
                    />
                
        
                    <CookieIframe
                        className="CybotCookiebotOffscreenIframe"
                        sandbox="allow-popups allow-top-navigation-by-user-activation"
                        src="/frames/ec90462e-664c-4958-a5e2-c986e66f5b0a/index.html"
                    />
                
        </body>
        </>
    );
}

function App() {
    const defaultRoute = "/";

    return (
        <Router>
            <Routes>
                {defaultRoute !== '/' && <Route path="/" element={<Navigate to={defaultRoute} replace />} />}
                <Route path="*" element={<AppContent />} />
            </Routes>
        </Router>
    );
}

export default App
