import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import HeroSection from './HeroSection.tsx'
import ProblemSection from './ProblemSection.tsx'
import FactSection from './FactSection.tsx'
import GallerySection from './GallerySection.tsx'
import CtaSection from './CtaSection.tsx'
import PartnerSection from './PartnerSection.tsx'
import ServicesSection from './ServicesSection.tsx'
import ContentSection from './ContentSection.tsx'


// Component
function HomePage() {
    return <main className={"page_main"}>
    	
            <HeroSection
                heading="Cinematic visuals. Without the agency chaos."
                buttonLabel="START A PROJECT"
            />
        
    	
            <PartnerSection />
        
    	
            <ProblemSection />
        
    	
            <FactSection
                number="50"
                description="That’s how long you get in the feed. Every reel, ad and film we make is built to win those seconds, because they decide whether your brand gets seen at all."
            />
        
    	
            <ServicesSection />
        
    	
                <ContentSection variant="insight" />
            
    	
            <GallerySection />
        
    	
            <CtaSection
                heading="Tell us what you want."
                description="Every great frame starts with a conversation. Share your brand, your goal, your wildest idea, and we’ll come back with a vision, not just a quote."
                buttonLabel="START A CONVERSATION"
                imageId="67"
            />
        
    </main>
}


export default HomePage
