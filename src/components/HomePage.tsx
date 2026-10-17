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
                heading="High-end visuals. Without the agency chaos."
                buttonLabel="START PROJECT"
            />
        
    	
            <PartnerSection />
        
    	
            <ProblemSection />
        
    	
            <FactSection
                number="50"
                description="That's the average attention span in the feed. Every piece of content we build is designed to win those seconds - the only ones that decide whether your content gets seen at all."
            />
        
    	
            <ServicesSection />
        
    	
                <ContentSection variant="insight" />
            
    	
                <ContentSection variant="clients" />
            
    	
            <GallerySection />
        
    	
            <CtaSection text="Shall we start?" imageId="67" />
        
    </main>
}


export default HomePage
